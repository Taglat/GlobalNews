import LatestNews from "./latest-news/latest-news";
import NewsByFilters from "./news-by-filters/news-by-filters";
import cl from "./styles.module.css";

const MainPage = () => {
  return (
    <main className={cl.main}>
      <LatestNews />

      <NewsByFilters />
    </main>
  );
};

export default MainPage;
