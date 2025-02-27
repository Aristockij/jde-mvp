"use client";

import { useProductStore } from "@/store/productStore";
import ProductsFields from "../ProductsFields";
import s from "../index.module.scss";
import { useState } from "react";

const FormProductList = () => {
  const storeProducts = useProductStore((state) => state.products);
  const updateProductList = useProductStore((state) => state.updateProductList);
  const storeStep = useProductStore((state) => state.updateStep);

  const [formState, setFormState] = useState({});

  const updateField = (fieldName, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  // const products = Array.from({
  //   length:
  //     storeProducts.products *
  //     (storeProducts.sessions > 0 ? storeProducts.sessions : 1),
  // }).map((_, index) => ({
  //   name: data.get(`product_${index}`),
  //   value: data.get(`product_value_${index}`),
  //   color: formState[`product_color_${index}`],
  // }));

  const onSubmitForm = (data) => {
    const finalProductsArr = [];

    const products = Array.from({
      length: storeProducts.products,
    }).map((_, index) => ({
      name: data.get(`product_${index + 1}`),
      value: data.get(`product_value_${index + 1}`),
      color: formState[`product_color_${index + 1}`],
    }));

    products.forEach((product) => {
      for (let i = 0; i < storeProducts.sessions; i++) {
        finalProductsArr.push({ ...product });
      }
    });

    updateProductList(finalProductsArr);
    console.log(finalProductsArr);
    storeStep(1);
  };

  return (
    <form action={onSubmitForm}>
      <h2 className={s.products__title}>Список продуктов</h2>

      <div className={s.products__header}>
        <div>название продукта</div>
        <div>цвет</div>
        <div>коды</div>
      </div>
      <ProductsFields
        index={0}
        color={"gray"}
        updateField={updateField}
        code={false}
        initialProduct='Эталонный продукт'
      />
      {storeProducts.products &&
        Array.from({
          length: storeProducts.products,
        }).map((_, index) => (
          <ProductsFields
            key={index + 1}
            index={index + 1}
            updateField={updateField}
          />
        ))}
      <button className='btn__fill btn__fill__brown' type='submit'>
        Сохранить и продолжить
      </button>
    </form>
  );
};
export default FormProductList;
