import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Search } from "./components/Search";
import Profile from "./components/Profile";
import { UserResult } from "./components/UserResult";

const Routers: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/profile/" element={<Profile/>} />
        <Route path="/userResult/" element={<UserResult/>} />
      </Routes>
    </Router>
  );
};

export default Routers;
