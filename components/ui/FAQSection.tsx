import * as motion from "motion/react-client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Card, CardContent } from "@/components/ui/card";

const faqItems = [
  {
    question: "Какой премикс компании ТАГРИС можно использовать для перепелов?",
    answer:
      "Для перепелов подойдет наш корм «Для птиц». Многие заводчики также дают животным премикс для кур — он содержит большинство необходимых компонентов, но рекомендуется еще добавлять рыбу, мясокостную муку и ракушку.",
  },
  {
    question:
      "Каковы оптимальные условия хранения для продукции компании ТАГРИС?",
    answer:
      "Условия хранения зависят от конкретного типа продукции. Например, обезжиренное молоко хранится 8 месяцев при температуре 0–10°С и влажности не более 85%, а сухое молоко — до трёх лет при тех же условиях. Хранение премиксов и комбикормов осуществляется в соответствии с ГОСТ 23462-95. Подробнее можно уточнить у нашего менеджера.",
  },
  {
    question:
      "В чем принципиальное отличие продукции ТАГРИС от аналогов на рынке?",
    answer:
      "Мы используем современное оборудование и постоянно внедряем новые достижения науки и техники. Высокая производительность и минимальные потери сырья позволяют снизить себестоимость — поэтому наша продукция одна из самых доступных на рынке при высоком качестве, подтверждённом сертификатами соответствия ГОСТ.",
  },
  {
    question:
      "Есть ли разница в стоимости сервисного обслуживания по сравнению с импортным?",
    answer:
      "Да, разница есть. За счёт низких транспортных расходов, более доступной рабочей силы и других экономических факторов обслуживание в нашем центре обходится дешевле. При этом мы всегда выполняем работу максимально качественно.",
  },
  {
    question: "Чем оборудование ТАГРИС отличается от импортного?",
    answer:
      "Наше оборудование отличается лишь географическим расположением завода. В остальном мы не уступаем импортным производителям: используются современные производственные агрегаты, ввезённые из-за рубежа, внедряются новые технологии, а к работе допускаются только опытные специалисты с профильным образованием.",
  },
  {
    question:
      "Обеспечивают ли доильные установки ТАГРИС получение молока высшего сорта?",
    answer:
      "С помощью наших доильных установок можно создать условия для получения молока высшего сорта. В устройствах применены качественные механические элементы и реализована технология промывки вымени и сосков в соответствии со стандартами. При этом качество молока также зависит от рациона коровы и других факторов.",
  },
  {
    question: "Какие гарантии качества предоставляет компания ТАГРИС?",
    answer:
      "Наша продукция соответствует ГОСТ. Мы гарантируем, что всё представленное оборудование отвечает характеристикам, заявленным в техпаспорте изделий. Условия гарантийного ремонта и обслуживания различаются для разных типов оборудования — наш менеджер готов рассказать подробнее по телефону или электронной почте.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
      staggerChildren: 0.15
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

export default function FAQSection() {
  return (
    <section className="w-full bg-amber-400/0 p-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-5"
        >
          <h2 className="text-4xl md:text-4xl uppercase font-bold ">
            Частые вопросы
          </h2>
           <p className="text-gray-800 text-lg py-1 font-normal leading-6 md:leading-8 md:text-2xl text-center max-w-5xl mx-auto">
            Собрали ответы на самые частые вопросы о нашей продукции, оборудовании и условиях работы.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3}}
          
        >
          <Card className="rounded-4xl border bg-white border-black/10 shadow-md">
           
            {/* <div className="w-80 mx-auto border-t mb-5 border-gray-600"></div> */}
            <CardContent className="p-3">
              <Accordion type="single" collapsible className="w-full">
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  {faqItems.map((faq, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      // viewport={{ once: false, amount: 0.9 }}
                      transition={{ duration: 0.3}}
                      // className="bg-accent"
                      // whileHover={{ y: -3, transition: { duration: 0 } }}
                    >
                      <AccordionItem
                        value={`item-${index}`}
                        className="border border-black/10 shadow-md rounded-2xl px-4"
                        
                      >
                        <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline py-5">
                          {faq.question}
                        </AccordionTrigger>

                        <AccordionContent className="text-muted-foreground pb-5 text-sm md:text-base leading-6">
                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          >
                            {faq.answer}
                          </motion.div>
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </motion.div>
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"

// const items = [
//   {
//     value: "plans",
//     trigger: "What subscription plans do you offer?",
//     content:
//       "We offer three subscription tiers: Starter ($9/month), Professional ($29/month), and Enterprise ($99/month). Each plan includes increasing storage limits, API access, priority support, and team collaboration features.",
//   },
//   {
//     value: "billing",
//     trigger: "How does billing work?",
//     content:
//       "Billing occurs automatically at the start of each billing cycle. We accept all major credit cards, PayPal, and ACH transfers for enterprise customers. You'll receive an invoice via email after each payment.",
//   },
//   {
//     value: "cancel",
//     trigger: "How do I cancel my subscription?",
//     content:
//       "You can cancel your subscription anytime from your account settings. There are no cancellation fees or penalties. Your access will continue until the end of your current billing period.",
//   },
// ]

// export default function FAQSection() {
//   return (
//     <Card className="w-full max-w-sm">
//       <CardHeader>
//         <CardTitle>Subscription & Billing</CardTitle>
//         <CardDescription>
//           Common questions about your account, plans, payments and
//           cancellations.
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <Accordion type="single" collapsible defaultValue="plans">
//           {items.map((item) => (
//             <AccordionItem key={item.value} value={item.value}>
//               <AccordionTrigger>{item.trigger}</AccordionTrigger>
//               <AccordionContent>{item.content}</AccordionContent>
//             </AccordionItem>
//           ))}
//         </Accordion>
//       </CardContent>
//     </Card>
//   )
// }
