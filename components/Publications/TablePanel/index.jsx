import s from "../index.module.scss";
import { useProductStore } from "@/store/productStore";
import TableItem from "../TableItem";

const TablePanel = () => {
  const storeProducts = useProductStore((state) => state.products);

  const header = ["Имя", "Статус", "Сессии", "Действия"];

  return (
    <div className={s.table}>
      <div className={s.header}>
        {header.map((el, index) => (
          <div key={index}>{el}</div>
        ))}
      </div>

      {Array.from({ length: storeProducts.tasters }).map((el, index) => (
        <TableItem
          key={index}
          index={index}
          activeTab={storeProducts.activeTab}
        />
      ))}
    </div>
  );
};
export default TablePanel;
