"use client";
import Image from "next/image";
import s from "../../index.module.scss";
import { useEffect, useState } from "react";

const index = ({ el, from, onDragStart, onMouseUp }) => {
  const [valOfArr, setValOfArr] = useState("");
  useEffect(() => {
    if (el) {
      const numbersArray = el.value.split(",").map((num) => num.trim());

      const randomIndex = Math.floor(Math.random() * numbersArray.length);
      const randomNum = numbersArray[randomIndex];

      setValOfArr(randomNum);
    }
  }, []);

  return (
    <div
      draggable={true}
      onDragStart={(e) => onDragStart(e, el, from)}
      className={`${s.drag__rect} ${el.color}`}
      onDragEnd={onMouseUp}
    >
      <Image src={"/icons/drag.svg"} width={40} height={40} alt={"drag"} />
      {valOfArr}
    </div>
  );
};
export default index;
