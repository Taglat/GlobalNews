import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
import { NewsItemType } from "../../model/types"; 
import cl from "./styles.module.css";

const NewsItem = ({ item }: { item: NewsItemType }) => {
  return (
    <li className={cl.item}>
      <div
        className={cl.wrapper}
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className={cl.info}>
        <h3 className={cl.title}>{item.title}</h3>
        <p className={cl.subtitle}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
};

export default NewsItem;
