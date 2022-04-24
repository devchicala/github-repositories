import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Search } from "./components/Search";
import Profile from "./components/Profile";

const Routers: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/profile/" element={<Profile/>} />
      </Routes>
    </Router>
  );
};

export default Routers;
