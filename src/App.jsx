import Taimer from "./components/Page main/Taimer/Taimer";
import About from "./components/Page About/About/About";
import Header from "./Header/Header";
import { HashRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";

const App = () => {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Taimer />} />
          <Route path="/aboutProject" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
