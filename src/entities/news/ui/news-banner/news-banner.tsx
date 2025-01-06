import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
import { NewsItemType } from "../../model/types";
import Image from "@/shared/ui/image/image";
import cl from "./styles.module.css";

export const NewsBanner = ({ item }: { item: NewsItemType | null}) => {
  if (!item) {
    return null;
  }

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