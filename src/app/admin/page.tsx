'use client'
import TableGuest from "@/components/admin/Guest/TableGuest";
import TablePhotos from "@/components/admin/Photos/TablePhotos";
import TableUsers from "@/components/admin/Users/TableUsers";
import { useState } from "react";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useSession, signOut } from "next-auth/react";

export default function AdminPage() {
    const { data: session } = useSession();
    const [button_guests, setButton_guests] = useState(false);
    const [type_button_active, setType_button_active] = useState('guests');
    const [button_global_settings, setButton_global_settings] = useState(true);
    const [button_photos, setButton_photos] = useState(true);
    const [button_users, setButton_users] = useState(true);

    const handleButtonClick = (type: string) => {
        setType_button_active(type);
        switch(type) {
            case 'guests':
                setButton_guests(false);
                setButton_global_settings(true);
                setButton_photos(true);
                setButton_users(true);
                break;
            case 'global_settings':
                setButton_global_settings(false);
                setButton_guests(true);
                setButton_photos(true);
                setButton_users(true);
                break;
            case 'photos':
                setButton_photos(false);
                setButton_global_settings(true);
                setButton_guests(true);
                setButton_users(true);
                break;
            case 'users':
                setButton_users(false);
                setButton_global_settings(true);
                setButton_guests(true);
                setButton_photos(true);
                break;
        }
    }

    return (
        <ProtectedRoute>
            <div className="flex flex-col h-screen relative">
                <button 
                    onClick={() => signOut()}
                    className="absolute top-4 left-4 bg-dorado text-crema px-4 py-2 rounded-md font-elegant hover:bg-dorado/80 transition-colors"
                >
                    Cerrar Sesión
                </button>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-elegant text-dorado text-center mb-4">Administración</h2>
                <p className="text-dorado text-center mb-8 font-elegant">
                    Bienvenido, {session?.user?.name}
                </p>
                <div style={{display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row'}}>
                    {button_guests && ( 
                        <button className="bg-dorado text-crema px-4 py-2 rounded-md justify-center" onClick={() => handleButtonClick('guests')}>
                            Invitados
                        </button>
                    )}
                    {button_global_settings && (
                        <button className="bg-dorado text-crema px-4 py-2 rounded-md justify-center" onClick={() => handleButtonClick('global_settings')}>
                            Configuraciónes globales
                        </button>
                    )}
                    {button_photos && (
                        <button className="bg-dorado text-crema px-4 py-2 rounded-md justify-center" onClick={() => handleButtonClick('photos')}>
                            Fotos
                        </button>
                    )}
                    {button_users && (
                        <button className="bg-dorado text-crema px-4 py-2 rounded-md justify-center" onClick={() => handleButtonClick('users')}>
                            Usuarios
                        </button>
                    )}
                </div>
                {type_button_active === 'guests' && <TableGuest />}
                {type_button_active === 'photos' && <TablePhotos />}
                {type_button_active === 'users' && <TableUsers />}
            </div>
        </ProtectedRoute>
    )
}

