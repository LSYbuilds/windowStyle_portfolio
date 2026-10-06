import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Wrap } from "./style/layout_styled";
import Introlayout from "./components/leyout/intro_layout";
import Intro from "./page/intro/intro";
import "./App.css";

function App() {
  return (
    <Wrap>
      <Routes>
        <Route element={<Introlayout />}>
          <Route path="/" element={<Intro />}></Route>
        </Route>
      </Routes>
    </Wrap>
  );
}

export default App;
