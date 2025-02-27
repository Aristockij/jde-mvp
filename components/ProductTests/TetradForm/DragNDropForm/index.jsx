"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import s from "../../index.module.scss";
import DragItem from "../DragItem";
import BgPaper from "@/components/BgPaper";

const index = ({ nextStep, items, group }) => {
  const [layoutActive, setLayoutActive] = useState(false);
  const [dragWrap, setDragWrap] = useState(items);
  const [groups, setGroups] = useState([]);

  console.log(dragWrap);

  useEffect(() => {
    if (group) {
      const grouped = group.reduce((acc, el) => {
        acc[el.group] = [];
        return acc;
      }, {});

      setGroups(grouped);
    }
  }, []);

  const onDragStart = (e, item, source) => {
    e.dataTransfer.setData("item", JSON.stringify({ item, source }));

    setLayoutActive(true);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onMouseUp = () => {
    setLayoutActive(false);
  };

  const onDrop = (e, group) => {
    e.preventDefault();
    setLayoutActive(false);
    const { item, source } = JSON.parse(e.dataTransfer.getData("item"));

    // Если группа переполнена, ничего не делать (кроме dragWrap, где нет ограничения)
    if (group !== "dragWrap" && groups[group].length >= 2) return;

    if (source === "dragWrap") {
      // Если элемент перетаскивается из dragWrap
      setDragWrap((prev) => prev.filter((el) => el.value !== item.value));
    } else {
      // Если элемент перетаскивается из одной из групп
      setGroups((prevGroups) => ({
        ...prevGroups,
        [source]: prevGroups[source].filter((el) => el.value !== item.value),
      }));
    }

    if (group === "dragWrap") {
      // Если элемент возвращается в dragWrap
      setDragWrap((prev) => [...prev, item]);
    } else {
      // Если элемент добавляется в одну из групп
      setGroups((prevGroups) => ({
        ...prevGroups,
        [group]: [...prevGroups[group], item],
      }));
    }
  };

  const getGroupInfo = () => {
    console.log(groups);
    nextStep();
  };

  return (
    <section className={`${s.container} ${s.container__sm}`}>
      <div className={s.padding__40}>
        <BgPaper />
        <div className={s.logo__sm}>
          <Image src='/images/logo.png' width={113} height={95} alt={"logo"} />
        </div>
        <div className={s.title}>
          <div className={s.title__main}>
            <h2>Дегустация новых сортов </h2>
          </div>
        </div>
        <div className={s.drag__subtitle}>
          <p>
            Вы получите 4 образца.
            <br /> Оцените образцы слева направо на предмет аромата и вкуса.
            Пожалуйста, сгруппируйте образцы в две группы по сходству. В каждой
            группе должно быть по два образцы.
          </p>
        </div>
        <div
          className={
            layoutActive ? `${s.drag__wrap} ${s.active}` : `${s.drag__wrap}`
          }
          onDragOver={onDragOver}
          onDrop={(e) => onDrop(e, "dragWrap")}
        >
          {dragWrap.map((el, index) => (
            <DragItem
              key={index}
              el={el}
              onDragStart={onDragStart}
              from='dragWrap'
              onMouseUp={onMouseUp}
            />
          ))}
        </div>

        <form action={getGroupInfo}>
          <div className={s.drag__group__wrap}>
            {Object.keys(groups).map((groupName) => (
              <div
                key={groupName}
                className={s.drag__group}
                onDragOver={onDragOver}
                onDrop={(e) => onDrop(e, groupName)}
              >
                <div className={s.drag__title}>{groupName}</div>
                <div className={s.drag__value}>
                  {groups[groupName].map((item, index) => (
                    <DragItem
                      key={index}
                      el={item}
                      onDragStart={onDragStart}
                      from={groupName}
                      onMouseUp={onMouseUp}
                    />
                  ))}
                </div>
                <div className={s.drag__subtitle}>
                  Короткое описание группы. 1-2 предложения.
                </div>
              </div>
            ))}
          </div>

          <div className={s.btns__wrap}>
            <button className='btn__fill btn__fill__brown' type='submit'>
              продолжить
            </button>
          </div>
        </form>

        <div
          className={
            layoutActive ? `${s.drag__layout} ${s.active}` : `${s.drag__layout}`
          }
        />
      </div>
    </section>
  );
};
export default index;
