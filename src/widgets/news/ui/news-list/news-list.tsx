import withSkeleton from "@/shared/hocs/withSkeleton";
import { NewsItemType } from "@/entities/news";
import { NewsItem } from "@/entities/news";
import cl from "./styles.module.css";

const NewsList = ({ news }: { news: NewsItemType[] }) => {
  return (
    <ul className={cl.list}>
      {news.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton({Component: NewsList, type: "item", count: 10})

export default NewsListWithSkeleton;
