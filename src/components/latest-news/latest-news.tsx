import cl from "./styles.module.css";
import BannersList from "../banners-list/banners-list";
import { useFetch } from "../../hooks/useFetch";
import { fetchLatestNews } from "../../api/apiNews";

const LatestNews = () => {
  const { data, isLoading } = useFetch(fetchLatestNews);

  return (
    <section className={cl.section}>
      <h2>🔥 Hot News</h2>
      <BannersList banners={data?.news || []} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
