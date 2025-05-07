"use client";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

interface FormGuestProps {
    onClose: () => void;
}

export default function FormGuest({ onClose }: FormGuestProps) {
    return (
        <div className="w-full">
            <h2 className="text-2xl md:text-3xl font-elegant text-dorado mb-6">Agregar Invitado</h2>
            <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-dorado font-elegant mb-2">Nombre</label>
                        <div className="relative">
                            <input 
                                type="text" 
                                className="w-full bg-crema border-2 border-dorado rounded-lg p-2 pl-10 focus:outline-none focus:border-dorado/80"
                                placeholder="Nombre del invitado"
                            />
                            <FaUser className="absolute left-3 top-3 text-dorado" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-dorado font-elegant mb-2">Apellido</label>
                        <div className="relative">
                            <input 
                                type="text" 
                                className="w-full bg-crema border-2 border-dorado rounded-lg p-2 pl-10 focus:outline-none focus:border-dorado/80"
                                placeholder="Apellido del invitado"
                            />
                            <FaUser className="absolute left-3 top-3 text-dorado" />
                        </div>
                    </div>
                </div>
                <div>
                    <label className="block text-dorado font-elegant mb-2">Email</label>
                    <div className="relative">
                        <input 
                            type="email" 
                            className="w-full bg-crema border-2 border-dorado rounded-lg p-2 pl-10 focus:outline-none focus:border-dorado/80"
                            placeholder="email@ejemplo.com"
                        />
                        <FaEnvelope className="absolute left-3 top-3 text-dorado" />
                    </div>
                </div>
                <div>
                    <label className="block text-dorado font-elegant mb-2">Teléfono</label>
                    <div className="relative">
                        <input 
                            type="tel" 
                            className="w-full bg-crema border-2 border-dorado rounded-lg p-2 pl-10 focus:outline-none focus:border-dorado/80"
                            placeholder="+56 9 1234 5678"
                        />
                        <FaPhone className="absolute left-3 top-3 text-dorado" />
                    </div>
                </div>
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
                        className="bg-dorado text-crema px-6 py-2 rounded-lg font-elegant hover:bg-dorado/80 transition-colors"
                    >
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    );
}
