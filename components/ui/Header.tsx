"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";
import { Inter, Outfit } from "next/font/google";
import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  RiCloseLine,
  RiMenuLine,
  RiTimeLine,
  RiMapPin2Line,
} from "@remixicon/react";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
// для мобильного ссылки
const menuItems = [
  { href: "/", text: "Home", icon: "/home.svg" },
  { href: "/contacts", text: "Contacts", icon: "/contacts.svg" },
  { href: "/projects/figma", text: "Figma", icon: "/figma.svg" },
  { href: "/projects/photoshop", text: "Photoshop", icon: "/photoshop.svg" },
  {
    href: "/projects/after",
    text: "After Effects",
    icon: "/after_effects.svg",
  },
  {
    href: "/projects/illustrator",
    text: "Tagris website",
    icon: "/illustrator.svg",
  },
  {
    href: "/projects/lightroom",
    text: "RobotTech website",
    icon: "/lightroom.svg",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    // <main className="relative flex justify-center items-center min-h-screen max-w-7xl md:rounded-xl bg-[#F5F4EC] mx-auto">
    <header
      className={`fixed left-1/2 top-0 -translate-x-1/2 z-10 bg-gray-100/80 backdrop-blur-xs shadow-[#2E5235] shadow-xs/50 w-full max-w-7xl  ${inter.className} antialiased`}
    >
      <div className="mx-auto flex max-w-4xl  bg-amber-300/0 py-2 items-center gap-4 justify-between px-5">
        {/* ── Логотип ────────────────────────────────────────────────────────────────────────────────────────────────────────────── */}
        <div className="flex items-center justify-center bg-amber-700/0">
          <Image
            src="/logo.png"
            alt="logo Icon"
            // quality={20}
            // fill={true} // {true} | {false}
            width={64}
            height={64}
            priority
            loading="eager" // {lazy} | {eager}
            className="w-15 h-15"
          />

          {/* ТАГРИС */}
          <h1 className="text-[1.3rem] md:text-[2rem] leading-4.5 font-extrabold text-[#2E5235] ">
            <Link href="/">ТАГРИС</Link>
          </h1>
        </div>

        {/* ── Меню для больших экранов ────────────────────────────────────────────────────────────────────────────────────────────────────────────── */}
        <nav className="relative hidden font-semi lg:flex lg:items-center lg:justify-center bg-amber-700/0">
          <ul className="flex space-x-5">
            <li className="overflow-hidden">
              <Link
                href="/"
                className={`" relative inline-block py-[0.2em] text-gray-800 transition-all duration-500 before:absolute before:bottom-full before:h-0.5 before:w-full before:rounded-sm before:bg-[#2E5235] after:absolute after:bottom-full after:left-0 after:whitespace-nowrap after:text-gray-900 after:content-[attr(data-hover)] hover:translate-y-full  ? "translate-y-full" : " "}`}
                data-hover="Товары"
              >
                Товары
              </Link>
            </li>
            <li className="overflow-hidden">
              <Link
                href="/"
                className={`relative inline-block py-[0.1em] text-gray-800 transition-all duration-300 before:absolute before:bottom-full before:h-0.5 before:w-full before:rounded-sm before:bg-[#2E5235] after:absolute after:bottom-full after:left-0 after:whitespace-nowrap after:text-gray-900 after:content-[attr(data-hover)] hover:translate-y-full dark:text-gray-400 dark:duration-300 dark:before:bg-blue-400 dark:after:text-gray-50  ? "translate-y-full" : ""}`}
                data-hover="Услуги"
              >
                Услуги
              </Link>
            </li>
            <li className="overflow-hidden">
              <Link
                href="/ "
                className={`" relative inline-block py-[0.1em] text-gray-800 transition-all duration-500 before:absolute before:bottom-full before:h-0.5 before:w-full before:rounded-sm before:bg-[#2E5235] after:absolute after:bottom-full after:left-0 after:whitespace-nowrap after:text-gray-900 after:content-[attr(data-hover)] hover:translate-y-full ? 'translate-y-full' : ' '}`}
                data-hover="Вопросы"
              >
                Вопросы
              </Link>
            </li>
            <li className="overflow-hidden">
              <Link
                href="/"
                className={`" relative inline-block py-[0.1em] text-gray-800 transition-all duration-500 before:absolute before:bottom-full before:h-0.5 before:w-full before:rounded-sm before:bg-[#2E5235] after:absolute after:bottom-full after:left-0 after:whitespace-nowrap after:text-gray-900 after:content-[attr(data-hover)] hover:translate-y-full  ? "translate-y-full" : " "}`}
                data-hover="О компании"
              >
                О компании
              </Link>
            </li>

            <li className="overflow-hidden">
              <Link
                href="/"
                className={`" relative inline-block py-[0.1em] text-gray-800 transition-all duration-500 before:absolute before:bottom-full before:h-0.5 before:w-full before:rounded-sm before:bg-[#2E5235] after:absolute after:bottom-full after:left-0 after:whitespace-nowrap after:text-gray-900 after:content-[attr(data-hover)] hover:translate-y-full  ? "translate-y-full" : " "}`}
                data-hover="Новости"
              >
                Новости
              </Link>
            </li>
          </ul>
          <div className="relative flex bg-blue-500/0 drop-shadow-md/20 justify-center items-center px-3">
            {/* если добавить в <DropdownMenu modal={false}> включает скрол*/}
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="default"
                  className="bg-accent rounded-full hover:shadow-lg/40  px-5 text-base transition-all duration-300 ease-in-out hover:text-gray-700  hover:bg-transparent hover:inset-ring-2 hover:inset-ring-accent "
                >
                  Контакты
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="max-w-sm w-full backdrop-blur-lg bg-gray-300/40 -translate-x-1 xl:translate-x-10 translate-y-5">
                <div className="flex justify-start p-2 gap-2">
                  <div className="w-15 h-15 rounded-sm overflow-hidden border border-black/20 shadow-md">
                    <Image
                      src="/D.png"
                      alt="SEO Icon"
                      width={80}
                      height={80}
                      priority
                      className="w-full h-full object-cover scale-110"
                    />
                  </div>
                  <div>
                    <DropdownMenuItem className="flex flex-col justify-start -space-y-2.5 items-start ">
                      {/* <UserIcon /> */}
                      <h1 className="text-sm font-bold text-gray-900">
                        Генеральный Директор
                      </h1>
                      <h2 className="text-xs font-medium text-gray-900">
                        Борисов Сергей Владимирович
                      </h2>
                      <p className="text-xs font-medium text-gray-900">
                        <a
                          href="tel:+79123456789"
                          className="relative inline-block pb-1 group"
                        >
                          +7 (495) 123-45-67
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-200 rounded-4xl transition-all duration-500 ease-in-out group-hover:w-full"></span>
                        </a>
                      </p>
                    </DropdownMenuItem>
                  </div>
                </div>
                <div className="flex justify-start p-2  gap-2">
                  <div className="w-15 h-15 rounded-sm overflow-hidden border border-black/20 shadow-md">
                    <Image
                      src="/A.jpg"
                      alt="SEO Icon"
                      width={80}
                      height={80}
                      priority
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <DropdownMenuItem className="flex flex-col justify-start -space-y-2.5 items-start">
                      {/* <UserIcon /> */}
                      <h1 className="text-sm font-bold text-gray-900">
                        Менеджер
                      </h1>
                      <h2 className="text-xs font-medium text-gray-900">
                        Анна Владимировна
                      </h2>
                      <p className="text-xs font-medium text-gray-900">
                        <a
                          href="tel:+79123456789"
                          className="relative inline-block pb-1 group"
                        >
                          +7 (495) 123-45-67
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-200 rounded-4xl transition-all duration-500 ease-in-out group-hover:w-full"></span>
                        </a>
                      </p>
                    </DropdownMenuItem>
                  </div>
                </div>
                <div className="flex justify-start p-2  gap-2">
                  <div className="w-15 h-15 rounded-sm overflow-hidden border border-black/20 shadow-md">
                    <Image
                      src="/K.png"
                      alt="SEO Icon"
                      width={80}
                      height={80}
                      priority
                      className="w-full h-full object-cover scale-130"
                    />
                  </div>
                  <div>
                    <DropdownMenuItem className="flex flex-col justify-start -space-y-2.5 items-start">
                      {/* <UserIcon /> */}
                      <h1 className="text-sm font-bold text-gray-900">
                        Менеджер
                      </h1>
                      <h2 className="text-xs font-medium text-gray-900">
                        Кирилл Федорович
                      </h2>
                      <p className="text-xs font-medium text-gray-900">
                        <a
                          href="tel:+79123456789"
                          className="relative inline-block pb-1 group"
                        >
                          +7 (495) 123-45-67
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-200 rounded-4xl transition-all duration-500 ease-in-out group-hover:w-full"></span>
                        </a>
                      </p>
                    </DropdownMenuItem>
                  </div>
                </div>
                <div className="flex justify-start p-2  gap-2">
                  <div className="w-15 h-15 rounded-sm overflow-hidden border border-black/20 shadow-md">
                    <Image
                      src="/S.png"
                      alt="SEO Icon"
                      width={80}
                      height={80}
                      priority
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <DropdownMenuItem className="flex flex-col justify-start -space-y-2.5 items-start">
                      {/* <UserIcon /> */}
                      <h1 className="text-sm font-bold text-gray-900">Склад</h1>
                      <h2 className="text-xs font-medium text-gray-900">
                        Иван Сергеевич
                      </h2>
                      <p className="text-xs font-medium text-gray-900">
                        <a
                          href="tel:+79123456789"
                          className="relative inline-block pb-1 group"
                        >
                          +7 (495) 123-45-67
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-200 rounded-4xl transition-all duration-500 ease-in-out group-hover:w-full"></span>
                        </a>
                      </p>
                    </DropdownMenuItem>
                  </div>
                </div>

                {/* ── Social networks ─────────────────────────────────────────────────────── */}
                <div className="flex py-8 md:justify-center justify-center items-center gap-9">
                  <a
                    href="https://t.me/your_username"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/Ftel.svg"
                      alt="Telegram"
                      width={50}
                      height={50}
                      className="w-10 h-10 object-contain hover:scale-110 hover:-translate-y-2 transition-all duration-200 ease-in-out drop-shadow-lg"
                    />
                  </a>
                  <a
                    href="https://wa.me/your_number"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/Fwhat.svg"
                      alt="Whatsapp"
                      width={50}
                      height={50}
                      className="w-10 h-10 object-contain hover:scale-110 hover:-translate-y-2 transition-all duration-200 ease-in-out drop-shadow-lg"
                    />
                  </a>
                  <a
                    href="https://max.ru/u/ВАШ_ХЕШИ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/Fmax.svg"
                      alt="Max"
                      width={50}
                      height={50}
                      className="w-10 h-10 object-contain hover:scale-110 hover:-translate-y-2 transition-all duration-200 ease-in-out drop-shadow-lg"
                    />
                  </a>
                </div>
                {/* <DropdownMenuSeparator /> */}
                {/* ── Блок с адресом и временем ────────────────────────────────────────────────────────────────────────────────────────────────────────────── */}
                <div className=" mx-auto p-4 pt-4 border-t border-green-900/50">
                  <div className="flex flex-col items-start gap-2">
                    {/* Адрес */}
                    <a
                      href="https://yandex.ru/maps/213/moscow/house/ulitsa_plekhanova_4a/Z04YcQJmT00CQFtvfXt0dXlrZw==/?ll=37.749990%2C55.758015&z=14.03"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex items-start gap-1 text-left">
                        <div className="text-green-900">
                          <RiMapPin2Line />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold uppercase text-green-900 tracking-widest mt-1 mb-1">
                            Адрес офиса
                          </h4>
                          <p className="text-xs text-gray-700 leading-normal tracking-widest">
                            111123, Москва,
                            <br />
                            ул. Плеханова, 4а
                          </p>
                        </div>
                        <div className="w-15 h-15 rounded-sm ml-5 overflow-hidden border border-black/20 shadow-md">
                          <Image
                            src="/K2.png"
                            alt="SEO Icon"
                            width={80}
                            height={80}
                            priority
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </a>

                    {/* Время работы */}
                    <div className="flex items-start justify-center gap-1 text-left">
                      <div className="text-green-900">
                        <RiTimeLine />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase text-green-900  tracking-widest mt-1 mb-1">
                          Время работы
                        </h4>
                        <p className="text-xs text-gray-700">
                          пн-пт:{" "}
                          <span className="font-semibold text-gray-700">
                            08:00 – 18:00
                          </span>
                        </p>
                        <p className="text-xs text-gray-700/80 italic mt-1">
                          суббота, воскресенье — выходной
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>

        {/* ── Бургер меню для маленьких экранов ────────────────────────────────────────────────────────────────────────────────────────────────────────────── */}
        <button
          className="relative block p-3 focus:outline-none lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          {/* открытия */}
          <div
            className={`text-[#2E5235] transition-all duration-300  ${
              isOpen
                ? "scale-0 opacity-0 pointer-events-none"
                : "scale-100 opacity-100"
            }`}
          >
            <RiMenuLine size={35} />
          </div>

          {/* закрытия */}
          <div
            className={`absolute inset-0 flex items-center justify-center text-[#2E5235] transition-all duration-300 ${
              isOpen
                ? "scale-100 opacity-100"
                : "scale-0 opacity-0 pointer-events-none"
            }`}
          >
            <RiCloseLine size={35} />
          </div>
        </button>
      </div>

      {/* ──  Выпадающее меню для маленьких экранов ────────────────────────────────────────────────────────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            ref={menuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`absolute z-50 flex h-dvh w-full justify-center bg-[#2E5235] select-none ${outfit.className} antialiased lg:hidden`}
            role="dialog"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                    staggerChildren: 0.05,
                    delayChildren: 0.2,
                  },
                },
              }}
              className="mt-2 flex max-h-[calc(100vh-8rem)] w-full flex-col items-center overflow-y-auto overscroll-contain px-4"
            >
              {/* Основные пункты меню */}
              {menuItems.map((item) => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  className="relative flex w-full border-b border-green-200/30 text-center text-2xl text-gray-50"
                >
                  <Link
                    href={item.href}
                    onClick={() => setTimeout(() => setIsOpen(false), 300)}
                    className="flex h-20 w-full items-center justify-start"
                  >
                    {item.text}
                  </Link>
                </motion.li>
              ))}

              {/* ── Контакты для маленьких экранов ────────────────────────────────────────────────────────────────────────────────────────────────────────────── */}
              <motion.li
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                className="w-full py-6"
              >
                <h3 className="mb-4 text-left text-lg font-bold text-white uppercase tracking-widest">
                  Наши контакты
                </h3>

                <div className="grid gap-4">
                  {[
                    {
                      role: "Генеральный Директор",
                      name: "Борисов Сергей Владимирович",
                      phone: "+7 (495) 123-45-67",
                      img: "/D.png",
                      scale: "scale-110",
                    },
                    {
                      role: "Менеджер",
                      name: "Анна Владимировна",
                      phone: "+7 (495) 123-45-67",
                      img: "/A.jpg",
                      scale: "",
                    },
                    {
                      role: "Менеджер",
                      name: "Кирилл Федорович",
                      phone: "+7 (495) 123-45-67",
                      img: "/K.png",
                      scale: "scale-130",
                    },
                    {
                      role: "Склад",
                      name: "Иван Сергеевич",
                      phone: "+7 (495) 123-45-67",
                      img: "/S.png",
                      scale: "",
                    },
                  ].map((contact, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10"
                    >
                      <div className="w-14 h-14 rounded-md overflow-hidden border border-white/20 shrink-0">
                        <Image
                          src={contact.img}
                          alt={contact.role}
                          width={60}
                          height={60}
                          className={`w-full h-full object-cover ${contact.scale}`}
                        />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-[10px] font-bold uppercase text-green-300/90  text-shadow-xs/50 tracking-widest leading-none mb-1">
                          {contact.role}
                        </span>
                        <span className="text-sm font-medium text-white leading-tight">
                          {contact.name}
                        </span>
                        <a
                          href={`tel:${contact.phone.replace(/\D/g, "")}`}
                          className="text-xs text-white/70 mt-1 hover:text-white transition-colors"
                        >
                          {contact.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex py-8 md:justify-start justify-center items-center gap-9">
                  <a
                    href="https://t.me/your_username"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/Telegramm.svg"
                      alt="Telegram"
                      width={50}
                      height={50}
                      className="w-10 h-10 object-contain hover:scale-110 hover:-translate-y-2 transition-all duration-200 ease-in-out drop-shadow-lg"
                    />
                  </a>
                  <a
                    href="https://wa.me/your_number"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/Whatsapp.svg"
                      alt="Whatsapp"
                      width={50}
                      height={50}
                      className="w-10 h-10 object-contain hover:scale-110 hover:-translate-y-2 transition-all duration-200 ease-in-out drop-shadow-lg"
                    />
                  </a>
                  <a
                    href="https://max.ru/u/ВАШ_ХЕШИ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/Max.svg"
                      alt="Max"
                      width={50}
                      height={50}
                      className="w-10 h-10 object-contain hover:scale-110 hover:-translate-y-2 transition-all duration-200 ease-in-out drop-shadow-lg"
                    />
                  </a>
                </div>

                {/* ── Блок с адресом и временем ────────────────────────────────────────────────────────────────────────────────────────────────────────────── */}
                <div className="pt-4 border-t border-green-300/50">
                  <div className="grid grid-cols-2 items-start gap-2">
                    {/* Адрес */}
                    <a
                      href="https://yandex.ru/maps/213/moscow/house/ulitsa_plekhanova_4a/Z04YcQJmT00CQFtvfXt0dXlrZw==/?ll=37.749990%2C55.758015&z=14.03"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex items-start gap-1 text-left">
                        <div className="text-green-100">
                          <RiMapPin2Line />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold uppercase text-green-300/90 text-shadow-xs/50 tracking-widest mt-1 mb-1">
                            Адрес офиса
                          </h4>
                          <p className="text-xs text-white/90 leading-normal tracking-widest">
                            111123, Москва,
                            <br />
                            ул. Плеханова, 4а
                          </p>
                        </div>
                      </div>
                    </a>

                    {/* Время работы */}
                    <div className="flex items-start justify-center gap-1 text-left">
                      <div className="text-green-100">
                        <RiTimeLine />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase text-green-300/90 text-shadow-xs/50 tracking-widest mt-1 mb-1">
                          Время работы
                        </h4>
                        <p className="text-xs text-white/90">
                          пн-пт:{" "}
                          <span className="font-semibold text-white">
                            08:00 – 18:00
                          </span>
                        </p>
                        <p className="text-xs text-white/50 italic mt-1">
                          суббота, воскресенье — выходной
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.li>
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* <div className="fixed z-50 h-0.5 w-full bg-[#2E5235] md:hidden"></div> */}
    </header>
    // </main>
  );
}
