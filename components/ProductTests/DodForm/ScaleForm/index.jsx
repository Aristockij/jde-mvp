import Image from "next/image";
import ScaleBtns from "@/components/ScaleBtns";
import s from "../../index.module.scss";

const index = ({ info }) => {
  const getActiveBtn = (el, index, title) => {
    console.log(el, index, title);
  };

  const getBtnInfo = () => {
    // nextStep();
  };

  return (
    <>
      {info.map((el, index) => (
        <div key={index} className={s.btns__item}>
          <ScaleBtns
            getActiveBtn={getActiveBtn}
            title={el.paramsName}
            subtitle={el?.subtitle}
          />
        </div>
      ))}
    </>
  );
};
export default index;
