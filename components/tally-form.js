"use client";

import { useEffect } from "react";

export const TallyForm = () => {
  useEffect(() => {
    window?.Tally?.loadEmbeds?.();
  }, []);
  
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script src="https://tally.so/widgets/embed.js" />
      <iframe
        className="-ml-2"
        data-tally-src="https://tally.so/embed/wvrYp4?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="292"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="Contact Us"
      />
    </>
  );
};
