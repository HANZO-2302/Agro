import Image from "next/image";


export default function Advantages() {
  const services = [
    {
      icon: "/Ad1.svg",
      title: "Высокое Качество",
      desc: "Мы производим оборудование и продукцию, востребованные в России и за рубежом. Это обеспечивает высокое качество и доступные цены.",
    },
    {
      icon: "/Ad2.svg",
      title: "Наладка и Поддержка",
      desc: "Мы монтируем, настраиваем и обслуживаем оборудование, включая гарантийный и постгарантийный периоды.",
    },
    {
      icon: "/Ad3.svg",
      title: "Широкий Ассортимент",
      desc: "ТАГРИС предлагает широкий ассортимент оборудования, кормов и премиксов. Наши специалисты помогут с выбором.",
    },
  ];

  return (
    <div className="relative overflow-hidden  w-full max-w-7xl bg-amber-400/0 py-15 px-0 ">
      <h1 className="text-center uppercase text-4xl font-bold bg-blue-500/0 mb-5">
        наши преимущества
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
                width={70}
                height={70}
                className=" object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-center px-4 mb-3 text-gray-800">
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
