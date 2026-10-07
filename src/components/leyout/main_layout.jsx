import React from "react";
import { Outlet } from "react-router-dom";
import WindowBottomBar from "../main/WindowBottomBar";

const Mainlayout = ({ bottomBar, setBottomBar }) => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <WindowBottomBar bottomBar={bottomBar} setBottomBar={setBottomBar} />
    </>
  );
};

export default Mainlayout;
