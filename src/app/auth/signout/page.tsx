'use client';

import { signOut } from 'next-auth/react';

export default function SignOut() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-crema">
      <div className="bg-white p-8 rounded-xl shadow-xl border-4 border-dorado">
        <h1 className="text-2xl md:text-3xl font-elegant text-dorado mb-6 text-center">Cerrar Sesión</h1>
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="w-full bg-dorado text-crema px-6 py-3 rounded-lg font-elegant hover:bg-dorado/80 transition-colors"
        >
          Confirmar cierre de sesión
        </button>
      </div>
    </div>
  );
} 