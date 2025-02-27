import s from "../index.module.scss";
import Image from "next/image";
import { useProductStore } from "../../../store/productStore";
import Link from "next/link";

const PublicationLinks = () => {
  const copyTextToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const storeProducts = useProductStore((state) => state.products);

  return (
    <>
      <h2 className={s.title}>Ссылки</h2>
      <div className={s.link__copy}>
        <div>
          <div className={s.link__copy__title}>Анонимное прохождение</div>
          <div className={s.link__copy__info}>
            <Link
              // onClick={() =>
              //   copyTextToClipboard(
              //     `https://jde-dev.spaaace.io/test/${storeProducts.activeTab}`
              //   )
              // }

              href={`test/${storeProducts.activeTab}`}
            >
              https://jre.platform-x.farzoom.ru/test/{storeProducts.activeTab}
              ?nouser
            </Link>
            <div
              onClick={() =>
                copyTextToClipboard(
                  `https://jre.platform-x.farzoom.ru/test/${storeProducts.activeTab}`
                )
              }
            >
              <Image
                src={"/icons/copy.svg"}
                width={16}
                height={16}
                alt={"copy"}
              />
            </div>
          </div>
        </div>
        <div>
          <div className={s.link__copy__title}>Авторизованные пользователи</div>
          <div className={s.link__copy__info}>
            <Link
              // onClick={() =>
              //   copyTextToClipboard(
              //     `https://jde-dev.spaaace.io/test/${storeProducts.activeTab}`
              //   )
              // }

              href={`test/${storeProducts.activeTab}`}
            >
              https://jre.platform-x.farzoom.ru/test/{storeProducts.activeTab}
            </Link>
            <div
              onClick={() =>
                copyTextToClipboard(
                  `https://jre.platform-x.farzoom.ru/test/${storeProducts.activeTab}`
                )
              }
            >
              <Image
                src={"/icons/copy.svg"}
                width={16}
                height={16}
                alt={"copy"}
              />
            </div>
          </div>
        </div>
      </div>

      <h2 className={s.title}>QR-коды </h2>
      <div className={s.qr__wrap}>
        <div className={s.qr__info}>
          <div className={s.qr__code}>
            <Image
              src={
                storeProducts.activeTab === "DOD"
                  ? "/images/qr_anonym_DOD.png"
                  : "/images/qr_anonym_tetrad.png"
              }
              width={112}
              height={112}
              alt='qr_code'
            />
          </div>
          <div>
            <div className={s.qr__link}>
              <div className={s.qr__link__title}>Анонимное прохождение</div>
              <button className={`${s.btn} btn  btn__border`}>
                поделиться
                <span>
                  <Image
                    src={"/icons/share.svg"}
                    width={18}
                    height={18}
                    alt='share'
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className={s.qr__info}>
          <div className={s.qr__code}>
            <Image
              src={
                storeProducts.activeTab === "DOD"
                  ? "/images/qr_DOD.png"
                  : "/images/qr_tetrad.png"
              }
              width={112}
              height={112}
              alt='qr_code'
            />
          </div>
          <div>
            <div className={s.qr__link}>
              <div className={s.qr__link__title}>
                Авторизованные пользователи
              </div>
              <button className={`${s.btn} btn  btn__border`}>
                поделиться
                <span>
                  <Image
                    src={"/icons/share.svg"}
                    width={18}
                    height={18}
                    alt='share'
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <h2 className={s.title}>Распечатать опросик </h2>
      <button className={`${s.btn} btn  btn__border`}>
        Распечатать
        <span>
          <Image src={"/icons/print.svg"} width={18} height={18} alt='share' />
        </span>
      </button>
      <br />
      <br />
      <br />
      <Link
        href='/not-found'
        className={"btn__fill btn__fill__brown"}
        type='button'
      >
        сохранить и опубликовать
      </Link>
    </>
  );
};
export default PublicationLinks;
