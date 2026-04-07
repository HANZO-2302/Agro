import Image from "next/image";

export default function About() {
  return (
    <section className="bg-white w-full shadow-[0_0_15px_rgba(0,0,0,0.1)] py-10 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <h1 className="uppercase text-center md:text-left font-bold text-4xl mb-10">О компании</h1>

        {/* Контент */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Картинка */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/about.png"
              alt="About Image"
              width={700}
              height={500}
              className="w-full h-full object-cover rounded-2xl shadow-md"
            />
          </div>

          {/* Текст */}
          <div className="w-full lg:w-1/2">
            <h2 className="font-bold text-3xl lg:text-4xl leading-tight mb-6">
              Ваша эффективность — наша формула.
            </h2>

            <p className="text-gray-700 text-base leading-relaxed mb-4">
              Компания ТАГРИС с 1991 года — крупный российский производитель и
              поставщик агропродукции. Создана, чтобы снизить зависимость страны
              от импорта продовольствия.
            </p>

            <p className="text-gray-700 text-base leading-relaxed mb-4">
              Предлагает комплексное решение для животноводства: от
              профессиональных кормов, витаминов и оборудования до консультаций.
              Это позволяет клиентам значительно повысить эффективность,
              например, увеличить удои.
            </p>

            <p className="text-gray-700 text-base leading-relaxed">
              Развивая технологии и партнёрскую сеть, ТАГРИС способствует
              превращению России в крупного экспортёра продовольствия.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
