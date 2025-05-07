"use client";
import Modal from "@/components/Modal";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import FormPhotos from "./FormPhotos";

export default function TablePhotos() {
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
                    <h2 className="text-2xl md:text-3xl font-elegant text-dorado">Galería de Fotos</h2>
                    <button className="bg-dorado text-crema px-4 py-2 rounded-md font-elegant hover:bg-dorado/80 transition-colors flex items-center gap-2" onClick={handleOpenModal}>
                        <FaPlus /> Agregar Fotos
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-dorado text-crema">
                                <th className="px-4 py-2 text-left font-elegant">Nombre</th>
                                <th className="px-4 py-2 text-left font-elegant">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-dorado/20">
                                <td className="px-4 py-2 font-elegant">Foto 1</td>
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
                <FormPhotos onClose={handleCloseModal} />
            </Modal>
        </>
    );
}
