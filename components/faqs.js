"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { PageContainer } from "./shared";

export const FAQS = ({ items }) => (
  <PageContainer>
    <Accordion.Root className="flex flex-col gap-4" type="multiple" collapsible>
      {items.map((o) => (
        <Accordion.Item key={o.id} value={o.id}>
          <Accordion.Header>
            <Accordion.Trigger className="w-full flex flex-row gap-4 items-center h-16 bg-white px-10 border data-[state=closed]:rounded-3xl data-[state=open]:rounded-t-3xl [&[data-state=open]>svg:first-child]:rotate-45 [&[data-state=open]>svg:last-child]:rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 opacity-50 transition-transform duration-450"
              >
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
              </svg>
              <span className="flex-grow text-left font-medium">{o.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 opacity-50 transition-transform duration-450"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="[&[data-state=open]>span]:rounded-b-3xl [&[data-state=closed]>span]:rounded-none">
            <span className="flex flex-row bg-white px-10 py-4 border text-black/75">{o.answer}</span>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  </PageContainer>
);
