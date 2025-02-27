"use client";
import { useEffect, useState } from "react";
import FormInput from "@/components/FormInput";
import Image from "next/image";
import { useProductStore } from "@/store/productStore";
import ScaleBtns from "@/components/ScaleBtns";
import Select from "@/components/Select";
import FormCheckbox from "@/components/FormCheckbox";

import s from "../index.module.scss";

const GroupList = () => {
  const updateProductQuestions = useProductStore(
    (state) => state.updateProductQuestions
  );
  const storeProducts = useProductStore((state) => state.products);
  const storeProductsStep = useProductStore((state) => state.updateStep);

  const [description, setDescription] = useState("");
  const [groupVal, setGroupVal] = useState([{ group: "", code: "" }]);
  const [newGroupVal, steNewGroupVal] = useState({ group: "", code: "" });

  const [paramsVal, setParamsVal] = useState([]);

  const [newParamsVal, steNewParamsVal] = useState({
    paramsName: "",
    type: "",
  });

  const [finalText, setFinalText] = useState("");

  const [showHiddenList, setShowHiddenList] = useState(false);
  const [showParamsList, setShowParamsList] = useState(false);

  const typeList = [
    { id: 1, type: "scale", title: "Шкала" },
    { id: 2, type: "text", title: "Текстовое поле" },
    { id: 3, type: "checkboxes", title: "Чек-бокс" },
  ];
  const [statusTypeList, setStatusTypeList] = useState({
    id: 1,
    type: "scale",
    title: "Шкала",
  });

  useEffect(() => {
    steNewParamsVal((prev) => ({
      ...prev,
      paramsName: "",
      type: "scale",
    }));
  }, []);

  const initTypeVal = (el) => {
    setStatusTypeList((prev) => ({ ...prev, title: el.title }));

    steNewParamsVal((prev) => ({
      ...prev,
      paramsName: el.title,
      type: el.type,
    }));
  };

  const addGroup = (e) => {
    e.preventDefault();
    setShowHiddenList(false);
    setGroupVal((prev) => [...prev, newGroupVal]);
  };

  const addParams = (e) => {
    e.preventDefault();
    setShowParamsList(false);
    setParamsVal((prev) => [...prev, newParamsVal]);
  };

  const saveInfo = (e) => {
    e.preventDefault();

    const dataTetrad = { description, groupVal, finalText };
    const dataDOD = { description, paramsVal, finalText };

    storeProducts.activeTab === "tetrad"
      ? updateProductQuestions(dataTetrad)
      : updateProductQuestions(dataDOD);

    storeProductsStep(2);
  };

  return (
    <>
      <section className={s.list__section}>
        <form onSubmit={saveInfo}>
          <div className={s.list__description}>
            <h2 className={s.list__title}>Вводный текст</h2>
            <FormInput
              id={"description"}
              setVal={(v) => setDescription(v)}
              val={description}
              label={"Добавьте текст, доступный перед началом опроса"}
              placeholder={"Текст описания"}
            />
          </div>

          {storeProducts.activeTab === "tetrad" && (
            <>
              <div
                className={`${s.list__title} ${s.list__add__title}`}
                onClick={() => setShowHiddenList(true)}
              >
                <h2>Список групп</h2>
                <div className={s.list__add}>
                  <Image
                    src='/icons/plus.svg'
                    width={10}
                    height={10}
                    alt={"add"}
                  />
                </div>
              </div>
              <div className={s.list__group__wrap}>
                <div className={s.list__group__header}>
                  <div>название</div>
                  <div>коды</div>
                </div>
                {groupVal.map((el, index) => (
                  <div key={index} className={s.list__group__item}>
                    <FormInput
                      id={`group__name__${index}`}
                      val={groupVal[index].group}
                      setVal={(v) =>
                        setGroupVal((prev) =>
                          prev.map((item, i) =>
                            i === index ? { ...item, group: v } : item
                          )
                        )
                      }
                      placeholder={"Группа"}
                    />
                    <FormInput
                      id={`group__code__${index}`}
                      val={groupVal[index].code}
                      setVal={(v) =>
                        setGroupVal((prev) =>
                          prev.map((item, i) =>
                            i === index ? { ...item, code: v } : item
                          )
                        )
                      }
                      placeholder={"TET/2113/12"}
                    />
                  </div>
                ))}
                {showHiddenList && (
                  <div className={s.add__list__hidden}>
                    <h2 className={s.list__title}>Добавить группу</h2>
                    <button
                      type='button'
                      className={s.close}
                      onClick={() => setShowHiddenList(false)}
                    />
                    <div className={s.add__list}>
                      <FormInput
                        id={"value__group"}
                        label='Название группы'
                        val={newGroupVal.group}
                        setVal={(v) =>
                          steNewGroupVal((prev) => ({
                            ...prev,
                            group: v,
                          }))
                        }
                        placeholder={"Введите название"}
                      />
                      <FormInput
                        id={"code__group"}
                        label='Код группы'
                        val={newGroupVal.code}
                        setVal={(v) =>
                          steNewGroupVal((prev) => ({
                            ...prev,
                            code: v,
                          }))
                        }
                        placeholder={"Значение"}
                      />
                      <button
                        type='button'
                        onClick={addGroup}
                        className='btn__fill btn__fill__add'
                      >
                        Добавить
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {storeProducts.activeTab === "DOD" && (
            <>
              <div
                className={`${s.list__title} ${s.list__add__title}`}
                onClick={() => setShowParamsList(true)}
              >
                <h2>Параметры оценки</h2>
                <div className={s.list__add}>
                  <Image
                    src='/icons/plus.svg'
                    width={10}
                    height={10}
                    alt={"add"}
                  />
                </div>
              </div>
              <div className={s.params__wrap}>
                {paramsVal.map((el, index) => (
                  <div
                    key={index}
                    className={el.type === "text" ? s.label : ""}
                  >
                    {el.type === "scale" && (
                      <div>
                        <div className={s.params__title}>{el.paramsName}</div>
                        <ScaleBtns />
                      </div>
                    )}
                    {el.type === "text" && <FormInput label={el.paramsName} />}
                    {el.type === "checkboxes" && (
                      <FormCheckbox title={el.paramsName} />
                    )}
                  </div>
                ))}
              </div>
              {showParamsList && (
                <div className={s.add__list__hidden}>
                  <h2 className={s.list__title}>
                    Добавить вопрос или параметр
                  </h2>
                  <button
                    type='button'
                    className={s.close}
                    onClick={() => setShowParamsList(false)}
                  />
                  <div className={s.add__list}>
                    <FormInput
                      id={"value__group"}
                      label='Название'
                      val={newGroupVal.paramsName}
                      setVal={(v) =>
                        steNewParamsVal((prev) => ({
                          ...prev,
                          paramsName: v,
                        }))
                      }
                      placeholder={"Введите название"}
                    />
                    <Select
                      list={typeList}
                      initialVal={statusTypeList.title}
                      setVal={initTypeVal}
                    />

                    <button
                      type='button'
                      onClick={addParams}
                      className='btn__fill btn__fill__add'
                    >
                      Добавить
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
          <div className={s.list__description}>
            <h2 className={s.list__title}>Завершающий текст</h2>
            <FormInput
              id={"text__final"}
              setVal={(v) => setFinalText(v)}
              val={finalText}
              label={"Добавьте текст, завершающий опрос"}
              placeholder={"Текст описания"}
            />
          </div>
          <div>
            <button type='submit' className='btn__fill btn__fill__brown'>
              Сохранить
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
export default GroupList;
