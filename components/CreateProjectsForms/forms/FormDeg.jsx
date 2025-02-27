"use client";

import { useEffect, useState } from "react";
import s from "../index.module.scss";
import FormInput from "@/components/FormInput";
import { useProductStore } from "@/store/productStore";

const FormDeg = () => {
  const [nameProject, setNameProject] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  const [products, setProducts] = useState("");
  const [tasters, setTasters] = useState("");
  const [cods, setCods] = useState("");

  const [sessions, setSessions] = useState("");
  const [productsRepeats, setProductsRepeats] = useState("");
  const [codsLength, setCodsLength] = useState("");

  const [activeTab, setActiveTab] = useState("tetrad");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const updateProduct = useProductStore((state) => state.updateProducts);
  // const storeProducts = useProductStore((state) => state.products);

  function nextStep(e) {
    e.preventDefault();

    const formData = {
      nameProject: nameProject,
      dateStart: dateStart,
      dateEnd: dateEnd,
      products: products,
      tasters: tasters,
      cods: cods,
      sessions: sessions,
      productsRepeats: productsRepeats,
      codsLength: codsLength,
      activeTab: activeTab,
    };

    updateProduct(formData);
  }

  const isFormComplete = () =>
    nameProject.length > 0 &&
    dateStart.length > 0 &&
    dateEnd.length > 0 &&
    products.length > 0 &&
    tasters.length > 0 &&
    cods.length > 0 &&
    sessions.length > 0 &&
    productsRepeats.length > 0 &&
    codsLength.length > 0;

  useEffect(() => {
    if (isFormComplete()) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
    console.log(isFormComplete());
  }, [
    nameProject,
    dateStart,
    dateEnd,
    products,
    tasters,
    cods,
    sessions,
    productsRepeats,
    codsLength,
  ]);

  return (
    <div>
      <form onSubmit={nextStep}>
        <div>
          <div className={s.form__top}>
            <div className={s.form__left}>
              <FormInput
                id='name-project'
                label={"Название проекта"}
                setVal={(v) => setNameProject(v)}
                val={nameProject}
                placeholder='Введите название'
              />

              <div className={s.form__date}>
                <FormInput
                  type='date'
                  id='date-start'
                  label={"Начало"}
                  setVal={(v) => setDateStart(v)}
                  val={dateStart}
                />
                <FormInput
                  type='date'
                  id='date-end'
                  label={"Конец"}
                  setVal={(v) => setDateEnd(v)}
                  val={dateEnd}
                />
              </div>
            </div>
            <div className={s.form__right}>
              <div>
                <span>Номер проекта: </span>
                <span>1009</span>
              </div>
              <div>
                <span>Автор: </span>
                <span>admin admin</span>
              </div>
            </div>
          </div>
        </div>

        <div className={s.design}>
          <h2 className={s.design__title}>Дизайн Дегустации</h2>
          <div className={s.design__tab__title}>Тип тестирования</div>
          <div className={s.design__tab}>
            <button
              type='button'
              onClick={() => setActiveTab("tetrad")}
              className={activeTab === "tetrad" ? s.active : ""}
            >
              Tetrad
            </button>
            <button
              type='button'
              onClick={() => setActiveTab("DOD")}
              className={activeTab === "DOD" ? s.active : ""}
            >
              Formal DOD
            </button>
          </div>

          <>
            <div className={s.design__fields}>
              <FormInput
                id='products'
                label={"Продукты"}
                setVal={(v) => setProducts(v.replace(/[^0-9]/g, ""))}
                val={products}
                placeholder={"1-20"}
              />
              <FormInput
                id='tasters'
                label={"Дегустаторы"}
                setVal={(v) => setTasters(v.replace(/[^0-9]/g, ""))}
                val={tasters}
                placeholder={"1-20"}
              />
              <FormInput
                id='cods'
                label={"Кодов на продукт"}
                setVal={(v) => setCods(v.replace(/[^0-9]/g, ""))}
                val={cods}
                placeholder={"3"}
              />
            </div>
            <div className={s.design__fields}>
              <FormInput
                id='sessions'
                label={"Кол-во сессий"}
                setVal={(v) => setSessions(v.replace(/[^0-9]/g, ""))}
                val={sessions}
                placeholder={"1-20"}
              />
              <FormInput
                id='products-repeats'
                label={"Кол-во повторений продукта"}
                setVal={(v) => setProductsRepeats(v.replace(/[^0-9]/g, ""))}
                val={productsRepeats}
                placeholder={"1-20"}
              />
              <FormInput
                id='codsLength'
                label={"Знаков в коде"}
                setVal={(v) => setCodsLength(v.replace(/[^0-9]/g, ""))}
                val={codsLength}
                placeholder={"3"}
              />
            </div>
          </>

          <div className={s.design__btns}>
            <button
              className='btn__fill btn__fill__brown'
              disabled={btnDisabled}
              type='submit'
            >
              СГенерировать
            </button>
            <button className='btn__fill btn__fill__white' type='button'>
              Импортировать
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default FormDeg;
