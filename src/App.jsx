import Taimer from "./components/Page main/Taimer/Taimer";
import About from "./components/Page About/About/About";
import Header from "./Header/Header";
import { BrowserRouter, HashRouter } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";
const App = () => {
  return (
    <>
      <Header />

      {/* <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Taimer />} />
          <Route path="/aboutProject" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
};
export default App;
