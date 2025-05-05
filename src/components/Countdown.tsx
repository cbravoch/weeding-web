'use client'

import { useState, useEffect } from 'react';

const weddingDate = new Date('2025-06-21T18:00:00');

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
        <div className="text-center border-4 border-dorado rounded-2xl p-8 m-4 bg-crema shadow-lg">
            <h1 className="text-3xl font-elegant text-dorado mb-4">Cuenta Regresiva para nuestra boda</h1>
            <p className="text-4xl font-elegant text-gray-800 mb-8">{timeLeft}</p>
        </div>
    );
};

export default Countdown;
