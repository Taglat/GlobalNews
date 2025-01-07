import cl from "./styles.module.css";
import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
import { NewsItemType } from "../../model/types"; 
import Image from "@/shared/ui/image/image"; 

interface Props {
  item: NewsItemType;
}

const NewsDetails = ({ item }: Props) => {
  return (
    <div className={cl.details}>
      <Image image={item.image} />
      <div className={cl.description}>
        <p>
          {item.description} ({item.language}){" "}
          <a target="_blank" href={item.url}>
            Read more...
          </a>
        </p>
        <p className={cl.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
        <ul className={cl.categories}>
          {item.category.map((category) => {
            return <button className={cl.active}>{category}</button>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default NewsDetails;
