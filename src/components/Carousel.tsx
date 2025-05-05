export default function Carousel() {
  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <div className="relative w-full h-80 overflow-hidden rounded-xl border-4 border-dorado bg-crema shadow-xl">
        <img 
          src="/photos/photo1.jpg" 
          className="w-full h-full object-cover" 
          alt="Foto de la boda" 
        />
      </div>
    </div>
  );
}
