"use client";
import { useState } from "react";
import s from "./index.module.scss";

const SelectedBtns = ({ activeTab }) => {
  const [active, setActive] = useState("1");

  return (
    <div className={s.btn__wrap}>
      <button
        onClick={() => {
          setActive("1");
          activeTab("1");
        }}
        className={active == "1" ? `${s.btn} ${s.active}` : s.btn}
      >
        DOD
      </button>
      <button
        onClick={() => {
          setActive("2");
          activeTab("2");
        }}
        className={active == "2" ? `${s.btn} ${s.active}` : s.btn}
      >
        Tetrad
      </button>
    </div>
  );
};
export default SelectedBtns;
