"use client";

import { FaEnvelope } from "react-icons/fa";

interface FormGuestProps {
  onClose: () => void;
}
export default function FormUsers({ onClose }: FormGuestProps) {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold">Agregar Usuario</h2>
      <form className="mt-4">
        <div>
          <label className="block text-dorado font-elegant mb-2">Email</label>
          <div className="relative">
            <input
              type="email"
              className="w-full bg-crema border-custom-2 rounded-lg p-2 pl-10 focus:outline-none focus:border-custom"
              placeholder="email@ejemplo.com"
            />
            <FaEnvelope className="absolute left-3 top-3 text-dorado" />
          </div>
        </div>
      </form>
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
    </div>
  );
}
