import Header from "./components/header/header";
import { useTheme } from "./context/theme-context";
import News from "./pages/news/news";

export const App = () => {
  const { isDark } = useTheme();

  return <div className={`app ${isDark ? "dark" : "light"}`}>
    <Header />
    <main className="container vp20">
      <News />
    </main>
  </div>
};
