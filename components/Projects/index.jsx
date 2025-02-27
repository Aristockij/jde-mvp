"use client";

import Image from "next/image";
import Select from "@/components/Select";
import SelectedBtns from "@/components/SelectedBtns";
import ProjectList from "@/components/ProjectList";

import Link from "next/link";
import { useState } from "react";

const Projects = () => {
  const statusList = [
    { id: 1, title: "New" },
    { id: 2, title: "Closed" },
    { id: 3, title: "All" },
  ];
  const [statusValue, setStatusValue] = useState("All");
  const [activeTab, setActiveTab] = useState("1");
  const [searchText, setSearchText] = useState("");

  const isActiveTab = (num) => setActiveTab(num);
  const setStatusVal = (el) => setStatusValue(el.title);

  const searchItem = (data) => {
    const text = data.get("search");
    setSearchText(text);
  };

  return (
    <section className='container'>
      <div className='inner__container'>
        <div className='title__top'>
          <div className='title'>
            <h1>Проекты</h1>
            <span>(5)</span>
          </div>
          <div>
            <Link href='project' className='btn__create'>
              Создать
              <span>
                <Image
                  src='/icons/plus.svg'
                  alt='create'
                  width={10}
                  height={10}
                />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <form action={searchItem} className='form__search__wrap'>
            <div className='form__search'>
              <input
                type='text'
                className='form__input'
                name='search'
                id='search'
                placeholder='Поиск'
              />
              <button type='submit'>
                <Image
                  src='/icons/search.svg'
                  alt='search'
                  width={10}
                  height={10}
                />
              </button>
            </div>
            <Select
              list={statusList}
              initialVal={statusValue ? statusValue : "Статус"}
              setVal={setStatusVal}
            />
          </form>
        </div>
        <SelectedBtns activeTab={isActiveTab} />
        <ProjectList
          activeTab={activeTab}
          status={statusValue}
          searchText={searchText}
        />
      </div>
    </section>
  );
};
export default Projects;
