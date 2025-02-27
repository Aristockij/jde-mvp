import s from "./index.module.scss";

const FormInput = ({
  type = "text",
  setVal,
  val,
  placeholder,
  id,
  defaultVal,
  label,
}) => {
  return (
    <div className={s.form__content}>
      {label && <label htmlFor={id}>{label}</label>}

      <input
        name={id}
        type={type}
        id={id}
        onChange={(e) => setVal && setVal(e.target.value)}
        value={val}
        defaultValue={defaultVal}
        placeholder={placeholder && placeholder}
      />
    </div>
  );
};
export default FormInput;
