// import HeroText from "./hero_text";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero relative min-h-screen flex justify-center h-full w-full bg-[url('/hero.png')] bg-cover">
        <div className="absolute flex flex-col justify-center bg-amber-700/0 mt-24 w-full max-w-5xl px-6">
          <h1 className="leading-8 font-bold text-[#2E5235] text-left md:text-left md:leading-13 text-[1.8rem] md:text-[2.9rem]">
            Комплексные решения <br />
            для молочного животноводства
          </h1>
          <p className="text-[#363636] py-4 text-left text-sm md:text-2xl">
            Оборудование, корма и сервис для повышения продуктивности хозяйств
          </p>
          <div className="flex flex-col md:flex-row bg-blue-600/0 justify-start max-w-3xl items-center py-4 gap-4">
            <div className="flex justify-center w-full h-18 bg-amber-300/0 items-center">
              <Button
                className="h-18 w-full text-gray-50 rounded-full text-2xl hover:inset-ring-4 hover:inset-ring-[#2e5235] hover:text-[#2e5235]"
                variant="default"
              >
                Комплексные решения
              </Button>
            </div>
            <div className="flex justify-center w-full h-18 px-1 bg-amber-300/0 items-center">
              <Button
                className="h-18 w-full text-accent rounded-full font-semibold text-2xl bg-accent/0 inset-ring-4 inset-ring-accent hover:bg-accent hover:text-gray-50"
                variant="outline"
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
