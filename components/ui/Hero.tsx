// import HeroText from "./hero_text";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero relative flex justify-center max-h-205 h-screen w-full bg-[url('/hero.png')] bg-no-repeat shadow-xs/80">
        <div className="absolute flex flex-col justify-center bg-amber-700/0 mt-24 w-full max-w-5xl lg:py-12 px-6">
          <h1 className="leading-8 font-bold text-[#2E5235] text-left md:px-9 md:leading-13 text-[1.8rem] md:text-[2.4rem] lg:text-[2.9rem]">
            Комплексные решения <br />
            для молочного животноводства
          </h1>
          <p className="text-[#363636] py-4 md:px-9 text-left text-sm md:text-2xl">
            Оборудование, корма и сервис для повышения продуктивности хозяйств.
          </p>
          <div className="flex flex-col md:flex-row bg-blue-600/0 justify-start max-w-3xl items-center md:px-9 py-4 gap-4">
            <div className="flex justify-center w-full h-18 bg-amber-300/0 items-center">
              <Button
                className="
                  h-18 w-full rounded-full
                 text-gray-50 
                  text-[1.3rem]
                  hover:bg-accent hover:-translate-y-1 hover:shadow-lg/40
                  active:translate-y-0.5
                  active:scale-[0.98]
                  active:shadow-md/60
                  transition-all duration-200 ease-in-out 
                  shadow-lg 
                  "
              >
                Комплексные решения
              </Button>
            </div>
            <div className="flex justify-center w-full items-center">
              <Button
                className="h-18 w-full rounded-full 
                font-semibold text-accent text-[1.3rem]  
                bg-transparent shadow-lg 
                border-0 inset-ring-2
                hover:shadow-lg/40
                hover:-translate-y-1 
                hover:inset-ring-4
                hover:bg-transparent 
                active:translate-y-0.5
                active:scale-[0.98]
                active:shadow-md/60
                transition-all duration-200 ease-in-out
              "
              >
                Наши преимущества
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
