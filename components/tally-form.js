"use client";

import { useEffect } from "react";
import { ZStack } from "@/components/shared";

export const TallyForm = () => {
  useEffect(() => {
    window?.Tally?.loadEmbeds?.();
  }, []);

  return (
    <ZStack
      list={[
        {
          zIndex: "z-10",
          view: (
            <>
              <iframe
                className="-ml-2"
                data-tally-src="https://tally.so/embed/wvrYp4?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="264"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Contact Us"
              />
            </>
          ),
        },
        {
          zIndex: "z-20 pointer-events-none",
          view: (
            <div className="h-full w-full flex items-end justify-end">
              <div className="pointer-events-auto h-16 w-24 md:w-64 bg-secondary" />
            </div>
          ),
        },
      ]}
    />
  );
};
