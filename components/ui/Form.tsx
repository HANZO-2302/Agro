// "use client";

// import Image from "next/image";
// import { useState } from "react";

// export default function Form() {
//   const [result, setResult] = useState("");

//   const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);
//     formData.append("access_key", "d6ff89e4-bf9f-4bfd-afef-91557a782f35");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await response.json();
//     setResult(data.success ? "Заявка отправлена!" : "Ошибка отправки");
//   };

//   return (
//     <section
//       id="form"
//       className="bg-[#2f5d3a] flex mt-14 justify-center md:py-20 md:px-10 py-10 px-4"
//     >
//       <div className="max-w-5xl w-full flex flex-col lg:flex-row justify-between items-start gap-10">
//         {/* LEFT */}
//         <div className="max-w-full md:max-w-150 md:mt-5 text-white">
//           <h1 className="relative text-3xl md:text-left sm:text-4xl lg:text-5xl lg:bottom-6 font-medium mb-5">
//             Технологичные решения <br />
//             для современного <br />
//             молочного хозяйства
//           </h1>

//           <p className="relative text-sm font-light sm:text-lg lg:text-xl lg:bottom-6 text-white/80 leading-7 mb-9">
//             Совмещаем передовые агротехнологии и фермерский опыт, чтобы повысить
//             эффективность, качество продукции и устойчивость бизнеса.
//           </p>

//           <div className="flex md:mt-14 md:justify-start justify-center items-center gap-9">
//             <a href="https://t.me/your_username" target="_blank">
//               <Image
//                 src="/Telegramm.svg"
//                 alt="Telegram"
//                 width={50}
//                 height={50}
//                 className="w-10 h-10 object-contain hover:scale-110 hover:-translate-y-2 transition-all duration-200"
//               />
//             </a>

//             <a href="https://wa.me/your_number" target="_blank">
//               <Image
//                 src="/Whatsapp.svg"
//                 alt="Whatsapp"
//                 width={50}
//                 height={50}
//                 className="w-10 h-10 object-contain hover:scale-110 hover:-translate-y-2 transition-all duration-200"
//               />
//             </a>

//             <a href="https://max.ru/u/ВАШ_ХЕШИ" target="_blank">
//               <Image
//                 src="/Max.svg"
//                 alt="Max"
//                 width={50}
//                 height={50}
//                 className="w-10 h-10 object-contain hover:scale-110 hover:-translate-y-2 transition-all duration-200"
//               />
//             </a>
//           </div>
//         </div>

//         {/* RIGHT FORM */}
//         <form
//           onSubmit={onSubmit}
//           className="w-full lg:w-105 flex flex-col gap-4"
//         >
//           <div className="flex flex-col sm:flex-row gap-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Имя"
//               required
//               className="w-full bg-gray-200 rounded-xl px-4 py-4 outline-none"
//             />
//             <input
//               type="text"
//               name="phone"
//               placeholder="Номер тел."
//               required
//               className="w-full bg-gray-200 rounded-xl px-4 py-4 outline-none"
//             />
//           </div>

//           <input
//             type="email"
//             name="email"
//             placeholder="Электронная почта"
//             required
//             className="w-full bg-gray-200 rounded-xl px-4 py-4 outline-none"
//           />

//           <textarea
//             name="message"
//             placeholder="Опишите задачу"
//             rows={4}
//             required
//             className="w-full bg-gray-200 rounded-xl px-4 py-4 outline-none resize-none"
//           />

//           <button
//             type="submit"
//             className="mt-2 bg-[#6fa773] hover:bg-[#5e9463] text-white py-4 rounded-full text-base sm:text-lg transition"
//           >
//             Получить консультацию
//           </button>

//           {result && <p className="text-white/80 text-sm mt-2">{result}</p>}
//         </form>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { useForm, useWatch, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v3";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

// ─── Zod schema ────────────────────────────────────────────────────────────────
const schema = z.object({
  name: z
    .string()
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(50, "Имя слишком длинное"),
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

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
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
      toast.error("Failed to send", {
        description: message,
      });
    }
  };

  const inputBase =
    "w-full bg-gray-200 rounded-xl px-4 py-4 outline-none transition focus:ring-2 focus:ring-[#6fa773] placeholder:text-gray-500 text-gray-800";
  const errorText = "text-red-300 text-xs mt-1 ml-1";

  return (
    <section
      id="form"
      className="bg-[#2f5d3a] flex mt-14 justify-center md:py-20 md:px-10 py-10 px-4"
    >
      <div className="max-w-5xl w-full flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* ── LEFT ─────────────────────────────────────────────────────────── */}
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

          {/* Соцсети */}
          <div className="flex md:mt-14 md:justify-start justify-center items-center gap-9">
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
          className="w-full lg:w-105 flex flex-col gap-4"
        >
          {/* Имя + Телефон */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <input
                type="text"
                placeholder="Имя"
                {...register("name")}
                className={inputBase}
              />
              {errors.name && (
                <p className={errorText}>{errors.name.message}</p>
              )}
            </div>
            <div className="w-full">
              <input
                type="tel"
                placeholder="Номер тел."
                {...register("phone")}
                className={inputBase}
              />
              {errors.phone && (
                <p className={errorText}>{errors.phone.message}</p>
              )}
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
            {errors.email && (
              <p className={errorText}>{errors.email.message}</p>
            )}
          </div>

          {/* Сообщение */}
          <div>
            <textarea
              placeholder="Опишите задачу"
              rows={4}
              {...register("message")}
              className={`${inputBase} resize-none`}
            />
            {errors.message && (
              <p className={errorText}>{errors.message.message}</p>
            )}
          </div>

          {/* ── Чекбокс ─────────────────────────────────────────────────────── */}
          <div>
            <FieldGroup>
              <Field orientation="horizontal">
                <Checkbox
                  id="terms-checkbox"
                  name="terms"
                  checked={termsValue}
                  onCheckedChange={(checked) =>
                    setValue("terms", checked === true, {
                      shouldValidate: true,
                    })
                  }
                  className="border-white/60 data-[state=checked]:bg-[#6fa773] data-[state=checked]:border-[#6fa773]"
                />
                <FieldContent>
                  <FieldLabel
                    htmlFor="terms-checkbox"
                    className="text-white/90 text-sm font-normal cursor-pointer"
                  >
                    Принимаю условия обработки персональных данных,{" "}
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 text-[#a8d5ac] hover:text-white transition-colors"
                    >
                      Политика конфиденциальности
                    </a>
                  </FieldLabel>
                </FieldContent>
              </Field>
            </FieldGroup>
            {errors.terms && (
              <p className={errorText}>{errors.terms.message}</p>
            )}
          </div>

          {/* Кнопка */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 bg-[#6fa773] hover:bg-[#5e9463] disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-full text-base sm:text-lg transition"
          >
            {isSubmitting ? "Отправляем..." : "Получить консультацию"}
          </button>
        </form>
      </div>
    </section>
  );
}
