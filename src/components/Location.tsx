export default function Location() {
  return (
    <div className="w-full mx-auto my-4 md:my-8 px-2 md:px-4">
      <div className="w-full h-[300px] md:h-[600px] relative">
        <div className="absolute inset-0 border-4 border-dorado rounded-xl shadow-xl"></div>
        <div className="absolute inset-0 m-1 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4526.342883951822!2d-72.00559980914022!3d-36.65988607903128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96692902df75e1ed%3A0x9ddbe9434d6166a1!2sPetBlu%20Hotel%20Canino!5e0!3m2!1ses!2scl!4v1746479714236!5m2!1ses!2scl"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            title="Ubicación del evento"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
