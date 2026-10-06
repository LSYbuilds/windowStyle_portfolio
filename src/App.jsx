import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Wrap } from "./style/layout_styled";
import Introlayout from "./components/leyout/intro_layout";
import Mainlayout from "./components/leyout/main_layout";
import Intro from "./page/intro/intro";
import Main from "./page/main/Main";
import "./App.css";

function App() {
  return (
    <Wrap>
      <Routes>
        <Route element={<Introlayout />}>
          <Route path="/" element={<Intro />}></Route>
        </Route>
        <Route element={<Mainlayout />}>
          <Route path="/main" element={<Main />}></Route>
        </Route>
      </Routes>
    </Wrap>
  );
}

export default App;
