"use client";
import Script from "next/script";
import React, { useEffect } from "react";

const TallyPopup = () => {
  useEffect(() => {
    setTimeout(() => {
      window.TallyConfig = {
        formId: "wvrYp4",
        popup: {
          emoji: {
            text: "👋",
            animation: "wave",
          },
          open: {
            trigger: "time",
            ms: 1000,
          },
          autoClose: 0,
        },
      };
      window.Tally.openPopup("wvrYp4");
    }, 4000);
  }, []);
  return (
      <Script async src="https://tally.so/widgets/embed.js"></Script>
  );
};

export default TallyPopup;
