"use client";

import { useState } from "react";
import s from "./index.module.scss";

const Select = ({ list, initialVal, setVal, circle }) => {
  const [showList, setShowList] = useState(false);

  return (
    <div className={s.select}>
      <div className={s.select__init} onClick={() => setShowList(!showList)}>
        {!circle ? (
          initialVal
        ) : (
          <span className={`${s.circle} ${initialVal}`} />
        )}
        <span className={showList ? `${s.arrow} ${s.active}` : `${s.arrow}`} />
      </div>
      {showList && (
        <div className={s.select__list}>
          <ul>
            {list.map((el) => (
              <li
                key={el.id}
                onClick={() => {
                  setVal(el);
                  setShowList(!showList);
                }}
              >
                {!circle ? (
                  el.title
                ) : (
                  <span className={`${s.circle} ${el.title}`} />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Select;
