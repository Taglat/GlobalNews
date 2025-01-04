import cl from "./styles.module.css";
import BannersList from "../banners-list/banners-list";
import { useGetLatestNewsQuery } from "../../store/services/newsApi";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={cl.section}>
      <h2>🔥 Hot News</h2>
      <BannersList banners={data?.news || []} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
