import Image from "next/image";
import s from "../../index.module.scss";

const index = ({ backStep, nextStep, info }) => {
  const getInfoInput = (info) => {
    // nextStep();
    console.log(info.get("number_1"));
  };

  return (
    <>
      {info.map((el, index) => (
        <div key={index}>
          {console.log(el)}
          <div className={s.input__title}>
            <p>{el.paramsName}</p>
          </div>
          <textarea
            type='text'
            className={s.input}
            id={"number_1"}
            placeholder='Ваш комментарий'
          />
        </div>
      ))}
    </>
  );
};
export default index;
