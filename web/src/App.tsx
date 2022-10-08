import { MagnifyingGlassPlus } from "phosphor-react";
import "./styles/main.css";
import logo from "./assets/logo-nlw.svg";
import { GameBanner } from "./components/GameBanner";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="logo nlw" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameBanner
          bannerUrl="/image-1.png"
          title="League of Legends"
          countAds={6}
        />
        <GameBanner
          bannerUrl="/image-2.png"
          title="Apex Legends"
          countAds={3}
        />
        <GameBanner
          bannerUrl="/image-3.png"
          title="Counter Strike: GO"
          countAds={5}
        />
        <GameBanner
          bannerUrl="/image-4.png"
          title="World of Warcraft"
          countAds={4}
        />
        <GameBanner bannerUrl="/image-5.png" title="Dota" countAds={6} />
        <GameBanner bannerUrl="/image-6.png" title="Fortnite" countAds={5} />
      </div>

      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg  overflow-hidden mt-8">
        <div className="bg-[#2A2634] py-6 px-8 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400 block">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

          <button className="py-3 px-4 bg-violet-500 text-white rounded-md hover:bg-violet-600 flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
