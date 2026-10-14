import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Wrap } from "./style/layout_styled";
import Introlayout from "./components/leyout/intro_layout";
import Mainlayout from "./components/leyout/main_layout";
import Intro from "./page/intro/intro";
import Main from "./page/main/Main";
import Program from "./page/main/Program";
import "./App.css";

function App() {
  const [thisProgramData, setThisProgramData] = useState(null);
  // 모달스테이트
  const [isModal, setIsModal] = useState(false);
  return (
    <Wrap>
      <Routes>
        <Route element={<Introlayout />}>
          <Route path="/" element={<Intro />}></Route>
        </Route>
        <Route element={<Mainlayout setIsModal={setIsModal} />}>
          <Route
            path="/main"
            element={
              <Main
                setThisProgramData={setThisProgramData}
                setIsModal={setIsModal}
                isModal={isModal}
              />
            }
          ></Route>
          <Route
            path="/program"
            element={
              <Program
                setThisProgramData={setThisProgramData}
                thisProgramData={thisProgramData}
              />
            }
          ></Route>
        </Route>
      </Routes>
    </Wrap>
  );
}

export default App;
