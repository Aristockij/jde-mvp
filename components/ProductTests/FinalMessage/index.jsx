import Image from "next/image";
import s from "../index.module.scss";
import BgPaper from "@/components/BgPaper";

const FinalMessage = ({ text }) => {
  return (
    <div className={`${s.container} ${s.container_b}`}>
      <div className={s.inner__container}>
        <BgPaper />
        <div className={s.logo}>
          <Image src='/images/logo.png' width={113} height={95} alt={"logo"} />
        </div>
        <div className={s.description}>
          <h1>
            большое спасибо <br /> за ваши ответы!
          </h1>
          {text ? (
            <p>{text}</p>
          ) : (
            <p>
              Результаты будут отправлены <br /> автоматически
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default FinalMessage;
