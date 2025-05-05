import Carousel from "@/components/Carousel";
import Countdown from "@/components/Countdown";
import Footer from "@/components/Footer";
import MainTitle from "@/components/MainTitle";
import Location from "@/components/Location";
export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth bg-crema">
      <section id="title" className="snap-start h-screen flex items-center justify-center">
        <MainTitle />
      </section>

      <section id="countdown" className="snap-start h-screen flex items-center justify-center">
        <Countdown />
      </section>

      <section id="location" className="snap-start h-screen flex items-center justify-center">
        <Location />
      </section>

      <section id="footer" className="snap-start h-screen flex items-center justify-center">
        <Footer />
      </section>
    </div>
  );
}

