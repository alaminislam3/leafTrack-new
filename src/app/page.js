import Blog from "./components/Blog";
import NewArrival from "./components/NewArrival";
import PlantCareTips from "./components/PlantCareTips";
import Pricing from "./components/Pricing";
import Swiper from "./components/Swiper";

export default function Home() {
  return (
    <main>
      <div>
        <Swiper/>
        <NewArrival/>
        <Blog/>
        <PlantCareTips/>
        <Pricing/>
      </div>
    </main>
  );
}
