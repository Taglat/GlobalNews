import cl from "./styles.module.css";

const Image = ({ image }: { image: string }) => {
  return (
    <div className={cl.wrapper}>
      {image ? <img src={image} alt="news" className={cl.image} /> : null}
    </div>
  );
};

export default Image;
