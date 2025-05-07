"use client";
import Modal from "@/components/Modal";
import { useState } from "react";
import { FaCheck, FaPlus } from "react-icons/fa";
import FormGuest from "./FormGuest";

export default function TableGuest() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }
  
  return (
    <>
    <div className="w-full mt-8 px-4">
      <div className="bg-crema border-4 border-dorado rounded-xl shadow-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-elegant text-dorado">Invitados</h2>
          <button className="bg-dorado text-crema px-4 py-2 rounded-md font-elegant hover:bg-dorado/80 transition-colors flex items-center gap-2" onClick={handleOpenModal}>
            <FaPlus /> Agregar Invitado
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-crema border-2 border-dorado rounded-lg p-4 text-center">
            <h3 className="text-lg font-elegant text-dorado mb-2">Total Invitados</h3>
            <p className="text-3xl font-elegant text-dorado">150</p>
          </div>
          <div className="bg-crema border-2 border-dorado rounded-lg p-4 text-center">
            <h3 className="text-lg font-elegant text-dorado mb-2">Confirmados</h3>
            <p className="text-3xl font-elegant text-green-500">75</p>
          </div>
          <div className="bg-crema border-2 border-dorado rounded-lg p-4 text-center">
            <h3 className="text-lg font-elegant text-dorado mb-2">Pendientes</h3>
            <p className="text-3xl font-elegant text-yellow-500">50</p>
          </div>
          <div className="bg-crema border-2 border-dorado rounded-lg p-4 text-center">
            <h3 className="text-lg font-elegant text-dorado mb-2">Rechazados</h3>
            <p className="text-3xl font-elegant text-red-500">25</p>
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
              <tr className="border-b border-dorado/20">
                <td className="px-4 py-2 font-elegant">Juan</td>
                <td className="px-4 py-2 font-elegant">Pérez</td>
                <td className="px-4 py-2 font-elegant">juan@email.com</td>
                <td className="px-4 py-2 font-elegant">+56 9 1234 5678</td>
                <td className="px-4 py-2 text-center">
                  <div className="flex justify-center">
                    <FaCheck className="text-green-500 text-xl" />
                  </div>
                </td>
                <td className="px-4 py-2">
                  <button className="bg-dorado text-crema px-3 py-1 rounded-md font-elegant hover:bg-dorado/80 transition-colors">
                    Editar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
      <FormGuest onClose={handleCloseModal} />
    </Modal>
    </>
  );
}
