import { FaImage } from "react-icons/fa";

interface FormPhotosProps {
  onClose: () => void;
}

export default function FormPhotos({ onClose }: FormPhotosProps) {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold">Agregar Foto</h2>
      <form className="mt-4">
        <div>
          <input
            type="file"
            className="w-full bg-crema border-2 border-dorado rounded-lg p-2 pl-10 focus:outline-none focus:border-dorado/80"
            placeholder="Título de la foto"
          />
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
