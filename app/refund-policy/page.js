/* eslint-disable react/no-unescaped-entities */
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
          <H1>Refund Policy</H1>
          <br />
          <H2>Refund Eligibility:</H2>
          <br />
          <ul className="list-disc list-outside pl-8">
            <li>
              The refund policy applies to fees paid for services provided by
              the Indobright ("Services") under specific circumstances outlined
              below.
            </li>
            <li>
              {" "}
              Refunds may be considered if the Indobright is unable to complete
              the agreed-upon work due to reasons within its control.
            </li>
          </ul>
          <br />
          <H2>Refund Process::</H2>
          <br />
          <ul className="list-disc list-outside pl-8">
            <li>
              In the event that the Indobright determines it is unable to
              fulfill the agreed-upon work, the Client may request a refund by
              contacting the Indobright's customer support within a reasonable
              timeframe.
            </li>
            <li>
              {" "}
              The Indobright will review the refund request and assess the
              eligibility for a refund based on the circumstances provided.
            </li>
            <li>
              If the refund request is approved, the Indobright will refund 50%
              of the fees paid by the Client for the specific service that
              cannot be completed.
            </li>
          </ul>
          <br />
          <H2>Non-Refundable Services:</H2>
          <br />
          <ul className="list-disc list-outside pl-8">
            <li>
              Certain services provided by the Indobright may be non-refundable.
              These services include, but are not limited to:
              <ul className="list-disc list-outside pl-8">
                <li>
                  Consultation fees or advisory services provided by the
                  Indobright.
                </li>
                <li>
                  Services already rendered or completed by the Indobright.
                </li>
                <li>
                  Fees paid for government or third-party charges, such as
                  filing fees, certifications, or licenses.
                </li>
              </ul>
            </li>
          </ul>

          <br />
          <H2>Refund Limitations:</H2>
          <br />
          <ul className="list-disc list-outside pl-8">
            <li>
              The refund amount will be limited to 50% of the fees paid by the
              Client for the specific service that cannot be completed. The
              remaining 50% will be retained by the Indobright to cover any
              costs incurred up to that point.
            </li>
            <li>
              The Indobright reserves the right to deduct any applicable
              transaction or processing fees from the refund amount.
            </li>
          </ul>

          <br />
          <H2>Refund Disbursement:</H2>
          <br />
          <ul className="list-disc list-outside pl-8">
            <li>
              {" "}
              Approved refunds will be processed within a reasonable timeframe,
              and the refund amount will be returned to the Client using the
              original payment method unless otherwise agreed upon by both
              parties.
            </li>
          </ul>

          <br />
          <H2>No Obligation for Third-Party Costs:</H2>
          <br />
          <ul className="list-disc list-outside pl-8">
            <li>
              The Indobright is not responsible for refunding any fees paid to
              third parties, such as government fees, taxes, or charges incurred
              by the Client during the engagement process. The refund policy
              only applies to the fees paid directly to the Indobright for its
              services.
            </li>
          </ul>

          <br />
          <H2>Amendment and Termination:</H2>
          <br />
          <ul className="list-disc list-outside pl-8">
            <li>
              The Indobright reserves the right to modify or terminate this
              refund policy at any time. Any changes or updates to the refund
              policy will be communicated to the Client in writing or through
              the Indobright's website.
            </li>
          </ul>

          <br />
          <H2>Contact Information:</H2>
          <br />
          <ul className="list-disc list-outside pl-8">
            <li>
              For any inquiries or refund requests, please contact the
              Indobright's customer support using the contact information
              provided on the Indobright's website or other official
              communication channels. Please note that this refund policy is a
              general guideline and can be tailored to meet the specific
              requirements and practices of the Indobright.
            </li>
          </ul>
        </div>
      </Section>

      <FAQS {...FAQ_PROPS} />
    </VStack>
  );
}
