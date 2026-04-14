

// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { useForm, useWatch, type SubmitHandler } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod/v3";
// import { toast } from "sonner";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   Field,
//   FieldContent,
//   FieldGroup,
//   FieldLabel,
// } from "@/components/ui/field";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// // ─── Zod schema ───────────────────────────────────────────────────────────────
// const schema = z.object({
//   name: z
//     .string()
//     .min(3, "Имя должно содержать минимум 3 символа")
//     .max(50, "Имя слишком длинное")
//     .regex(/^[a-zA-Zа-яА-ЯёЁ\s]+$/, "Имя может содержать только буквы"),
//   phone: z
//     .string()
//     .min(7, "Введите корректный номер телефона")
//     .regex(/^[\d\s\+\-\(\)]+$/, "Только цифры и спецсимволы"),
//   email: z.string().email("Введите корректный email"),
//   message: z
//     .string()
//     .min(10, "Опишите задачу подробнее (минимум 10 символов)")
//     .max(1000, "Сообщение слишком длинное"),
//   terms: z.boolean().refine((val) => val === true, {
//     message: "Необходимо принять условия обработки персональных данных",
//   }),
// });

// type FormValues = z.infer<typeof schema>;
// type SendMailError = { message?: string };

// // ─── Route ────────────────────────────────────────────────────────────────────
// async function sendMail(data: FormValues) {
//   const res = await fetch("/api/contact", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });
//   if (!res.ok) {
//     const err = (await res.json().catch(() => ({}))) as SendMailError;
//     throw new Error(err.message || "Ошибка отправки");
//   }
//   return (await res.json()) as { success: boolean };
// }

// // ─── Соцсети ──────────────────────────────────────────────────────────────────
// const SOCIALS = [
//   { href: "https://t.me/your_username", src: "/Telegramm.svg", alt: "Telegram" },
//   { href: "https://wa.me/your_number",  src: "/Whatsapp.svg",  alt: "Whatsapp" },
//   { href: "https://max.ru/u/ВАШ_ХЕШИ", src: "/Max.svg",       alt: "Max"      },
// ];

// // ─── Component ────────────────────────────────────────────────────────────────
// export default function Form() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     setValue,
//     control,
//     formState: { errors, isSubmitting },
//   } = useForm<FormValues>({
//     resolver: zodResolver(schema),
//     defaultValues: { name: "", phone: "", email: "", message: "", terms: false },
//   });

//   const termsValue  = useWatch({ control, name: "terms" }) ?? false;
//   const [showSpinner, setShowSpinner] = useState(false);

//   const onSubmit: SubmitHandler<FormValues> = async (data) => {
//     setShowSpinner(true);
//     try {
//       await sendMail(data);
//       toast.success("Заявка отправлена!", {
//         description: "Мы свяжемся с вами в ближайшее время.",
//       });
//       reset();
//     } catch (err: unknown) {
//       const message =
//         err instanceof Error ? err.message : "Please try again later.";
//       toast.error("Не удалось отправить", { description: message });
//     } finally {
//       setTimeout(() => setShowSpinner(false), 300);
//     }
//   };

//   const inputBase =
//     "w-full bg-gray-200 rounded-xl px-4 py-3 transition outline-none " +
//     "focus:inset-ring-2 focus:inset-ring-[#5e9463] " +
//     "placeholder:text-gray-500 text-gray-800";

//   const errorText =
//     "block h-4 ml-2 mt-0.5 text-red-300 text-[0.7rem] leading-none";

//   return (
//     // ── Section: mobile py-10 px-4 → md py-20 px-10 ──────────────────────────
//     <section
//       id="form"
//       className="
//         bg-[#2f5d3a] mt-14
//         py-10 px-4
//         md:py-20 md:px-10
//         flex justify-center
//       "
//     >
//       {/*
//         ── Канонический паттерн ──────────────────────────────────────────────
//         base  → flex-col              (mobile: блоки стопкой)
//         md:   → flex-row              (планшет+: LEFT и FORM рядом)
//         lg:   → max-w-5xl mx-auto     (десктоп: ограничиваем ширину)
//       */}
//       <div
//         className="
//           w-full
//           flex flex-col gap-10
//           md:flex-row md:justify-between md:items-start
//           lg:max-w-5xl
//         "
//       >
//         {/* ── LEFT ──────────────────────────────────────────────────────────── */}
//         <div className="text-white md:mt-5 md:max-w-[36rem]">
//           <h1
//             className="
//               font-medium mb-5
//               text-3xl
//               sm:text-4xl
//               lg:text-5xl
//             "
//           >
//             Технологичные решения <br />
//             для современного <br />
//             молочного хозяйства
//           </h1>

