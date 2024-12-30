import cl from "./styles.module.css";

const Skeleton = ({
  count = 1,
  type = "banner",
}: {
  count: number;
  type: "banner" | "item";
}) => {
  console.log('render')
  return (
    <>
      {count > 1 ? (
        <ul className={cl.list}>
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
