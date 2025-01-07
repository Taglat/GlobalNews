import cl from "./styles.module.css";
import { NewsList } from "@/widgets/news";
import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";


const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={cl.section}>
      <h2>🔥 Hot News</h2>
      <NewsList type="banner" news={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
