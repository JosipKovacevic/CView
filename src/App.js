import "./App.scss";
import { Route, Routes } from "react-router-dom";
import React from "react";

import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import AddCard from "./pages/AddCard/AddCard";
import Update from "./pages/Update/Update";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details/:id" element={<Details />} />
        <Route path="/Add" element={<AddCard />} />
        <Route path="/Update/:id" element={<Update />} />
      </Routes>
    </>
  );
}

export default App;
