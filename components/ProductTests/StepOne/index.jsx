import Image from "next/image";
import s from "../index.module.scss";
import BgPaper from "@/components/BgPaper";

const index = ({ nextStep, text }) => {
  return (
    <div className={`${s.container} ${s.container_b}`}>
      <BgPaper />
      <div className={s.inner__container}>
        <div className={s.logo}>
          <Image src='/images/logo.png' width={113} height={95} alt={"logo"} />
        </div>
        <div className={s.description}>
          <h1>Добро пожаловать!</h1>
          <p>{text}</p>
          <button className='btn__fill btn__fill__brown' onClick={nextStep}>
            продолжить
          </button>
        </div>
      </div>
    </div>
  );
};
export default index;
