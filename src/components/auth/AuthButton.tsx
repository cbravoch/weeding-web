'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { FaGoogle } from 'react-icons/fa';

export default function AuthButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <button className="bg-dorado text-crema px-4 py-2 rounded-md font-elegant hover:bg-dorado/80 transition-colors flex items-center gap-2">
        Cargando...
      </button>
    );
  }

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-dorado font-elegant">
          {session.user?.name}
        </span>
        <button
          onClick={() => signOut()}
          className="bg-dorado text-crema px-4 py-2 rounded-md font-elegant hover:bg-dorado/80 transition-colors flex items-center gap-2"
        >
          Cerrar Sesión
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn('google')}
      className="bg-dorado text-crema px-4 py-2 rounded-md font-elegant hover:bg-dorado/80 transition-colors flex items-center gap-2"
    >
      <FaGoogle /> Iniciar Sesión con Google
    </button>
  );
} 