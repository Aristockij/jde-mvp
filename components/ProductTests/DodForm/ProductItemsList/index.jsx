"use client";
import ProductItem from "@/components/ProductTests/DodForm/ProductItem";
import { useProductStore } from "@/store/productStore";

const Index = ({ step, nextStep, backStep }) => {
  const storeProducts = useProductStore((state) => state.products);
  const storeProductsList = useProductStore((state) => state.productList);
  const storeProductsQuestions = useProductStore(
    (state) => state.productsQuestions
  );

  const scaleItems = storeProductsQuestions.paramsVal.filter(
    (item) => item.type === "scale"
  );
  const textItems = storeProductsQuestions.paramsVal.filter(
    (item) => item.type === "text"
  );
  const checkboxItems = storeProductsQuestions.paramsVal.filter(
    (item) => item.type === "checkboxes"
  );

  return (
    <>
      {storeProductsList &&
        storeProductsList.map(
          (el, index) =>
            step === index + 1 && (
              <ProductItem
                backStep={backStep}
                nextStep={nextStep}
                step={step}
                key={index}
                title={el.value}
                scaleItems={scaleItems}
                textItems={textItems}
                checkboxItems={checkboxItems}
              />
            )
        )}
    </>
  );
};
export default Index;
