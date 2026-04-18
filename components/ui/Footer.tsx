import Image from "next/image";
import * as motion from "motion/react-client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  // DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Footer() {
  return (
    <div className="px-4 overflow-hidden w-full mt-9 h-30 max-w-7xl bg-accent/0 ">
      <div className=" max-w-5xl w-full mx-auto border-t border-gray-500 shadow-2xs/40"></div>
      <div className="p-4 flex flex-col justify-center items-center gap-5 md:flex-row  ">
        {/* Логотип */}
        <div className="flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="logo Icon"
            // quality={20}
            // fill={true} // {true} | {false}
            width={64}
            height={64}
            priority
            loading="eager" // {lazy} | {eager}
          />

          {/* ТАГРИС */}
          <h1 className="text-[1.8rem] md:text-[2rem] leading-4.5 font-extrabold text-[#2E5235] ">
            <Link href="/">ТАГРИС</Link>
          </h1>
        </div>
        {/* Соцсети */}
        <div className="flex justify-center items-center gap-9">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a
              href="https://vk.com/vk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Fvk.svg"
                alt="VK"
                width={50}
                height={50}
                className="w-10 h-10 object-contain drop-shadow-lg"
              />
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
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
                className="w-10 h-10 object-contain  drop-shadow-lg"
              />
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
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
                className="w-10 h-10 object-contain drop-shadow-lg"
              />
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
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
                className="w-10 h-10 object-contain  drop-shadow-lg"
              />
            </a>
          </motion.div>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="link"
              className="hover:underline text-wrap hover:underline-offset-4  hover:shadow-none font-normal text-md text-shadow-sm/0 text-[#282828]"
            >
              Политика конфиденциальности
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md bg-[#F5F4EC]">
            <DialogHeader>
              <DialogTitle className="p-6 text-center uppercase font-bold text-lg">
                Политика конфиденциальности
              </DialogTitle>
              <div className="w-full border-b border-gray-500"></div>
              {/* <DialogDescription>
                            This dialog has a sticky footer that stays visible
                            while the content scrolls.
                          </DialogDescription> */}
            </DialogHeader>

            {/* Скроллящийся контент */}
            <div className="no-scrollbar max-h-[60vh] overflow-y-auto px-6 py-4">
              <div className="text-sm text-gray-700 leading-relaxed space-y-6">
                <header className="text-center pb-2">
                  <h2 className="text-base font-bold text-gray-900 uppercase tracking-wide">
                    Политика в отношении обработки персональных данных
                  </h2>
                </header>

                <section>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Общие положения
                  </h3>
                  <p>
                    Настоящая политика составлена в соответствии с требованиями
                    Федерального закона от 27.07.2006. №152-ФЗ «О персональных
                    данных» и определяет порядок обработки и меры по обеспечению
                    безопасности, предпринимаемые
                    <strong> Меняйловым Игорем Игоревичем</strong> (далее —
                    Оператор).
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>
                      Оператор ставит своей целью соблюдение прав и свобод
                      человека при обработке его персональных данных.
                    </li>
                    <li>
                      Политика применяется ко всей информации, которую Оператор
                      может получить о посетителях веб-сайта{" "}
                      <span className="text-blue-600">
                        https://www.igormeniailov.ru/
                      </span>
                      .
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Основные понятия
                  </h3>
                  <p>
                    <strong>Персональные данные</strong> — любая информация,
                    относящаяся к определенному Пользователю веб-сайта.
                    <strong>Обработка</strong> — сбор, запись, накопление,
                    хранение, передача и удаление данных.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Обрабатываемые данные
                  </h3>
                  <p>Через форму обратной связи на сайте могут собираться:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 font-medium">
                    <li>Имя;</li>
                    <li>Адрес электронной почты;</li>
                    <li>Номер телефона;</li>
                    <li>Иная добровольно указанная информация.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Цели и безопасность
                  </h3>
                  <p>
                    Цель обработки — уточнение деталей запроса и предоставление
                    консультаций. Передача данных осуществляется через{" "}
                    <strong>протокол SMTP с шифрованием SSL/TLS</strong> (сервис
                    Яндекс.Почта). Данные никогда не будут переданы третьим
                    лицам без законных оснований.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Срок обработки и отзыв
                  </h3>
                  <p>
                    Срок обработки данных неограничен. Вы можете в любой момент
                    отозвать свое согласие, направив письмо на электронную
                    почту:{" "}
                    <a
                      href="mailto:m2302835@yandex.ru"
                      className="text-blue-600 underline"
                    >
                      m2302835@yandex.ru
                    </a>
                    .
                  </p>
                </section>
                <footer className="pt-4 border-t border-gray-200 space-y-2">
                  <p className="text-xs text-gray-500">
                    Актуальная версия Политики доступна по адресу:
                    https://www.igormeniailov.ru/
                  </p>
                  <div className="text-sm text-gray-700 font-medium pt-2">
                    <p>Оператор: Меняйлов Игорь Игоревич</p>
                    <p>Контактный адрес: m2302835@yandex.ru</p>
                  </div>
                </footer>
              </div>
            </div>
            {/* Разделитель */}
            <div className="w-full border-b border-gray-500"></div>
            <DialogFooter className="p-6">
              <DialogClose asChild>
                <Button
                  variant="outline"
                  className="text-accent inset-ring-2 inset-ring-accent bg-transparent hover:text-white hover:bg-accent duration-300 "
                >
                  Закрыть
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <h2 className="font-normal">©2026 Все права защищены</h2>
      </div>
    </div>
  );
}
