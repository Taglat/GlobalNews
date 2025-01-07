import cl from "./styles.module.css";
import { NewsList } from "@/widgets/news";
import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import { NewsItemType } from "@/entities/news";
import { useAppDispatch } from "@/app/appStore";
import { setCurrentNews } from "@/entities/news/model/newsSlice";
import { useNavigate } from "react-router-dom";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const navigateTo = (news: NewsItemType) => {
    dispatch(setCurrentNews(news));
    navigate(`/news/${news.id}`);
  };

  return (
    <section className={cl.section}>
      <h2>🔥 Hot News</h2>
      <NewsList type="banner" direction="row" news={data && data.news} isLoading={isLoading} viewNewsSlot={(news: NewsItemType) => (
          <p onClick={() => navigateTo(news)}>view more...</p>
      )}/>
    </section>
  );
};

export default LatestNews;
