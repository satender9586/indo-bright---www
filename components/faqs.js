"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { PageContainer } from "./shared";
import { StructuredData } from "./structured-data";
import { IconChevronDown, IconPlus } from "@/content/svgs";

export const FAQS = ({ items }) => {
  const FAQ_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((o) => ({
      "@type": "Question",
      name: o.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: o.answer,
      },
    })),
  };

  return (
    <PageContainer>
      <StructuredData jsonLd={FAQ_JSON_LD} />
      <Accordion.Root
        className="flex flex-col gap-4 mx-4"
        type="single"
        collapsible
      >
        {items.map((o) => (
          <Accordion.Item key={o.id} value={o.id}>
            <Accordion.Header>
              <Accordion.Trigger className="w-full flex flex-row gap-4 items-center min-h-16 py-4 bg-white px-4 md:px-10 border data-[state=closed]:rounded-3xl data-[state=open]:rounded-t-3xl [&[data-state=open]>svg:first-child]:rotate-45 [&[data-state=open]>svg:last-child]:rotate-180">
                <IconPlus className="min-w-6 min-h-6 w-6 h-6 opacity-50 transition-transform duration-450" />
                <span className="w-full text-left font-medium">
                  {o.question}
                </span>
                <IconChevronDown className="min-w-6 min-h-6 w-6 h-6 opacity-50 transition-transform duration-450" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="[&[data-state=open]>span]:rounded-b-3xl [&[data-state=closed]>span]:rounded-none">
              <span className="flex flex-row bg-white px-4 md:px-10 py-4 border text-black/75">
                {o.answer}
              </span>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </PageContainer>
  );
};
