import s from "./index.module.scss";
import {
  projectsContentList,
  projectsContentListTetrad,
} from "../../constants/data";
import Image from "next/image";
import Link from "next/link";

const ProjectList = ({ activeTab, status, searchText }) => {
  const projectHeader = [
    "ID",
    "Project name",
    "status",
    "date",
    "author",
    "Result",
  ];

  const TableItem = ({ el, status, searchText }) => {
    const matchesStatus = status === "All" || el.status === status;
    const matchesSearch =
      !searchText ||
      el.projectName.toLowerCase().includes(searchText.toLowerCase());

    if (!matchesStatus || !matchesSearch) {
      return null;
    }

    return (
      <div className={s.project__list__item}>
        <span>{el.id}</span>
        <span>{el.projectName}</span>
        <span>
          <span className={el.status === "New" ? s.new : s.closed}>
            {el.status}
          </span>
        </span>

        <span>{el.date}</span>
        <span>{el.author}</span>
        <span>
          <Link href='/not-found' className={s.img}>
            <Image src='/icons/list.svg' alt='list' width={10} height={10} />
          </Link>
        </span>
      </div>
    );
  };

  console.log(searchText);

  return (
    <div>
      <div className={s.project__header}>
        {projectHeader.map((el, index) => (
          <span key={index}>{el}</span>
        ))}
      </div>
      {activeTab == "1" &&
        projectsContentList.map((el, index) => (
          <TableItem
            key={el.id + index}
            el={el}
            status={status}
            searchText={searchText}
          />
        ))}

      {activeTab == "2" &&
        projectsContentListTetrad.map((el, index) => (
          <TableItem
            key={el.id + index}
            el={el}
            status={status}
            searchText={searchText}
          />
        ))}

      <div className={s.btn__list}>
        <button className={s.active}>1</button>
        {/* <button>2</button>
        <button>3</button>
        <button>...</button>
        <button>67</button>
        <button>68</button> */}
      </div>
    </div>
  );
};
export default ProjectList;
