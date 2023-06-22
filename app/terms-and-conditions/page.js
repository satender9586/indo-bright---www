import React from "react";
import { H1, H2, H3, Para, VStack } from "@/components/shared";
import {
  SECTION_ABOUT_PROPS,
  SECTION_HERO_PROPS,
  STATS,
} from "@/content/about";
import { Section } from "@/components/section";
import clsx from "clsx";
import { robotoSlab } from "../fonts";
import { FAQS } from "@/components/faqs";
import { FAQ_PROPS } from "@/content/home";

//
// ───────────────────────────────────────────────────── MAIN COMPONENT ───────
//

export default function About() {
  return (
    <VStack className="gap-20">
      <Section empty paper padding={0}>
        <div>
          <H1>Terms and Conditions</H1>
          <br />
          <ul className="list-disc list-outside pl-8">
            <li>
              These Terms & Conditions ("Agreement") govern the use of
              Indobright services ("Services") provided by [Company Name]
              ("Indobright" or "We" or "Us") to the client ("Client" or "You" or
              "Your"). By engaging our Services, you acknowledge that you have
              read, understood, and agreed to be bound by these Terms &
              Conditions.
            </li>
          </ul>
          <br />
          <H2>Scope of Services:</H2>
          <br />
          <ul className="list-disc list-outside pl-8">
            <li>
              The Indobright offers assistance and guidance in the process of
              incorporating legal entities, such as companies, partnerships, or
              other forms of business entities, subject to applicable laws and
              regulations.
            </li>
            <li>
              The Services provided may include, but are not limited to, advice,
              document preparation, filing with relevant authorities, and
              related support services.{" "}
            </li>
            <li>
              The Indobright will make reasonable efforts to provide accurate
              and up-to-date information, but it does not guarantee the
              accuracy, completeness, or timeliness of any information or
              documents provided.
            </li>
          </ul>
          <br />
          <H2>Client Responsibilities:</H2>
          <br />
          <ul className="list-disc list-outside pl-8">
            <li>
              The Client is responsible for providing accurate and complete
              information necessary for the incorporation process, including but
              not limited to company name, shareholders' details, directors'
              details, registered address, and any other relevant information
              requested by the Indobright.
            </li>
            <li>
              The Client is responsible for complying with all applicable laws,
              regulations, and requirements for the incorporation of the desired
              legal entity. The Indobright does not provide legal or tax advice
              and recommends consulting with appropriate professionals for
              legal, tax, and accounting matters.{" "}
            </li>
            <li>
              The Client acknowledges that the decision to incorporate a legal
              entity is based on their own evaluation and understanding of the
              legal and business implications. The Indobright shall not be
              liable for any adverse consequences arising from the incorporation
              or subsequent operation of the legal entity.
            </li>
          </ul>
          <br />
          <H2>Fees and Payment:</H2>
          <br />
          <ul className="list-disc list-outside pl-8">
            <li>
              The Client agrees to pay the fees specified by the Indobright for
              the Services provided. The applicable fees and payment terms will
              be communicated to the Client in writing or through the
              Indobright's website.
            </li>
            <li>
              All fees are non-refundable, except as expressly stated otherwise.
              In case of any refundable fees, the refund policy shall be as
              specified by the Indobright.
            </li>
            <li>
              The Indobright reserves the right to modify the fees at any time.
              Any fee changes will be communicated to the Client in advance and
              will apply to future engagements.{" "}
            </li>
          </ul>
          <br />
          <H2>Confidentiality:</H2>
          <br />
          <ul className="list-disc list-outside pl-8">
            <li>
              The Indobright will maintain the confidentiality of the Client's
              information and documents, except where required by law or as
              necessary to provide the Services. However, the Indobright cannot
              guarantee the absolute security of information transmitted over
              the internet or stored electronically.
            </li>
            <li>
              The Client agrees to keep confidential any proprietary or
              sensitive information disclosed by the Indobright during the
              course of the engagement.
            </li>
          </ul>
          <br />
          <H2>Intellectual Property:</H2>
          <br />
          <ul className="list-disc list-outside pl-8">
            <li>
              The Client acknowledges that any materials, documents, or
              intellectual property provided by the Indobright in the course of
              providing the Services remain the property of the Indobright or
              its licensors, where applicable.
            </li>
            <li>
              The Client may use the materials and documents provided by the
              Indobright solely for the purpose of incorporating the legal
              entity and related activities. The Client shall not reproduce,
              distribute, modify, or create derivative works from the materials
              without prior written consent from the Indobright.
            </li>
          </ul>
          <br />
          <H2>Limitation of Liability:</H2>
          <br />
          <ul className="list-disc list-outside pl-8">
            <li>
              The Indobright shall not be liable for any indirect, incidental,
              consequential, or special damages arising out of or in connection
              with the Services, including but not limited to loss of profits,
              business interruption, or loss of data.
            </li>
            <li>
              The total liability of the Indobright, whether in contract, tort,
              or otherwise, shall not exceed the total fees paid by the Client
              for the Services renderedg
            </li>
          </ul>
        </div>
      </Section>
      <FAQS {...FAQ_PROPS} />
    </VStack>
  );
}
