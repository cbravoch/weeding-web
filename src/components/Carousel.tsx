export default function Carousel() {
  return (
    <div className="w-full mx-auto my-4 md:my-8">
      <div className="relative w-full h-40 md:h-80 overflow-hidden rounded-xl border-4 border-dorado bg-crema shadow-xl">
        <img 
          src="/photos/photo1.jpg" 
          className="w-full h-full object-cover" 
          alt="Foto de la boda" 
        />
      </div>
    </div>
  );
}
