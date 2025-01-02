import cl from "./styles.module.css";
import { NewsItemType } from "../../types";
import BannersList from "../banners-list/banners-list";

const LatestNews = ({ banners, isLoading }: {
  banners: NewsItemType[];
  isLoading: boolean;
}) => {
  return (
    <section className={cl.section}>
      <h2>🔥 Hot News</h2>
      <BannersList banners={banners} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