//           <p
//             className="
//               font-light leading-7 mb-9 text-white/80
//               text-sm
//               sm:text-lg
//               lg:text-xl
//             "
//           >
//             Совмещаем передовые агротехнологии и фермерский опыт, чтобы
//             повысить эффективность, качество продукции и устойчивость бизнеса.
//           </p>

//           {/* Соцсети: по центру на mobile, по левому краю на md+ */}
//           <div
//             className="
//               flex items-center gap-9
//               justify-center
//               md:justify-start md:mt-14
//             "
//           >
//             {SOCIALS.map(({ href, src, alt }) => (
//               <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
//                 <Image
//                   src={src}
//                   alt={alt}
//                   width={50}
//                   height={50}
//                   className="
//                     w-10 h-10 object-contain drop-shadow-lg
//                     transition-all duration-200 ease-in-out
//                     hover:scale-110 hover:-translate-y-2
//                   "
//                 />
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* ── RIGHT — FORM ──────────────────────────────────────────────────── */}
//         {/*
//           base  → w-full            (mobile: на всю ширину)
//           md:   → занимает остаток flex-строки рядом с LEFT
//           lg:   → max-w-sm          (десктоп: не шире ~384px)
//         */}
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           noValidate
//           className="w-full lg:max-w-sm flex flex-col gap-3"
//         >
//           {/* Имя + Телефон: col → row начиная с sm */}
//           <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
//             <div className="w-full">
//               <input
//                 type="text"
//                 placeholder="Имя"
//                 {...register("name")}
//                 className={inputBase}
//               />
//               <p className={errorText}>{errors.name?.message ?? ""}</p>
//             </div>
//             <div className="w-full">
//               <input
//                 type="tel"
//                 placeholder="Номер тел."
//                 {...register("phone")}
//                 className={inputBase}
//               />
//               <p className={errorText}>{errors.phone?.message ?? ""}</p>
//             </div>
//           </div>

//           {/* Email */}
//           <div>
//             <input
//               type="email"
//               placeholder="Электронная почта"
//               {...register("email")}
//               className={inputBase}
//             />
//             <p className={errorText}>{errors.email?.message ?? ""}</p>
//           </div>

//           {/* Сообщение */}
//           <div>
//             <textarea
//               placeholder="Опишите задачу"
//               rows={4}
//               {...register("message")}
//               className={`${inputBase} resize-none`}
//             />
//             <p className={`${errorText} -mt-1.5`}>
//               {errors.message?.message ?? ""}
//             </p>
//           </div>

//           {/* ── Checkbox ──────────────────────────────────────────────────────── */}
//           <div className="ring-1 mt-1 mb-2 ring-white/40 rounded-lg p-3">
//             <FieldGroup>
//               <Field orientation="horizontal">
//                 <Checkbox
//                   id="terms-checkbox"
//                   name="terms"
//                   checked={termsValue}
//                   onCheckedChange={(checked) =>
//                     setValue("terms", checked === true, { shouldValidate: true })
//                   }
//                   className="border-white/60 data-[state=checked]:bg-[#6fa773] data-[state=checked]:border-[#6fa773]"
//                 />
//                 <FieldContent>
//                   <FieldLabel
//                     htmlFor="terms-checkbox"
//                     className="text-white/70 text-[0.6rem] font-normal cursor-pointer"
//                   >
//                     Принимаю условия обработки персональных данных.{" "}
//                     <Dialog>
//                       <DialogTrigger asChild>
//                         <Button
//                           variant="link"
//                           className="underline underline-offset-2 h-1 hover:shadow-none font-extralight text-[0.6rem] text-[#a8d5ac] hover:text-white transition-colors"
//                         >
//                           Политика конфиденциальности
//                         </Button>
//                       </DialogTrigger>
//                       <DialogContent className="sm:max-w-md bg-[#F5F4EC]">
//                         <DialogHeader>
//                           <DialogTitle className="p-6 text-center uppercase font-bold text-lg">
//                             Политика конфиденциальности
//                           </DialogTitle>
//                           <div className="w-full border-b border-gray-500" />
//                         </DialogHeader>

