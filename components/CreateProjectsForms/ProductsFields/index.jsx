"use client";
import s from "../index.module.scss";
import FormInput from "@/components/FormInput";
import Select from "@/components/Select";
import { useState, useEffect } from "react";
import { useProductStore } from "@/store/productStore";

const ProductsFields = ({
  index,
  updateField,
  color,
  code = true,
  initialProduct,
}) => {
  const storeProducts = useProductStore((state) => state.products);

  const colorList = [
    { id: 1, title: "yellow" },
    { id: 2, title: "brown" },
    { id: 3, title: "green" },
    { id: 4, title: "purple" },
    { id: 5, title: "dark-green" },
    { id: 6, title: "pink" },
  ];
  const [statusValue, setStatusValue] = useState("yellow");
  const [initialDefaultVal, setInitialDefaultVal] = useState([]);

  const getRandomValue = (cods) => {
    if (cods <= 0) return 0;

    const min = Math.pow(10, cods - 1);
    const max = Math.pow(10, cods) - 1;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colorList.length);
    return color ? { title: color } : colorList[randomIndex];
  };

  const handleStatusChange = (el) => {
    setStatusValue(el.title);
    updateField(`product_color_${index}`, el.title);
  };

  useEffect(() => {
    const randomColor = getRandomColor();
    setStatusValue(randomColor.title);
    updateField(`product_color_${index}`, randomColor.title);

    const cods = storeProducts.codsLength;
    const codsCount = storeProducts.cods;

    if (code) {
      const generatedValues = Array.from({ length: codsCount }, () =>
        getRandomValue(cods).toString()
      );

      setInitialDefaultVal(generatedValues);
    } else {
      setInitialDefaultVal("");
    }
  }, []);

  return (
    <div className={s.products__fields}>
      <FormInput
        id={`product_${index}`}
        placeholder={"Введите название"}
        defaultVal={initialProduct}
      />
      <Select
        list={colorList}
        initialVal={statusValue}
        setVal={handleStatusChange}
        circle={true}
      />
      <FormInput
        id={`product_value_${index}`}
        defaultVal={initialDefaultVal}
        placeholder={"Значение"}
      />
    </div>
  );
};
export default ProductsFields;
