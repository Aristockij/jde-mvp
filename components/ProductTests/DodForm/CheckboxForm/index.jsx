import s from "../../index.module.scss";
import FormCheckbox from "@/components/FormCheckbox";

const index = ({ nextStep, backStep, info }) => {
  const getBtnInfo = (formItem) => {
    // nextStep();
  };

  console.log(info);

  return (
    <>
      {info.map((el, index) => (
        <FormCheckbox key={index} title={el.paramsName} />
      ))}
    </>
  );
};
export default index;
