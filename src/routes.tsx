import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Principal from "./components/Principal";
import EpisodioDetails from "./components/EpisidioDetails";
import Header from "./components/Header";
import Favorite from "./components/Favorite";
import { Search } from "./components/Search";

const Routers: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/details/:id" element={<EpisodioDetails />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </Router>
  );
};

export default Routers;
