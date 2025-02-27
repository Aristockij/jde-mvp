import Link from "next/link";
import Image from "next/image";
import s from "./index.module.scss";
const NavBar = () => {
  const links = [
    { href: "/not-found", title: "Главная" },
    { href: "/", title: "Проекты" },
    { href: "/not-found", title: "Дегустаторы" },
    { href: "/not-found", title: "Продукты" },
    { href: "/not-found", title: "Пользователи" },
    { href: "/not-found", title: "Настройки" },
  ];

  return (
    <div className='navbar'>
      <div className='logo'>
        <Image src='/images/logo.png' alt='logo' width={69} height={58} />
      </div>
      <ul>
        {links.map((el, index) => (
          <li key={index} className={el.title == "Проекты" ? s.active : ""}>
            <Link href={el.href}>{el.title}</Link>
          </li>
        ))}
      </ul>
      <div className='auth'>
        <div className='user'>
          <div className='user__name'>admin admin</div>
        </div>

        <button className='logout__btn'>
          <div className='logout__icon'>
            <Image
              src='/icons/logout.svg'
              alt='avatar'
              width={15}
              height={17}
            />
          </div>
          <div>Выйти</div>
        </button>
      </div>
    </div>
  );
};
export default NavBar;
