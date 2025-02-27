"use client";
import StepOne from "../StepOne";
import DragNDropForm from "./DragNDropForm";
import FinalMessage from "../FinalMessage";
import { useProductStore } from "../../../store/productStore";

import { useState } from "react";

const index = () => {
  const storeProducts = useProductStore((state) => state.products);
  const storeProductsList = useProductStore((state) => state.productList);
  const storeProductsQuestions = useProductStore(
    (state) => state.productsQuestions
  );

  // console.log(storeProducts);
  // console.log(storeProductsList);
  // console.log(storeProductsQuestions);

  const [step, setStep] = useState(0);
  const nextStep = () => {
    setStep((prev) => prev + 1);
  };
  const backStep = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <section className='bg__gray'>
      {step === 0 && (
        <StepOne
          nextStep={nextStep}
          text={storeProductsQuestions.description}
        />
      )}
      {step === 1 && (
        <DragNDropForm
          nextStep={nextStep}
          items={storeProductsList}
          group={storeProductsQuestions.groupVal}
        />
      )}
      {step === 2 && <FinalMessage text={storeProductsQuestions.finalText} />}
    </section>
  );
};
export default index;
