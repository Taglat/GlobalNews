import cl from "./styles.module.css";
import { useTheme } from "../../context/theme-context";

const Search = ({
  keywords,
  setKeywords,
}: {
  keywords: string;
  setKeywords: (keywords: string) => void;
}) => {
  const { isDark } = useTheme();

  return (
    <div className={`${cl.search} ${isDark ? cl.dark : cl.light}`}>
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
