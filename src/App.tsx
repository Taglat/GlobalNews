import Header from "./components/header/header";
import News from "./pages/news/news";

export const App = () => {
  return <>
    <Header />
    <main className="container vp20">
      <News />
    </main>
  </>
};
