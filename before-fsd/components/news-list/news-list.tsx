import withSkeleton from "../../hocs/withSkeleton";
import { NewsItemType } from "../../types";
import NewsItem from "../news-item/news-item";
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
