import Image from "next/image";
export default function Form() {
  return (
    <section id="form" className="bg-[#2f5d3a] flex mt-14 justify-center md:py-20 md:px-10 py-10 px-4">
      <div className="max-w-5xl w-full flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* LEFT */}
        <div className="max-w-full md:max-w-150 md:mt-5 text-white">
          <h1 className="relative text-3xl md:text-left sm:text-4xl lg:text-5xl lg:bottom-6 font-medium mb-5">
            Технологичные решения <br />
            для современного <br />
            молочного хозяйства
          </h1>

          <p className="relative text-sm font-light sm:text-lg lg:text-xl lg:bottom-6 text-white/80 leading-7 mb-9">
            Совмещаем передовые агротехнологии и фермерский опыт, чтобы повысить
            эффективность, качество продукции и устойчивость бизнеса.
          </p>

          {/* Иконки — как на скрине: в ряд слева с gap */}
          <div className="flex md:mt-14 md:justify-start justify-center items-center gap-9">
            <Image
              src="/Telegramm.svg"
              alt="Telegram"
              width={50}
              height={50}
              className="w-10 h-10 object-contain"
            />
            <Image
              src="/Whatsapp.svg"
              alt="Whatsapp"
              width={50}
              height={50}
              className="w-10 h-10 object-contain"
            />
            <Image
              src="/Max.svg"
              alt="Max"
              width={50}
              height={50}
              className="w-10 h-10 object-contain"
            />
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full lg:w-105 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Имя"
              className="w-full bg-gray-200 rounded-xl px-4 py-4 outline-none"
            />
            <input
              type="text"
              placeholder="Номер тел."
              className="w-full bg-gray-200 rounded-xl px-4 py-4 outline-none"
            />
          </div>

          <input
            type="email"
            placeholder="Электронная почта"
            className="w-full bg-gray-200 rounded-xl px-4 py-4 outline-none"
          />

          <textarea
            placeholder="Опишите задачу"
            rows={4}
            className="w-full bg-gray-200 rounded-xl px-4 py-4 outline-none resize-none"
          />

          <button className="mt-2 bg-[#6fa773] hover:bg-[#5e9463] text-white py-4 rounded-full text-base sm:text-lg transition">
            Получить консультацию
          </button>
        </div>
      </div>
    </section>
  );
}