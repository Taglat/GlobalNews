import withSkeleton from "../../hocs/withSkeleton";
import { NewsItemType } from "../../types";
import NewsItem from "../news-item/news-item";
import styles from "./styles.module.css";

const BannersList = ({ banners }: {
  banners: NewsItemType[];
}) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewsItem key={banner.id} item={banner} />;
      })}
    </ul>
  );
};

const BannersListWithSkeleton = withSkeleton({Component: BannersList, type: "banner", count: 10, direction: "row"});

export default BannersListWithSkeleton;