import Carousel from "@/components/Carousel";
import Countdown from "@/components/Countdown";
import Footer from "@/components/Footer";
import Location from "@/components/location";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-crema">
      <main className="flex-grow flex flex-col items-center justify-center py-10 px-4">
        <Countdown />
        <Carousel />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