//                         <div className="no-scrollbar max-h-[60vh] overflow-y-auto px-6 py-4">
//                           <div className="text-sm text-gray-700 leading-relaxed space-y-6">
//                             <header className="text-center pb-2">
//                               <h2 className="text-base font-bold text-gray-900 uppercase tracking-wide">
//                                 Политика в отношении обработки персональных данных
//                               </h2>
//                             </header>

//                             <section>
//                               <h3 className="font-semibold text-gray-900 mb-2">
//                                 1. Общие положения
//                               </h3>
//                               <p>
//                                 Настоящая политика составлена в соответствии с
//                                 требованиями Федерального закона от 27.07.2006.
//                                 №152-ФЗ «О персональных данных» и определяет
//                                 порядок обработки и меры по обеспечению
//                                 безопасности, предпринимаемые{" "}
//                                 <strong>Меняйловым Игорем Игоревичем</strong>{" "}
//                                 (далее — Оператор).
//                               </p>
//                               <ul className="list-disc pl-5 mt-2 space-y-1">
//                                 <li>
//                                   Оператор ставит своей целью соблюдение прав и
//                                   свобод человека при обработке его персональных
//                                   данных.
//                                 </li>
//                                 <li>
//                                   Политика применяется ко всей информации, которую
//                                   Оператор может получить о посетителях веб-сайта{" "}
//                                   <span className="text-blue-600">
//                                     https://www.igormeniailov.ru/
//                                   </span>
//                                   .
//                                 </li>
//                               </ul>
//                             </section>

//                             <section>
//                               <h3 className="font-semibold text-gray-900 mb-2">
//                                 2. Основные понятия
//                               </h3>
//                               <p>
//                                 <strong>Персональные данные</strong> — любая
//                                 информация, относящаяся к определенному
//                                 Пользователю веб-сайта.{" "}
//                                 <strong>Обработка</strong> — сбор, запись,
//                                 накопление, хранение, передача и удаление данных.
//                               </p>
//                             </section>

//                             <section>
//                               <h3 className="font-semibold text-gray-900 mb-2">
//                                 3. Обрабатываемые данные
//                               </h3>
//                               <p>
//                                 Через форму обратной связи на сайте могут
//                                 собираться:
//                               </p>
//                               <ul className="list-disc pl-5 mt-2 space-y-1 font-medium">
//                                 <li>Имя;</li>
//                                 <li>Адрес электронной почты;</li>
//                                 <li>Номер телефона;</li>
//                                 <li>Иная добровольно указанная информация.</li>
//                               </ul>
//                             </section>

//                             <section>
//                               <h3 className="font-semibold text-gray-900 mb-2">
//                                 4. Цели и безопасность
//                               </h3>
//                               <p>
//                                 Цель обработки — уточнение деталей запроса и
//                                 предоставление консультаций. Передача данных
//                                 осуществляется через{" "}
//                                 <strong>протокол SMTP с шифрованием SSL/TLS</strong>{" "}
//                                 (сервис Яндекс.Почта). Данные никогда не будут
//                                 переданы третьим лицам без законных оснований.
//                               </p>
//                             </section>

//                             <section>
//                               <h3 className="font-semibold text-gray-900 mb-2">
//                                 5. Срок обработки и отзыв
//                               </h3>
//                               <p>
//                                 Срок обработки данных неограничен. Вы можете в
//                                 любой момент отозвать своё согласие, направив
//                                 письмо на:{" "}
//                                 <a
//                                   href="mailto:m2302835@yandex.ru"
//                                   className="text-blue-600 underline"
//                                 >
//                                   m2302835@yandex.ru
//                                 </a>
//                                 .
//                               </p>
//                             </section>

