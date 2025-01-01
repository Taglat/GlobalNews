import cl from "./styles.module.css";

const Search = ({
  keywords,
  setKeywords,
}: {
  keywords: string;
  setKeywords: (keywords: string) => void;
}) => {
  return (
    <div className={cl.search}>
      <input
        type="text"
        value={keywords}
        placeholder="keywords"
        onChange={(e) => {
          setKeywords(e.target.value);
        }}
        className={cl.input}
      />
    </div>
  );
};

export default Search;
