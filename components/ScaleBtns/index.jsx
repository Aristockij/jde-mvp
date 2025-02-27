"use client";
import s from "./index.module.scss";
import { useState } from "react";

const ScaleBtns = ({ getActiveBtn, title, subtitle }) => {
  const [active, setActive] = useState(null);

  const setActiveBtn = (el, title, index) => {
    setActive(index);

    getActiveBtn(el, title, index);
  };

  const params = [
    { val: "-5", description: "Очень сильное" },
    { val: "-4", description: "Сильное" },
    { val: "-3", description: "Среднее" },
    { val: "-2", description: "Слабое" },
    { val: "-1", description: "Очень слабое" },
    { val: "0", description: "Нет отличия" },
    { val: "1", description: "Очень слабое" },
    { val: "2", description: "Слабое" },
    { val: "3", description: "Среднее" },
    { val: "4", description: "Сильное" },
    { val: "5", description: "Очень сильное" },
  ];

  return (
    <div>
      {title && (
        <div className={s.btns__title}>
          {title}
          {subtitle && <span>{subtitle}</span>}
        </div>
      )}
      <div className={s.btn__wrap}>
        {params.map((el, index) => (
          <button
            className={active === index ? s.active : s.inactive}
            type='button'
            key={index}
            onClick={() => getActiveBtn && setActiveBtn(el, title, index)}
          >
            <div className={s.btn__rect}>{el.val}</div>
            <div className={s.btn__description}>{el.description}</div>
          </button>
        ))}
      </div>
    </div>
  );
};
export default ScaleBtns;
