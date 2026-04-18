import Image from "next/image";

const services = [
    {
      icon: "/Vector1.svg",
      title: "Молочное Оборудование",
      desc: "Оборудование для переработки молока: особенности производства и использование в промышленности.",
    },
    {
      icon: "/Vector2.svg",
      title: "Сервисное Обслуживание",
      desc: "Мы предоставляем услуги по техническому обслуживанию оборудования для молочной промышленности.",
    },
    {
      icon: "/Vector3.svg",
      title: "Сухое Молоко Сыворотка",
      desc: "Занимаемся оптовой торговлей и реализацией сухих молочных продуктов по доступным ценам и в РФ.",
    },
    {
      icon: "/Vector4.svg",
      title: "Заменители Молока",
      desc: "Содержат молочные и растительные компоненты, соответствующие потребностям сельскохозяйственных животных и птиц.",
    },
    {
      icon:"/Vector5.svg",
      title: "Корма для Животных",
      desc: "Наши корма помогут решить проблему несбалансированного или недостаточного рациона скота.",
    },
    {
      icon:"/Vector6.svg",
      title: "Премиксы для Животных",
      desc: "Смесь микроэлементов, антиоксидантов, витаминов и минералов с равномерным распределением.",
    },
  ];


export default function Services() {
  

  return (
    <div className="relative overflow-hidden w-full max-w-7xl bg-amber-400/0 py-10 px-0 ">
      <h1 className="text-center text-4xl font-bold bg-blue-500/0 mb-5">
        МЫ ПРЕДЛАГАЕМ
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 px-4 lg:px-16 gap-y-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white w-full h-72 shadow-md border border-black/10 rounded-2xl flex flex-col justify-center items-center transition-all duration-300 group"
          >
            <div className="text-amber-600 mb-4 group-hover:scale-110 transition-transform duration-300">
              <Image
                src={service.icon}
                alt={service.title}
                width={50}
                height={50}
                className="w-18 h-18 object-contain"
              />
            </div>
            <h3 className="text-2xl lg:text-xl px-4 font-bold text-center mb-3 text-gray-800">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 text-center line-clamp-3 bg-amber-500/0 px-4">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
