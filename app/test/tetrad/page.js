"use client";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("@/components/ProductTests/DynamicTetrad"),
  { ssr: false }
);

const page = () => {
  return <DynamicComponentWithNoSSR />;
};
export default page;
