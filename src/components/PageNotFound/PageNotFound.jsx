import styles from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={styles.div_container}>
      <div className={styles.div_page_not_found}>
        <h1>404</h1>

        <p>Страница не найдена</p>
      </div>
      <a href="/">Главная</a>
    </div>
  );
};
export default PageNotFound;
