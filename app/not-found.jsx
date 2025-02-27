import Link from "next/link";

const notfound = () => {
  return (
    <div className=' '>
      <div className='container container__not-found'>
        <h1>
          Ошибка 500 <br />
          Internal Server Error
        </h1>
        <br />
        <Link href={"/"}>
          <span className='btn  btn__border '> Вернуться на главную</span>
        </Link>
      </div>
    </div>
  );
};
export default notfound;
