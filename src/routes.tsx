import { FC } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Principal from "./components/Principal";
import Episodio from "./components/Episodio";

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" element={Principal} />
      <Route path="/details" element={Episodio} />
    </BrowserRouter>
  );
};

export default Routes;
