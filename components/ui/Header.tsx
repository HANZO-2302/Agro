"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  // DropdownMenuGroup,
  DropdownMenuItem,
  // DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";

import Image from "next/image";
import { Inter, Outfit } from "next/font/google";
import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";

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
      className={`fixed top-0 z-10 bg-gray-100/80 object-bottom backdrop-blur-xs shadow-[#2E5235] shadow-xs/50 w-full max-w-7xl ${inter.className} antialiased`}
    >
      <div className="mx-auto flex max-w-5xl bg-amber-300/0 py-2 items-center justify-between px-8">
        <div className="flex items-center justify-center ">
          {/* Логотип */}
          <Image
            src="/logo.png"
            alt="logo Icon"
            // quality={20}
            // fill={true} // {true} | {false}
            width={64}
            height={64}
            priority
            loading="eager" // {lazy} | {eager}
            className="duration-500 hover:scale-105"
          />

          {/* ТАГРИС */}
          <motion.div
            whileTap={{ scale: 0.95 }}
            className="relative flex flex-col"
          >
            <h1 className="text-[1.8rem] md:text-[2rem] leading-4.5 font-extrabold text-[#2E5235] ">
              <Link href="/">ТАГРИС</Link>
            </h1>
          </motion.div>
        </div>

        {/* Меню для больших экранов */}
        <nav className="relative hidden  font-semi md:flex md:items-center md:justify-center">
          <ul className="flex space-x-5">
            <li className="overflow-hidden">
              <Link
                href="/"
                className={`relative inline-block py-[0.1em] text-gray-800 transition-all duration-300 before:absolute before:bottom-full before:h-0.5 before:w-full before:rounded-sm before:bg-[#2E5235] after:absolute after:bottom-full after:left-0 after:whitespace-nowrap after:text-gray-900 after:content-[attr(data-hover)] hover:translate-y-full dark:text-gray-400 dark:duration-300 dark:before:bg-blue-400 dark:after:text-gray-50  ? "translate-y-full" : ""}`}
                data-hover="Home"
              >
                Home
              </Link>
            </li>
            <li className="overflow-hidden">
              <Link
                href="/ "
                className={`" relative inline-block py-[0.1em] text-gray-800 transition-all duration-500 before:absolute before:bottom-full before:h-0.5 before:w-full before:rounded-sm before:bg-[#2E5235] after:absolute after:bottom-full after:left-0 after:whitespace-nowrap after:text-gray-900 after:content-[attr(data-hover)] hover:translate-y-full ? 'translate-y-full' : ' '}`}
                data-hover="Contacts"
              >
                Contacts
              </Link>
            </li>
            <li className="overflow-hidden">
              <Link
                href="/"
                className={`" relative inline-block py-[0.1em] text-gray-800 transition-all duration-500 before:absolute before:bottom-full before:h-0.5 before:w-full before:rounded-sm before:bg-[#2E5235] after:absolute after:bottom-full after:left-0 after:whitespace-nowrap after:text-gray-900 after:content-[attr(data-hover)] hover:translate-y-full  ? "translate-y-full" : " "}`}
                data-hover="Projects"
              >
                Projects
              </Link>
            </li>
            <li className="overflow-hidden">
              <Link
                href="/"
                className={`" relative inline-block py-[0.1em] text-gray-800 transition-all duration-500 before:absolute before:bottom-full before:h-0.5 before:w-full before:rounded-sm before:bg-[#2E5235] after:absolute after:bottom-full after:left-0 after:whitespace-nowrap after:text-gray-900 after:content-[attr(data-hover)] hover:translate-y-full  ? "translate-y-full" : " "}`}
                data-hover="Projects"
              >
                Projects
              </Link>
            </li>
            <li className="overflow-hidden">
              <Link
                href="/"
                className={`" relative inline-block py-[0.1em] text-gray-800 transition-all duration-500 before:absolute before:bottom-full before:h-0.5 before:w-full before:rounded-sm before:bg-[#2E5235] after:absolute after:bottom-full after:left-0 after:whitespace-nowrap after:text-gray-900 after:content-[attr(data-hover)] hover:translate-y-full  ? "translate-y-full" : " "}`}
                data-hover="Projects"
              >
                Projects
              </Link>
            </li>
            
          </ul>
          <div className="relative flex bg-blue-500/0 justify-center items-center px-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="default" className="rounded-full px-6 py-5 hover:bg-amber-600/0 hover:inset-ring-2 hover:inset-ring-[#2e5235] hover:text-[#2e5235]  ">
                    Контакты
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className=" duration-300 transition-transform">
                  <DropdownMenuItem>
                    <UserIcon />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCardIcon />
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <SettingsIcon />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">
                    <LogOutIcon />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
        </nav>

        {/* Иконки  бургер меню */}
        <button
          className="relative block focus:outline-none md:hidden"
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

      {/* Выпадающее меню для маленьких экранов */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            ref={menuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`absolute z-50 flex h-screen w-full justify-center bg-[#2E5235] select-none ${outfit.className} antialiased md:hidden`}
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
                    staggerChildren: 0.05, //задержка между анимацией детей
                    delayChildren: 0.2, //задержкка
                  },
                },
              }}
              className="mt-2 flex max-h-[calc(100vh-7rem)] w-full flex-col items-center overflow-y-auto overscroll-contain pr-6 pl-6"
            >
              {/* <Cosmos />
              <BackgroundDots /> */}
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
                    // onClick={() => setIsOpen(false)}
                    onClick={() => setTimeout(() => setIsOpen(false), 300)}
                    className="flex h-20 w-full items-center justify-start"
                  >
                    {item.text}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* <div className="fixed z-50 h-0.5 w-full bg-[#2E5235] md:hidden"></div> */}
    </header>
    // </main>
  );
}
