import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import { NewsItemType } from "../../types";
import Image from "../image/image";
import cl from "./styles.module.css";
import withSkeleton from "../../hocs/withSkeleton";

const NewsBanner = ({ item }: { item: NewsItemType }) => {
  return (
    <div className={cl.banner}>
      <Image image={item?.image} />
      <h3 className={cl.title}>{item.title}</h3>
      <p className={cl.subtitle}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};

const NewsBannerWithSkeleton = withSkeleton({Component: NewsBanner, type: "banner", count: 1})

export default NewsBannerWithSkeleton;
