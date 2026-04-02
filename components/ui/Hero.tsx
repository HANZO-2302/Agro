// import HeroText from "./hero_text";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero">
    <div className="hero relative min-h-screen h-full w-full bg-[url('/hero.png')] bg-cover bg-center">
      <div className="absolute flex flex-col bg-amber-700/0 mt-28 left-0 w-full">
        <h1 className="leading-7 font-bold text-[#2E5235] text-center px-4 text-[1.8rem] md:text-5xl">
          Комплексные решения для молочного животноводства
        </h1>
        <p className="text-[#363636] px-4 py-3 text-center text-sm md:text-2xl">
          Оборудование, корма и сервис для повышения продуктивности хозяйств
        </p>
        <div className="flex flex-col bg-blue-600/0 justify-center items-center py-5 gap-5">
          <div className="flex justify-center w-full h-18 px-10 bg-amber-300/0 items-center">
            <Button
              className="h-18 w-full text-gray-50 rounded-full text-2xl"
              variant="default"
            >
              Комплексные решения
            </Button>
          </div>
          <div className="flex justify-center w-full h-18 px-10 bg-amber-300/0 items-center">
            <Button
              className="h-18 w-full text-accent rounded-full font-semibold text-2xl bg-accent/0 inset-ring-4 inset-ring-accent"
              variant="default"
            >
              Наши технологии
            </Button>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

