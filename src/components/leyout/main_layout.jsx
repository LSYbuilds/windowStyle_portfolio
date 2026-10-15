import React, { use, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import WindowBottomBar from "../main/WindowBottomBar";

const Mainlayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <WindowBottomBar />
    </>
  );
};

export default Mainlayout;