//                             <footer className="pt-4 border-t border-gray-200 space-y-2">
//                               <p className="text-xs text-gray-500">
//                                 Актуальная версия Политики доступна по адресу:
//                                 https://www.igormeniailov.ru/
//                               </p>
//                               <div className="text-sm text-gray-700 font-medium pt-2">
//                                 <p>Оператор: Меняйлов Игорь Игоревич</p>
//                                 <p>Контактный адрес: m2302835@yandex.ru</p>
//                               </div>
//                             </footer>
//                           </div>
//                         </div>

//                         <div className="w-full border-b border-gray-500" />
//                         <DialogFooter className="p-6">
//                           <DialogClose asChild>
//                             <Button
//                               variant="outline"
//                               className="text-accent inset-ring-2 inset-ring-accent bg-transparent hover:text-white hover:bg-accent duration-300"
//                             >
//                               Закрыть
//                             </Button>
//                           </DialogClose>
//                         </DialogFooter>
//                       </DialogContent>
//                     </Dialog>
//                   </FieldLabel>
//                 </FieldContent>
//               </Field>
//             </FieldGroup>
//           </div>

//           {/* Кнопка */}
//           <button
//             type="submit"
//             disabled={isSubmitting || showSpinner || !termsValue}
//             className="
//               relative flex items-center justify-center
//               bg-[#6fa773] hover:bg-[#5e9463]
//               disabled:opacity-90 disabled:cursor-not-allowed
//               text-white py-4 rounded-full transition
//               text-base sm:text-lg
//             "
//           >
//             {/* Спиннер + «Отправляем...» */}
//             <div className="flex items-center justify-center gap-2">
//               <span
//                 className={`
//                   w-5 h-5 border-2 border-white border-b-transparent
//                   border-t-transparent rounded-full animate-spin
//                   transition-opacity duration-300
//                   ${showSpinner ? "opacity-100" : "opacity-0"}
//                 `}
//               />
//               <span
//                 className={`
//                   whitespace-nowrap transition-opacity duration-300
//                   ${showSpinner ? "opacity-100" : "opacity-0"}
//                 `}
//               >
//                 Отправляем...
//               </span>
//             </div>

//             {/* «Получить консультацию» */}
//             <span
//               className={`
//                 absolute whitespace-nowrap transition-opacity text-shadow-xs duration-300
//                 ${showSpinner || !termsValue ? "opacity-0" : "opacity-100"}
//               `}
//             >
//               Получить консультацию
//             </span>

//             {/* «Нужно принять условия» */}
//             <span
//               className={`
//                 absolute whitespace-nowrap transition-opacity text-shadow-sm duration-300
//                 ${!termsValue ? "opacity-100" : "opacity-0"}
//               `}
//             >
//               Нужно принять условия
//             </span>
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }


"use client";
import { useState } from "react";
import Image from "next/image";
import { useForm, useWatch, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v3"; // важно v3
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
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

// ─── Zod schema ────────────────────────────────────────────────────────────────
const schema = z.object({
  name: z
    .string()
    .min(2, "Имя должно быть минимум 2 символа")
    .max(50, "Имя слишком длинное")
    .regex(/^[a-zA-Zа-яА-ЯёЁ\s]+$/, "Имя может содержать только буквы"),
  phone: z
    .string()
    .min(7, "Введите корректный номер телефона")
    .regex(/^[\d\s\+\-\(\)]+$/, "Только цифры и спецсимволы"),
  email: z.string().email("Введите корректный email"),
  message: z
    .string()
    .min(10, "Опишите задачу подробнее (минимум 10 символов)")
    .max(1000, "Сообщение слишком длинное"),
  terms: z.boolean().refine((val) => val === true, {
    message: "Необходимо принять условия обработки персональных данных",
  }),
});

type FormValues = z.infer<typeof schema>;

type SendMailError = {
  message?: string;
};

//─── Route ─────────────────────────────────────────────────────────────────
async function sendMail(data: FormValues) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = (await res.json().catch(() => ({}))) as SendMailError;
    throw new Error(err.message || "Ошибка отправки");
  }
  return (await res.json()) as { success: boolean };
}

