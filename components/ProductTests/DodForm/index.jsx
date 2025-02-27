"use client";
import StepOne from "../StepOne";
import FinalMessage from "../FinalMessage";
import { useProductStore } from "../../../store/productStore";
import ProductItemsList from "./ProductItemsList";
import { useState } from "react";

const DodForm = () => {
  const storeProducts = useProductStore((state) => state.products);
  const storeProductsList = useProductStore((state) => state.productList);
  const storeProductsQuestions = useProductStore(
    (state) => state.productsQuestions
  );

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
      {storeProducts.activeTab !== undefined && (
        <ProductItemsList step={step} nextStep={nextStep} backStep={backStep} />
      )}

      {step === storeProductsList.length + 1 && (
        <FinalMessage
          nextStep={nextStep}
          text={storeProductsQuestions.finalText}
        />
      )}
    </section>
  );
};
export default DodForm;
