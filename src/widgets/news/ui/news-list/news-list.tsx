import withSkeleton from "@/shared/hocs/withSkeleton";
import { NewsItemType } from "@/entities/news";
import { NewsCard } from "@/entities/news";
import cl from "./styles.module.css";
import { ReactNode } from "react";

const NewsList = ({ news, type = "item", viewNewsSlot }: {
  news?: NewsItemType[];
  type?: "banner" | "item";
  viewNewsSlot?: (news: NewsItemType) => ReactNode;
}) => {
  return (
    <ul className={`${type === "item" ? cl.items : cl.banners}`}>
      {news?.map((item) => {
        return <NewsCard key={item.id} item={item} type={type} viewNewsSlot={viewNewsSlot} />;
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton({Component: NewsList, count: 10})

export default NewsListWithSkeleton;
