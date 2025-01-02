import cl from "./styles.module.css";
import LatestNews from "../../components/latest-news/latest-news";
import NewsByFilters from "../../components/news-by-filters/news-by-filters";

const News = () => {
  return (
    <div className={cl.news}>
      <NewsByFilters />
      <LatestNews />
    </div>
  );
};

export default News;