// ─── Component ─────────────────────────────────────────────────────────────────
export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    // watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      terms: false,
    },
  });
  // const termsValue = watch("terms");
  const termsValue = useWatch({ control, name: "terms" }) ?? false;
  const [showSpinner, setShowSpinner] = useState(false);
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setShowSpinner(true);
    try {
      await sendMail(data);
      toast.success("Заявка отправлена!", {
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      reset();
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Please try again later or contact us directly.";
      toast.error("Не удалось отправить", {
        description: message,
      });
    } finally {
      // держим спиннер и текст ещё 1.5 секунды после ответа сервера
      setTimeout(() => setShowSpinner(false), 300);
    }
  };

  const inputBase =
    "w-full bg-gray-200 rounded-xl px-4 py-3 transition outline-none focus:inset-ring-2 focus:inset-ring-[#5e9463] placeholder:text-gray-500 text-gray-800";
  // const errorText = "text-red-300 text-xs mt-1 ml-1";#6fa773
  const errorText =
    "text-red-300 text-[0.7rem] md:text-[0.5rem] ml-2  h-1.5 block";

  return (
    <section
      id="form"
      className="
        bg-[#2f5d3a] mt-14
        py-10 px-4
        md:p-10 
        xl:p-20
        flex justify-center
      "
    >
      <div className="
          w-full
          flex flex-col gap-5
          md:flex-row md:justify-between md:items-start
          lg:max-w-5xl
        ">
        {/* ── LEFT ─────────────────────────────────────────────────────────── */}
        <div className="w-full text-white">
          <h1 className="relative text-4xl md:text-3xl  text-center md:text-left lg:mt-5 lg:text-5xl lg:bottom-6 font-bold mb-5">
            Технологичные решения <br />
            для современного <br />
            молочного хозяйства
          </h1>

          <p className="relative text-wrap text-sm text-center md:text-left font-light  lg:text-xl/7 lg:bottom-6 text-white/80 leading-5 mb-5">
            Совмещаем передовые агротехнологии и фермерский опыт, чтобы повысить
            эффективность, качество продукции и устойчивость бизнеса.
          </p>

          {/* Соцсети */}
          <div className="flex md:mt-10 md:justify-start justify-center items-center gap-9">
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
        </div>

        {/* ── RIGHT — FORM ──────────────────────────────────────────────────── */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="w-full md:max-w-sm flex flex-col gap-3"
        >
          {/* Имя + Телефон */}
          <div className="flex flex-col gap-3 sm:flex-row md:gap-4">
            <div className="w-full">
              <input
                type="text"
                placeholder="Имя"
                {...register("name")}
                className={inputBase}
              />
              <p className={errorText}>{errors.name?.message ?? ""}</p>
            </div>
            <div className="w-full">
              <input
                type="tel"
                placeholder="Номер тел."
                {...register("phone")}
                className={inputBase}
              />
              <p className={errorText}>{errors.phone?.message ?? ""}</p>
            </div>
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Электронная почта"
              {...register("email")}
              className={inputBase}
            />

            <p className={errorText}>{errors.email?.message ?? ""}</p>
          </div>

          {/* Сообщение */}
          <div>
            <textarea
              placeholder="Опишите задачу"
              rows={4}
              {...register("message")}
              className={`${inputBase} resize-none `}
            />
            <p className={`${errorText} -mt-1.5 `}>
              {errors.message?.message ?? " "}
            </p>
          </div>

          {/* ── Checkbox ─────────────────────────────────────────────────────── */}
          <div className="ring-1 overflow-hidden  flex justify-center items-center mt-1 mb-2 ring-white/40 rounded-xl p-3">
            <FieldGroup>
              <Field orientation="horizontal">
                {/* <Checkbox
                  id="terms-checkbox"
                  name="terms"
                  checked={termsValue}
                  onCheckedChange={(checked) =>
                    setValue("terms", checked === true)
                  }
                  className="border-white/60 data-[state=checked]:bg-[#6fa773] data-[state=checked]:border-[#6fa773]"
                /> */}
                <Checkbox
                  id="terms-checkbox"
                  name="terms"
                  checked={termsValue}
                  onCheckedChange={(checked) =>
                    setValue("terms", checked === true, {
                      shouldValidate: true, // ← вот это удалите
                    })
                  }
                  className="border-white/60 size-6 data-[state=checked]:bg-[#6fa773] data-[state=checked]:border-[#6fa773]"
                />
                <FieldContent>
                  <FieldLabel
                    htmlFor="terms-checkbox"
                    className="text-white/80 font-extralight text-[9px] text-shadow-sm cursor-pointer"
                  >
                    Принимаю условия обработки персональных данных.{" "}
                    {/* <a
                      href="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2  font-extralight text-[0.6rem] text-[#a8d5ac] hover:text-white transition-colors"
                    >
                      Политика конфиденциальности
                    </a> */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="link"
                          className="underline text-wrap underline-offset-2 h-5  hover:shadow-none font-extralight text-[9px] text-shadow-sm text-[#a8d5ac] hover:text-white transition-colors"
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
                                Политика в отношении обработки персональных
                                данных
                              </h2>
                            </header>

                            <section>
                              <h3 className="font-semibold text-gray-900 mb-2">
                                1. Общие положения
                              </h3>
                              <p>
                                Настоящая политика составлена в соответствии с
                                требованиями Федерального закона от 27.07.2006.
                                №152-ФЗ «О персональных данных» и определяет
                                порядок обработки и меры по обеспечению
                                безопасности, предпринимаемые
                                <strong>
                                  {" "}
                                  Меняйловым Игорем Игоревичем
                                </strong>{" "}
                                (далее — Оператор).
                              </p>
                              <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>
                                  Оператор ставит своей целью соблюдение прав и
                                  свобод человека при обработке его персональных
                                  данных.
                                </li>
                                <li>
                                  Политика применяется ко всей информации,
                                  которую Оператор может получить о посетителях
                                  веб-сайта{" "}
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
                                <strong>Персональные данные</strong> — любая
                                информация, относящаяся к определенному
                                Пользователю веб-сайта.
                                <strong>Обработка</strong> — сбор, запись,
                                накопление, хранение, передача и удаление
                                данных.
                              </p>
                            </section>

                            <section>
                              <h3 className="font-semibold text-gray-900 mb-2">
                                3. Обрабатываемые данные
                              </h3>
                              <p>
                                Через форму обратной связи на сайте могут
                                собираться:
                              </p>
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
                                Цель обработки — уточнение деталей запроса и
                                предоставление консультаций. Передача данных
                                осуществляется через{" "}
                                <strong>
                                  протокол SMTP с шифрованием SSL/TLS
                                </strong>{" "}
                                (сервис Яндекс.Почта). Данные никогда не будут
                                переданы третьим лицам без законных оснований.
                              </p>
                            </section>

                            <section>
                              <h3 className="font-semibold text-gray-900 mb-2">
                                5. Срок обработки и отзыв
                              </h3>
                              <p>
                                Срок обработки данных неограничен. Вы можете в
                                любой момент отозвать свое согласие, направив
                                письмо на электронную почту:{" "}
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
                  </FieldLabel>
                </FieldContent>
              </Field>
            </FieldGroup>
          </div>

          {/* <p className={`${errorText} ml-2 -translate-y-3.5`}>
            {errors.terms?.message ?? ""}
          </p> */}

          <button
            type="submit"
            disabled={isSubmitting || showSpinner || !termsValue}
            className=" group flex items-center justify-center bg-[#6fa773] hover:bg-[#5e9463] disabled:opacity-90 disabled:cursor-not-allowed text-white py-4 rounded-full text-base sm:text-lg transition"
          >
            <div className="flex items-center justify-center gap-2 ">
              {/* Спиннер */}
              <span
                className={`w-5 h-5 border-2  border-white border-b-transparent border-t-transparent rounded-full animate-spin transition-opacity duration-300 ${
                  showSpinner ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Отправляем */}
              <span
                className={`whitespace-nowrap transition-opacity duration-300 ${
                  showSpinner ? "opacity-100" : "opacity-0"
                }`}
              >
                Отправляем...
              </span>
            </div>
            {/* Получить консультацию */}
            <span
              className={`absolute whitespace-nowrap transition-opacity text-shadow-xs duration-300 ${
                showSpinner || !termsValue ? "opacity-0" : "opacity-100"
              }`}
            >
              Получить консультацию
            </span>
            {/* Нужно принять условия */}
            <span
              className={`absolute whitespace-nowrap transition-opacity text-shadow-sm duration-300 ${
                !termsValue ? "opacity-100" : "opacity-0"
              }`}
            >
              Нужно принять условия
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
