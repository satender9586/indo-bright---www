import { robotoSlab } from "@/app/fonts";
import {
  Button,
  H1,
  HStack,
  PageContainer,
  Para,
  VStack,
} from "@/components/shared";
import clsx from "clsx";
import Image from "next/image";

export const HomeHero = () => (
  <PageContainer>
    <HStack className="px-10 gap-x-10 flex-col lg:flex-row items-center">
      <VStack className="py-16 md:py-32 w-full lg:w-1/2 items-start">
        <H1
          className={clsx(
            "text-3xl md:text-6xl leading-tight",
            robotoSlab.className
          )}
        >
          Powering Indian Dreams: Startups & MSME Solutions
        </H1>
        <br />
        <Para className="text-md text-black/50">
          Unlock your Indian startup&apos;s potential with our specialized
          incorporation services, designed to support MSMEs in establishing a
          strong foundation for business success.{" "}
        </Para>
        <br />
        <Button>Get Started</Button>
      </VStack>
      <Image
        alt="home hero"
        className="object-cover h-[30rem] w-full lg:w-1/2 rounded-3xl drop-shadow-xl"
        width={7807}
        height={5207}
        src="https://images.unsplash.com/photo-1581091877018-dac6a371d50f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=100"
      />
    </HStack>
  </PageContainer>
);
