import s from "../index.module.scss";
import { useState } from "react";
import Select from "@/components/Select";
import Image from "next/image";
import Link from "next/link";

const TableItem = ({ index, activeTab }) => {
  const [statusValue, setStatusValue] = useState("");
  const statusList = [
    { id: 1, title: "Анонимный дегустатор" },
    { id: 2, title: "admin admin" },
    { id: 3, title: "avocc" },
    { id: 4, title: "Andrey Zhdankin" },
    { id: 5, title: "user234" },
    { id: 6, title: "user235" },
  ];
  const setStatusVal = (el) => setStatusValue(el.title);

  const copyTextToClipboard = (text) => {
    navigator.clipboard.writeText(
      `https://jre.platform-x.farzoom.ru/test/${activeTab}?id=U0stRUFyY2hpdmVfT1BF
`
    );
  };

  const [showQrCode, setShowQrCode] = useState(false);
  const showQrHandler = () => {
    setShowQrCode(!showQrCode);
  };

  const ShowQr = () => {
    return (
      <>
        <div className={s.qr__layout} onClick={showQrHandler} />
        <div className={s.qr__large}>
          {activeTab === "DOD" ? (
            <img
              src={"/images/qr_id_DOD.png"}
              width={18}
              height={18}
              alt='share'
            />
          ) : (
            <img
              src={"/images/qr_id_tetrad.png"}
              width={18}
              height={18}
              alt='share'
            />
          )}
        </div>
      </>
    );
  };

  return (
    <>
      <div className={s.table__item} key={index}>
        <div className={s.table__select}>
          <Select
            list={statusList}
            initialVal={statusValue ? statusValue : "дегустатор"}
            setVal={setStatusVal}
          />
        </div>

        <div>
          <div className={s.status}>{"Новый"}</div>
        </div>
        <div>{0}</div>
        <div className={s.action}>
          <Link
            href={{
              pathname: `/test/${activeTab}`,
              query: { id: "U0stRUFyY2hpdmVfT1BF" },
            }}

            // onClick={() => copyTextToClipboard(index)}
          >
            <Image src={"/icons/link.png"} width={18} height={18} alt='share' />
          </Link>
          <div onClick={showQrHandler}>
            <Image
              src={"/images/qr__code2.png"}
              width={18}
              height={18}
              alt='share'
            />
          </div>
        </div>
      </div>
      {showQrCode && <ShowQr />}
    </>
  );
};
export default TableItem;
