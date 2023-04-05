import Navbar from "../components/Navbar";
import HeroImg from "../assets/hero_img.png"
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <div className="flex w-full h-screen item-center justify-between bg-neutral-content px-20 py-24">
        <div className="w-2/5">
        <img src={HeroImg} />
        </div>
        <div className="w-2/4 p-5">
          <div className="text-5xl text-center font-semibold tracking-wide">
            Blow The Whistle
          </div>
          <div className="text-6xl text-center font-bold w-2/5 mx-auto mt-10 text-red-600 italic tracking-wide leading-snug">
            Break The Silence
          </div>
          <div className="flex justify-evenly item-center mt-12">
            <Button text="Report" />
            <Button text="View Cases" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
