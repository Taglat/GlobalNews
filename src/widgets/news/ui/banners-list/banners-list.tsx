import withSkeleton from "@/shared/hocs/withSkeleton";
import { NewsItemType } from "@/entities/news";
import { NewsItem } from "@/entities/news";
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