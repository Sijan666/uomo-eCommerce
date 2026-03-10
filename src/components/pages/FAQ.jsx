import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    title: "Orders",
    items: [
      {
        question: "Bring of had which their whose you're it own?",
        answer:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        question: "Over shall air can't subdue fly divide him?",
        answer:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        question: "Waters one you'll creeping?",
        answer:
          "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.lorem ipsum dolor sit amet.",
      },
    ],
  },
  {
    title: "Shipping",
    items: [
      {
        question: "Bring of had which their whose you're it own?",
        answer:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.lorem ipsum dolor sit amet.",
      },
      {
        question: "Over shall air can't subdue fly divide him?",
        answer:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      },
      {
        question: "Waters one you'll creeping?",
        answer:
          "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
      },
    ],
  },
  {
    title: "Payment",
    items: [
      {
        question: "Bring of had which their whose you're it own?",
        answer:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        question: "Over shall air can't subdue fly divide him?",
        answer:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
      },
      {
        question: "Waters one you'll creeping?",
        answer:
          "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.lorem100 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <section className="pt-16 pb-16 lg:pt-25 lg:pb-15 px-4 sm:px-6 lg:px-0">
      <div className="max-w-[930px] mx-auto">

        {/* Title */}
        <h2
          className="
          text-[26px] sm:text-[30px] lg:text-[35px]
          font-bold font-Jost text-head uppercase
          max-w-[573px]
          mb-10 lg:mb-15
          break-words
        "
        >
          Frequently Asked Questions
        </h2>

        {faqData.map((section, i) => (
          <div key={i} className="mb-10 lg:mb-12">

            {/* Section Title */}
            <h3
              className="
              text-[20px] sm:text-[22px] lg:text-[26px]
              font-medium font-Jost
              break-words
            "
            >
              {section.title}
            </h3>

            <Accordion type="single" collapsible className="w-full">
              {section.items.map((item, index) => (
                <AccordionItem key={index} value={`item-${i}-${index}`}>

                  <AccordionTrigger
                    className="
                    flex justify-between text-left
                    pt-6 lg:pt-8 pb-1
                    text-[14px] sm:text-[15px] lg:text-[16px]
                    font-medium font-Jost text-head
                    hover:no-underline
                    break-words
                  "
                  >
                    {item.question}
                  </AccordionTrigger>

                  <AccordionContent
                    className="
                    text-[13px] sm:text-[14px]
                    font-normal font-Jost text-head
                    leading-[26px] lg:leading-[30px]
                    break-words
                  "
                  >
                    {item.answer}
                  </AccordionContent>

                </AccordionItem>
              ))}
            </Accordion>

          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;