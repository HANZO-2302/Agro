import Image from "next/image";

export default function NewsSection() {
  const news = [
    {
      category: "Экология и Устойчивое Развитие",
      desc: "Молочная ферма в Карелии стала энергонезависимой за счёт биогаза из собственных отходов — О реализации принципов замкнутого цикла и экономии.",
      date: "10.07.25",
      img: "/News1.png",
    },
    {
      category: "Технологии и Инновации",
      desc: "Семейные фермы Урала объединяются в ассоциацию для развития агротуризма и обмена опытом",
      date: "18.03.25",
      img: "/News2.png",
    },
    {
      category: "Экономика и Бизнес-модели",
      desc: "«Фермеры Ленобласти переходят на прямые поставки в школы и больницы по новому госзакону» — О поддержке локальных производителей через госзакупки.",
      date: "06.05.25",
      img: "/News3.png",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto mt-10 mb-10 w-full px-4  bg-[#1faac2]/0 ">
      <h2 className="relative uppercase text-center text-4xl px-4 font-bold bg-blue-500/0 mb-5">
        Новости
      </h2>

      <div className="grid lg:grid-cols-3 gap-3">
        {news.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-4xl p-4 overflow-hidden border border-black/10 shadow-md"
          >
            <Image
              src={item.img}
              alt={item.category}
              width={100}
              height={100}
              className="w-full rounded-xl h-75 object-cover block"
            />
            <div className="px-2 pt-3">
              <h3 className="text-[1.2rem] font-extrabold text-gray-900 leading-snug mb-2.5">
                {item.category}
              </h3>
              <p className="text-sm text-[#555] leading-[1.55] mb-4.5">
                {item.desc}
              </p>
              <span className="text-[13px] text-[#999]">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
