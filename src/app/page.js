import Blog from "./components/Blog";
import NewArrival from "./components/NewArrival";
import Swiper from "./components/Swiper";

export default function Home() {
  return (
    <main>
      <div>
        <Swiper/>
        <NewArrival/>
        <Blog/>
      </div>
    </main>
  );
}
