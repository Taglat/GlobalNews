import withSkeleton from "@/shared/hocs/withSkeleton";
import { NewsItemType } from "@/entities/news";
import { NewsCard } from "@/entities/news";
import cl from "./styles.module.css";
import { ReactNode } from "react";

type Props = {
  news?: NewsItemType[];
  type?: "banner" | "item";
  direction?: "row" | "column" 
  viewNewsSlot?: (news: NewsItemType) => ReactNode;
}

const NewsList = ({ news, type = "item", viewNewsSlot }: Props) => {
  return (
    <ul className={`${type === "item" ? cl.items : cl.banners}`}>
      {news?.map((item) => {
        return <NewsCard key={item.id} item={item} type={type} viewNewsSlot={viewNewsSlot} />;
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton<Props>({Component: NewsList, count: 10})

export default NewsListWithSkeleton;
