import Image from "next/image";
export default function About() {
  return (
    <div className="relative flex flex-col items-center mt-10 h-180 bg-white w-full max-w-7xl shadow-[0_0_15px_rgba(0,0,0,0.1)]">
      <h1 className="uppercase font-bold text-center text-4xl mt-8">
        О компании
      </h1>
      <div className="w-full max-w-lg  p-4 h-auto bg-amber-600/0">
        <Image
          src="/about.png"
          alt="About Image"
          width={400}
          height={400}
          className="w-full h-full rounded-2xl object-cover shadow-xs/70"
        />
      </div>
      <h2 className=" mt-2 font-bold text-2xl text-left px-5">Ваша эффективность — наша формула.</h2>
      <p className=" mt-4 font-normal text-sm px-5">
        Компания ТАГРИС с 1991 года — крупный
        российский производитель и поставщик агропродукции. Создана, чтобы
        снизить зависимость страны от импорта продовольствия. Предлагает
        комплексное решение для животноводства: от профессиональных кормов,
        витаминов и оборудования до консультаций. Это позволяет клиентам
        значительно повысить эффективность, например, увеличить удои. Развивая
        технологии и партнёрскую сеть, ТАГРИС способствует превращению России в
        крупного экспортёра продовольствия.
      </p>
    </div>
  );
}
