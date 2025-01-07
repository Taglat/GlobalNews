import { Header } from "@/widgets/header";
import { useTheme } from "../providers/ThemeProvider";
import { Outlet } from "react-router-dom";

export const BaseLayout = () => {
  const { isDark } = useTheme();

  return <div className={`app ${isDark ? "dark" : "light"}`}>
    <Header />
    <main className="container vp20">
      <Outlet />
    </main>
  </div>
};
