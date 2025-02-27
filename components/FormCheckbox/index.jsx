import s from "./index.module.scss";

const index = ({ title, onChange }) => {
  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    if (onChange) {
      onChange(id, checked);
    }
  };

  return (
    <div>
      <div className={s.checkbox__wrap}>
        <label className={s.checkbox__item} htmlFor={title}>
          <input type='checkbox' id={title} onChange={handleCheckboxChange} />
          <span className={s.checkbox__custom} />
          {title}
        </label>
      </div>
    </div>
  );
};
export default index;
