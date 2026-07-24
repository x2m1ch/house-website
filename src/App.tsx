import { BrowserRouter, Route, Routes } from "react-router";

import { HomePage } from "./pages/HomePage";

import "./reset.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
