import { BrowserRouter, Route, Routes } from "react-router";

import { HomePage } from "../src/pages/HomePage";

import "./reset.css";

export const App = () => {
  return (
    <BrowserRouter basename="/house-website/">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
