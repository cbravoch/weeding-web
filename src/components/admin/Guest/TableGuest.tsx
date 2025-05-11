"use client";
import Modal from "@/components/Modal";
import { useEffect, useState } from "react";
import { FaCheck, FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import FormGuest from "./FormGuest";
import toast from "react-hot-toast";
import { getGuests } from "@/services/guest";
import { GUEST_ESTATE } from "@/constants/guestEstate";

export default function TableGuest() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormReady, setIsFormReady] = useState(false);
  const [guests, setGuests] = useState([]);
  const [rejectGuest, setRejectGuest] = useState(0);
  const [confirmGuest, setConfirmGuest] = useState(0);
  const [pendingGuest, setPendingGuest] = useState(0);
  const [totalGuest, setTotalGuest] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const loadGuests = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    const loadingToast = toast.loading('Cargando invitados...', {
      id: 'guests-loading',
    });

    try {
      const guestResponse = await getGuests();
      setGuests(guestResponse.guests);
      setTotalGuest(guestResponse.countGuests);
      setConfirmGuest(guestResponse.confirmedGuests);
      setPendingGuest(guestResponse.pendingGuests);
      setRejectGuest(guestResponse.rejectedGuests);
    } catch (error) {
      console.error('Error fetching guests:', error);
      toast.error('Error al cargar los invitados', {
        id: 'guests-error',
      });
    } finally {
      toast.dismiss(loadingToast);
      setIsLoading(false);
    }
  };

  // Cargar invitados al montar el componente
  useEffect(() => {
    loadGuests();
  }, []);

  const handleOpenModal = () => {
    // Primero mostramos el modal como loading
    setIsFormReady(false);
    setIsModalOpen(true);
  };
  
  const handleFormReady = () => {
    // El formulario está listo para mostrarse
    setIsFormReady(true);
  };
  
  const handleFormClose = () => {
    setIsModalOpen(false);
    // Resetear el estado cuando se cierra el modal
    setTimeout(() => setIsFormReady(false), 300); // Esperar a que termine la animación del modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleGuestSaved = () => {
    // Recargar la lista de invitados
    loadGuests();
  };
  
  return (
    <>
      <div className="w-full mt-8 px-4">
        <div className="bg-crema border-4 border-[#849AAD] rounded-xl shadow-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-elegant text-dorado">Invitados</h2>
          <button className="bg-dorado text-crema px-4 py-2 rounded-md font-elegant hover:bg-dorado/80 transition-colors flex items-center gap-2" onClick={handleOpenModal}>
            <FaPlus /> Agregar Invitado
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-crema border-2 border-[#849AAD] rounded-lg p-4 text-center">
            <h3 className="text-lg font-elegant text-dorado mb-2">Total Invitados</h3>
            <p className="text-3xl font-elegant text-dorado">{totalGuest}</p>
          </div>
          <div className="bg-crema border-2 border-[#849AAD] rounded-lg p-4 text-center">
            <h3 className="text-lg font-elegant text-dorado mb-2">Confirmados</h3>
            <p className="text-3xl font-elegant text-green-500">{confirmGuest}</p>
          </div>
          <div className="bg-crema border-2 border-[#849AAD] rounded-lg p-4 text-center">
            <h3 className="text-lg font-elegant text-dorado mb-2">Pendientes</h3>
            <p className="text-3xl font-elegant text-yellow-500">{pendingGuest}</p>
          </div>
          <div className="bg-crema border-2 border-[#849AAD] rounded-lg p-4 text-center">
            <h3 className="text-lg font-elegant text-dorado mb-2">Rechazados</h3>
            <p className="text-3xl font-elegant text-red-500">{rejectGuest}</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-dorado text-crema">
                <th className="px-4 py-2 text-left font-elegant">Nombre</th>
                <th className="px-4 py-2 text-left font-elegant">Apellido</th>
                <th className="px-4 py-2 text-left font-elegant">Email</th>
                <th className="px-4 py-2 text-left font-elegant">Teléfono</th>
                <th className="px-4 py-2 text-center font-elegant">Asistencia</th>
                <th className="px-4 py-2 text-left font-elegant">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {guests.map((guest: any) => (
                <tr key={guest.id} className="border-b border-[#849AAD]/50">
                  <td className="px-4 py-2 font-elegant">{guest.name}</td>
                  <td className="px-4 py-2 font-elegant">{guest.surname}</td>
                  <td className="px-4 py-2 font-elegant">{guest.email ?? 'No ingresado'}</td>
                  <td className="px-4 py-2 font-elegant">{guest.telephone_number ?? 'No ingresado'}</td>
                  <td className="px-4 py-2 text-center">
                  <div className="flex justify-center">
                    {guest.guest_state_id == GUEST_ESTATE.PENDING ? <FaMinus className="text-yellow-500 text-xl" /> : guest.state == GUEST_ESTATE.CONFIRMED ? <FaCheck className="text-green-500 text-xl" /> : <FaTimes className="text-red-500 text-xl" />}
                  </div>
                </td>
                <td className="px-4 py-2">
                  <button className="bg-dorado text-crema px-3 py-1 rounded-md font-elegant hover:bg-dorado/80 transition-colors">
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleFormClose}>
        <FormGuest 
          onClose={handleFormClose} 
          onGuestSaved={handleGuestSaved} 
          onReady={handleFormReady}
          isFormReady={isFormReady}
        />
      </Modal>
    </>
  );
}
