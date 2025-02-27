"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import DodForm from "@/components/ProductTests/DodForm";

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

  return <DodForm />;
};
export default index;
