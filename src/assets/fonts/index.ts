import localFont from "next/font/local";

// Font files can be colocated inside of `app`
export const RFDewiExtended = localFont({
  src: [
    {
      path: "./files/RFDewiExtended-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./files/RFDewiExtended-Regular.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "./files/RFDewiExtended-Semibold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./files/RFDewiExtended-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./files/RFDewiExtended-Ultra.woff",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
});
