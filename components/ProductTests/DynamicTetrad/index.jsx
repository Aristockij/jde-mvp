"use client";

import TetradForm from "@/components/ProductTests/TetradForm";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const index = ({ params = {} }) => {
  const searchParams = useSearchParams();
  const { id } = params;

  useEffect(() => {
    if (!id) {
      window.history.pushState(null, "", "");
    } else if (!searchParams.has("id")) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("id", id);
      window.history.pushState(null, "", `?${params.toString()}`);
    }
  }, [id, searchParams]);

  return <TetradForm />;
};
export default index;
