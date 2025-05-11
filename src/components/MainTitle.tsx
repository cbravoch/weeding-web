export default function MainTitle() {
  return (
    <div className="relative w-full h-[100vh] max-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="/photos/background_photo.jpg" 
          alt="Fondo de la boda"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.7)' }}
        />
      </div>
      
      {/* Capa oscura para mejorar la legibilidad */}
      <div className="absolute inset-0 bg-black/20 z-0" />
      
      {/* Contenido */}
      <div className="relative z-10 text-center px-4 w-full max-w-6xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-elegant text-dorado drop-shadow-lg px-4">
          Mariela <span className="text-red-300">&</span> Héctor
        </h1>
        <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-white font-light italic drop-shadow px-4">
          ¡Estás cordialmente invitado a nuestra boda!
        </p>
      </div>
    </div>
  );
}
