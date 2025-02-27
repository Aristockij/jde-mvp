"use client";
import s from "../../index.module.scss";
import Image from "next/image";
import ScaleForm from "../ScaleForm";
import InputForm from "../InputForm";
import CheckBoxForm from "../CheckboxForm";
import { useState, useEffect } from "react";
import { useProductStore } from "@/store/productStore";
import BgPaper from "@/components/BgPaper";

const index = ({
  nextStep,
  backStep,
  step,
  title,
  scaleItems,
  textItems,
  checkboxItems,
}) => {
  const submitForm = (formData) => {
    nextStep();
  };

  const storeProductsList = useProductStore((state) => state.productList);

  const [valOfArr, setValOfArr] = useState("");
  useEffect(() => {
    if (title) {
      const numbersArray = title.split(",").map((num) => num.trim());

      const randomIndex = Math.floor(Math.random() * numbersArray.length);
      const randomNum = numbersArray[randomIndex];

      setValOfArr(randomNum);
    }
  }, []);

  return (
    <section className={`${s.container} ${s.container__sm}`}>
      <BgPaper />
      <div className={s.padding__40}>
        <div className={s.logo__sm}>
          <Image src='/images/logo.png' width={113} height={95} alt={"logo"} />
        </div>
        <div className={s.title}>
          <div className={s.title__main}>
            <h2>ОБРАЗЕЦ {valOfArr} </h2>
          </div>
          <div className={s.title__screen}>
            ЭКРАН {step}/{storeProductsList.length}
          </div>
        </div>
        <form action={submitForm}>
          {scaleItems && <ScaleForm info={scaleItems} />}
          {checkboxItems && <CheckBoxForm info={checkboxItems} />}
          {textItems && <InputForm info={textItems} />}

          <div className={s.btns__wrap}>
            <button
              className='btn__fill btn__fill__back'
              type='button'
              onClick={backStep}
            >
              назад
            </button>

            <button className='btn__fill btn__fill__brown' type='submit'>
              продолжить
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default index;
