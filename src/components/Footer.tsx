import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-crema text-gray-700 text-center py-6 border-dorado text-sm font-elegant">
      <div className="flex flex-col items-center gap-1">
        <span>
          <p>
            &copy; {new Date().getFullYear()} Cristóbal Bravo | Software
            Engineer | Todos los derechos reservados{" "}
          </p>
        </span>
        <span className="flex items-center gap-1 text-dorado">
          Hecho con <FaHeart className="text-red-500" /> para la boda de mi
          hermano
        </span>
      </div>
    </footer>
  );
}
