import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Principal from "./components/Principal";
import EpisodioDetails from "./components/EpisidioDetails";

const Routers: FC = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/details" element={<EpisodioDetails />} />
        </Routes>
      </Router>
  );
};

export default Routers;
