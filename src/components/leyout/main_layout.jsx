import React, { use, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import WindowBottomBar from "../main/WindowBottomBar";

const Mainlayout = ({ setIsModal }) => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <WindowBottomBar setIsModal={setIsModal} />
    </>
  );
};

export default Mainlayout;
