import Image from "@/shared/ui/image/image";
import { NewsItemType } from "../../model/types";
import cl from "./styles.module.css";
import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";

interface Props {
  item: NewsItemType;
  type: "banner" | "item";
}

const NewsCard = ({ item, type = "item" }: Props) => {
  return (
    <li className={`${cl.card} ${type === "banner" && cl.banner}`}>
      {type === "banner" ? (
        <Image image={item?.image} />
      ) : (
        <div
          className={cl.wrapper}
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
      )}
      <div className={cl.info}>
        <h3 className={cl.title}>{item.title}</h3>
        <p className={cl.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
};

export default NewsCard;