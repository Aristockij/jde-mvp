"use client";

import TablePanel from "./TablePanel";
import PublicationLinks from "./PublicationLinks";
import s from "./index.module.scss";

const Publications = () => {
  return (
    <div>
      <h2 className={s.title}>ПАнель</h2>

      <TablePanel />
      <PublicationLinks />
    </div>
  );
};
export default Publications;
