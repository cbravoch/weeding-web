"use client";

/**
 * Componente para el formulario de creación/edición de invitados
 * Este componente maneja la carga de estados de invitados y el formulario para agregar nuevos invitados
 */

import { getGuestStates } from "@/services/guestState";
import { useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaChevronDown, FaCheck, FaTimes, FaMinus } from "react-icons/fa";
import toast from 'react-hot-toast';
import { GuestState } from "@/types/GuestState";
import { storeGuest } from "@/services/guest";
import { GUEST_ESTATE } from "@/constants/guestEstate";

interface FormGuestProps {
    /** Función que se ejecuta cuando se cierra el formulario */
    onClose: () => void;
    /** Función que se ejecuta después de guardar un invitado exitosamente */
    onGuestSaved: () => void;
    /** Función que se llama cuando el formulario ha terminado de cargar */
    onReady: () => void;
    /** Indica si el formulario debe mostrarse listo */
    isFormReady?: boolean;
}

// Declarar la caché en el ámbito del módulo
let cachedGuestStates: GuestState[] | null = null;

export default function FormGuest({ onClose, onGuestSaved, onReady, isFormReady = false }: FormGuestProps) {
    // Estado para almacenar la lista de estados posibles de un invitado
    const [guestStates, setGuestStates] = useState<GuestState[]>([]);
    // Estado para controlar el estado de carga de los datos
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [guest, setGuest] = useState({
        name: '',
        surname: '',
        email: '',
        telephone_number: '',
        guest_state_id: GUEST_ESTATE.PENDING,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setGuest({
            ...guest,
            [name]: name === 'guest_state_id' ? parseInt(value, 10) : value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isSubmitting) return;
        
        setIsSubmitting(true);
        const loadingToast = toast.loading('Guardando invitado...');
        
        try {
            await storeGuest(guest);
            toast.success('Invitado creado correctamente', {
                id: loadingToast,
            });
            onGuestSaved();
            onClose();
        } catch (error) {
            console.error(error);
            toast.error('Error al crear el invitado', {
                id: loadingToast,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        let isMounted = true;
        let loadingToast: string | undefined;
        
        const loadStates = async () => {
            // Usar estados en caché si están disponibles
            if (cachedGuestStates) {
                if (isMounted) {
                    setGuestStates(cachedGuestStates);
                    onReady();
                }
                return;
            }
            
            // Solo cargar estados si no los tenemos
            if (guestStates.length > 0 || !isMounted) {
                onReady();
                return;
            }
            
            setIsLoading(true);
            // Solo mostrar el toast si no hay uno activo
            if (!document.querySelector('.Toastify__toast--loading')) {
                loadingToast = toast.loading('Cargando estados...');
            }
            
            try {
                const states = await getGuestStates();
                // Almacenar en caché los estados
                cachedGuestStates = states;
                
                if (isMounted) {
                    setGuestStates(states);
                    onReady();
                }
            } catch (error) {
                console.error(error);
                toast.error('Error al cargar los estados', {
                    id: loadingToast,
                });
                onClose(); // Cerrar el modal si hay un error
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                    if (loadingToast) {
                        toast.dismiss(loadingToast);
                    }
                }
            }
        };

        loadStates();
        
        return () => {
            isMounted = false;
            if (loadingToast) {
                toast.dismiss(loadingToast);
            }
        };
    }, [guestStates.length, onReady, onClose]);
    
    // Limpiar la caché cuando el componente se desmonte
    useEffect(() => {
        return () => {
            // No limpiar la caché aquí para mantener los estados entre montajes
        };
    }, []);

    if (!isFormReady && isLoading) {
        return (
            <div className="w-full flex justify-center items-center p-8">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#849AAD]"></div>
            </div>
        );
    }

    return (
        <div className="w-full">
            <h2 className="text-2xl md:text-3xl font-elegant text-dorado mb-6">Agregar Invitado</h2>
            <form className="space-y-4">
                {/* Sección de nombre y apellido */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-dorado font-elegant mb-2">Nombre</label>
                        <div className="relative">
                            <input 
                                type="text" 
                                name="name"
                                value={guest.name}
                                onChange={handleInputChange}
                                className="w-full bg-crema border-2 border-[#849AAD] rounded-lg p-2 pl-10 focus:outline-none focus:border-[#849AAD]/80"
                                placeholder="Nombre del invitado"
                                required
                            />
                            <FaUser className="absolute left-3 top-3 text-dorado" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-dorado font-elegant mb-2">Apellido</label>
                        <div className="relative">
                            <input 
                                type="text" 
                                name="surname"
                                value={guest.surname}
                                onChange={handleInputChange}
                                className="w-full bg-crema border-2 border-[#849AAD] rounded-lg p-2 pl-10 focus:outline-none focus:border-[#849AAD]/80"
                                placeholder="Apellido del invitado"
                                required
                            />
                            <FaUser className="absolute left-3 top-3 text-dorado" />
                        </div>
                    </div>
                </div>

                {/* Campo de email */}
                <div>
                    <label className="block text-dorado font-elegant mb-2">Email</label>
                    <div className="relative">
                        <input 
                            type="email" 
                            name="email"
                            value={guest.email}
                            onChange={handleInputChange}
                            className="w-full bg-crema border-2 border-dorado rounded-lg p-2 pl-10 focus:outline-none focus:border-dorado/80"
                            placeholder="email@ejemplo.com"
                            required
                        />
                        <FaEnvelope className="absolute left-3 top-3 text-dorado" />
                    </div>
                </div>

                {/* Campo de teléfono */}
                <div>
                    <label className="block text-dorado font-elegant mb-2">Teléfono</label>
                    <div className="relative">
                        <input 
                            type="tel" 
                            name="telephone_number"
                            value={guest.telephone_number}
                            onChange={handleInputChange}
                            className="w-full bg-crema border-2 border-dorado rounded-lg p-2 pl-10 focus:outline-none focus:border-dorado/80"
                            placeholder="123-456-7890"
                            required
                        />
                        <FaPhone className="absolute left-3 top-3 text-dorado" />
                    </div>
                </div>  

                {/* Selector de estado del invitado */}
                <div>
                    <label className="block text-dorado font-elegant mb-2">Estado</label>
                    <div className="relative">
                        <select 
                            name="guest_state_id"
                            value={guest.guest_state_id}
                            onChange={handleInputChange}
                            className="w-full bg-crema border-2 border-[#849AAD] rounded-lg p-2 pl-10 pr-10 focus:outline-none focus:border-[#849AAD]/80 appearance-none"
                            required
                        >
                            {guestStates.map((state) => {
                                const stateId = Number(state.id);
                                let text, colorClass;
                                
                                if (stateId === GUEST_ESTATE.PENDING) {
                                    text = "Pendiente";
                                    colorClass = "text-yellow-500";
                                } else if (stateId === GUEST_ESTATE.CONFIRMED) {
                                    text = "Confirmado";
                                    colorClass = "text-green-500";
                                } else {
                                    text = "Rechazado";
                                    colorClass = "text-red-500";
                                }
                                
                                return (
                                    <option key={state.id} value={state.id} className={colorClass}>
                                        {text}
                                    </option>
                                );
                            })}
                        </select>
                        <FaChevronDown className="absolute right-3 top-3 text-dorado pointer-events-none" />
                    </div>
                </div>

                {/* Botones de acción */}
                <div className="flex justify-end gap-4 mt-6">
                    <button 
                        type="button" 
                        onClick={onClose}
                        className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-elegant hover:bg-gray-300 transition-colors"
                    >
                        Cancelar
                    </button>
                    <button 
                        type="submit" 
                        onClick={handleSubmit}
                        className="bg-dorado text-crema px-6 py-2 rounded-lg font-elegant hover:bg-dorado/80 transition-colors"
                    >
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    );
}
