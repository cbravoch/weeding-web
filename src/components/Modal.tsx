'use client'
import { ReactNode, useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'

interface ModalProps {
    children: ReactNode,
    isOpen: boolean,
    onClose: () => void
}

export default function Modal({ children, isOpen, onClose  }: ModalProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            setIsAnimating(true);
        } else {
            setIsAnimating(false);
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 300); // Duración de la animación
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isVisible && !isOpen) return null;

    return (
        <div className={`fixed inset-0 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
            <div 
                className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            ></div>
            <div 
                className={`bg-crema border-4 border-[#849AAD] rounded-xl shadow-xl p-6 md:p-8 w-full max-w-2xl relative z-10 transition-all duration-300 transform ${isAnimating ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'}`}
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-dorado hover:text-dorado/80 transition-colors"
                >
                    <FaTimes className="w-6 h-6" />
                </button>
                <div className="mt-4">
                    {children}
                </div>
            </div>
        </div>
    );
}
