'use client'
import TableGuest from "@/components/admin/Guest/TableGuest";
import TablePhotos from "@/components/admin/Photos/TablePhotos";
import { useState } from "react";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useSession, signOut } from "next-auth/react";
import { ADMIN_SECTIONS, ADMIN_SECTION_LABELS, BUTTON_STYLES } from "@/constants";

type AdminSection = typeof ADMIN_SECTIONS[keyof typeof ADMIN_SECTIONS];

export default function AdminPage() {
    const { data: session } = useSession();
    const [button_guests, setButton_guests] = useState(false);
    const [type_button_active, setType_button_active] = useState<AdminSection>(ADMIN_SECTIONS.GUESTS);
    const [button_global_settings, setButton_global_settings] = useState(true);
    const [button_photos, setButton_photos] = useState(true);

    const handleButtonClick = (type: string) => {
        setType_button_active(type as AdminSection);
        switch(type) {
            case ADMIN_SECTIONS.GUESTS:
                setButton_guests(false);
                setButton_global_settings(true);
                setButton_photos(true);
                break;
            case ADMIN_SECTIONS.GLOBAL_SETTINGS:
                setButton_global_settings(false);
                setButton_guests(true);
                setButton_photos(true);
                break;
            case ADMIN_SECTIONS.PHOTOS:
                setButton_photos(false);
                setButton_global_settings(true);
                setButton_guests(true);
                break;

        }
    }

    return (
        <ProtectedRoute>
            <div className="flex flex-col min-h-screen">
                <button 
                    onClick={() => signOut()}
                    className={`absolute top-4 left-4 ${BUTTON_STYLES.PRIMARY}`}
                >
                    Cerrar Sesión
                </button>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-elegant text-dorado text-center mb-4">Administración</h2>
                <p className="text-dorado text-center mb-8 font-elegant">
                    Bienvenido, {session?.user?.name}
                </p>
                <div style={{display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row'}}>
                    {button_guests && ( 
                        <button className={BUTTON_STYLES.PRIMARY} onClick={() => handleButtonClick(ADMIN_SECTIONS.GUESTS)}>
                            {ADMIN_SECTION_LABELS[ADMIN_SECTIONS.GUESTS]}
                        </button>
                    )}
                    {button_global_settings && (
                        <button className={BUTTON_STYLES.PRIMARY} onClick={() => handleButtonClick(ADMIN_SECTIONS.GLOBAL_SETTINGS)}>
                            {ADMIN_SECTION_LABELS[ADMIN_SECTIONS.GLOBAL_SETTINGS]}
                        </button>
                    )}
                    {button_photos && (
                        <button className={BUTTON_STYLES.PRIMARY} onClick={() => handleButtonClick(ADMIN_SECTIONS.PHOTOS)}>
                            {ADMIN_SECTION_LABELS[ADMIN_SECTIONS.PHOTOS]}
                        </button>
                    )}
                </div>
                {type_button_active === ADMIN_SECTIONS.GUESTS && <TableGuest />}
                {type_button_active === ADMIN_SECTIONS.PHOTOS && <TablePhotos />}
            </div>
        </ProtectedRoute>
    )
}

