"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from "@/components/shared";

export const CalButton = ({ children = "Book a Call", ...props }) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
      });
    })();
  }, []);
  return (
    <Button data-cal-link="indobright/15min" {...props}>
      {children}
    </Button>
  );
};
