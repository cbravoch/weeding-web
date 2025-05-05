'use client'

import { useState, useEffect } from 'react';

const weddingDate = new Date('2026-02-21T18:00:00');

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = weddingDate.getTime() - now.getTime();

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / (1000 * 60)) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full mx-auto my-4 md:my-8">
            <div className="border-4 border-dorado rounded-xl p-4 md:p-8 bg-crema shadow-xl h-40 md:h-80 flex flex-col items-center justify-center">
                <h1 className="text-xl md:text-3xl font-elegant text-dorado mb-2 md:mb-4">Cuenta Regresiva para nuestra boda</h1>
                <p className="text-2xl md:text-4xl font-elegant text-gray-800">{timeLeft}</p>
            </div>
        </div>
    );
};

export default Countdown;
