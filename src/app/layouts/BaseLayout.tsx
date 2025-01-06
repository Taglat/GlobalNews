import { Header } from "@/widgets/header";
import { useTheme } from "../providers/ThemeProvider";
import { MainPage } from "@/pages/main";

export const BaseLayout = () => {
  const { isDark } = useTheme();

  return <div className={`app ${isDark ? "dark" : "light"}`}>
    <Header />
    <main className="container vp20">
      <MainPage />
    </main>
  </div>
};
