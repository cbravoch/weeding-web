'use client';

import { signIn } from 'next-auth/react';
import { FaGoogle } from 'react-icons/fa';

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-crema">
      <div className="bg-white p-8 rounded-xl shadow-xl border-4 border-dorado">
        <h1 className="text-2xl md:text-3xl font-elegant text-dorado mb-6 text-center">Iniciar Sesión</h1>
        <button
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className="w-full bg-dorado text-crema px-6 py-3 rounded-lg font-elegant hover:bg-dorado/80 transition-colors flex items-center justify-center gap-2"
        >
          <FaGoogle /> Continuar con Google
        </button>
      </div>
    </div>
  );
} 