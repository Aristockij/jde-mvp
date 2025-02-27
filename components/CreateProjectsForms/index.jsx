"use client";

import Image from "next/image";
import s from "./index.module.scss";
import Link from "next/link";
import FormDeg from "./forms/FormDeg";
import FormProductList from "./forms/FormProductList";
import GroupList from "./forms/GroupList";
import Publications from "@/components/Publications";
import { useProductStore } from "@/store/productStore";

const CreateProjectsForms = () => {
  const projectState = [
    { title: "Дизайн дегустации", id: 1 },
    { title: "Дизайн опросника", id: 2 },
    { title: "Публикация", id: 3 },
    { title: "Результаты", id: 4 },
  ];
  const storeProducts = useProductStore((state) => state.products);
  const storeStep = useProductStore((state) => state.step);
  const storeStepUpdate = useProductStore((state) => state.updateStep);

  return (
    <section className='container '>
      <div className='inner__container flex'>
        <div>
          <div className='title__top'>
            <Link href='/'>
              <div className='title'>
                <span>
                  <Image
                    src='/icons/arr_back.svg'
                    alt='back'
                    width={15}
                    height={15}
                  />
                </span>
                <h1> Новый проект</h1>
              </div>
            </Link>
          </div>
          <div className={s.create__steps}>
            {projectState.map((el, index) => (
              <button
                className={index === storeStep ? s.active__btn : ""}
                key={el.id}
                disabled={index > storeStep}
                onClick={() => storeStepUpdate(index)}
              >
                {el.title}
              </button>
            ))}
          </div>

          {storeStep === 0 && (
            <>
              <FormDeg />
              {storeProducts.products && <FormProductList />}
            </>
          )}

          {storeStep === 1 && <GroupList />}
          {storeStep === 2 && <Publications />}
        </div>
        {storeStep === 1 && <div className={s.opros__list}></div>}
      </div>
    </section>
  );
};
export default CreateProjectsForms;
