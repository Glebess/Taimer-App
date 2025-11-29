import Taimer from "./components/Page main/Taimer/Taimer";
import About from "./components/Page About/About/About";
import Header from "./Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";
const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/Taimer-App" element={<Taimer />} />
        <Route path="/Taimer-App/aboutProject" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
