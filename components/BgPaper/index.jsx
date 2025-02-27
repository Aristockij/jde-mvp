import s from "./index.module.scss";

const index = () => {
  return (
    <div className={s.wrap}>
      <div className={s.top} />
      <div className={s.left} />
      <div className={s.right} />
      <div className={s.bottom} />
    </div>
  );
};
export default index;
