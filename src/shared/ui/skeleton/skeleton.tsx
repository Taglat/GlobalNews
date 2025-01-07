import { SkeletonType } from "@/shared/types";
import cl from "./styles.module.css";

const Skeleton = ({
  count = 1,
  type = "banner",
  direction = "column"
}: {
  count?: number;
  type?: SkeletonType;
  direction?: "column" | "row"
}) => {
  return (
    <>
      {count > 1 ? (
        <ul className={direction === "column" ? cl.columnList : cl.rowList}>
          {[...Array(count)].map((_, index) => (
            <li
              key={index}
              className={type === "banner" ? cl.banner : cl.item}
            ></li>
          ))}
        </ul>
      ) : (
        <li className={type === "banner" ? cl.banner : cl.item}></li>
      )}
    </>
  );
};

export default Skeleton;
