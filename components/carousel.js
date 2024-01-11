"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { TESTIMONIALS } from "@/content/home";
import Image from "next/image";
import { ZStack } from "@/components/shared";
import clsx from "clsx";
import { robotoSlab } from "@/app/fonts";

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true, }, [
    Autoplay({ playOnInit: true, delay: 1000, pauseOnHover: true }),
  ]);

  return (
    <ZStack
      list={[
        {
          zIndex: "z-10",
          view: (
            <div className="embla" ref={emblaRef}>
              <div className="embla__container flex flex-row">
                {TESTIMONIALS.map((item, idx) => (
                  <div
                    key={idx}
                    className="embla__slide bg-white p-4 rounded-xl min-w-96 mr-16 shadow-2xl"
                  >
                    <figure>
                      <div className="flex items-center gap-x-4">
                        <Image
                          width="256"
                          height="256"
                          alt={`avatar ${item.name}`}
                          src={`/assets/avatar_${idx + 1}.png`}
                          className="w-16 h-16 rounded-full"
                        />
                        <div>
                          <span className={clsx("block text-gray-800 font-semibold", robotoSlab.className,)}>
                            {item.name}
                          </span>
                          <span className="block text-gray-600 text-sm mt-0.5">
                            {item.companyName}
                          </span>
                        </div>
                      </div>
                      <blockquote>
                        <p className="mt-6 text-gray-700">{item.quote}</p>
                      </blockquote>
                    </figure>
                  </div>
                ))}
              </div>
            </div>
          ),
        },
      ]}
    />
  );
};
