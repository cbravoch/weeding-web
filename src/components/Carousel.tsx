export default function Carousel() {
  return (
    <div className="w-full mx-auto my-4 md:my-8">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-elegant text-dorado text-center mb-4">Fotos de nuestra boda</h1>
      <div className="relative w-full h-40 md:h-80 overflow-hidden rounded-xl border-4 border-[#849AAD] bg-crema shadow-xl">
        <img 
          src="/photos/photo1.jpg" 
          className="w-full h-full object-cover" 
          alt="Foto de la boda" 
        />
      </div>
    </div>
  );
}
