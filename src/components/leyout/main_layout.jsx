import React, { use, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import WindowBottomBar from "../main/WindowBottomBar";
import WarningModal from "../common/WarningModal";

const Mainlayout = () => {
  const [selectQuick, setSelectQuick] = useState(null);
  // 모달(프로그램실행) 스테이트
  const [isQuickModal, setIsQuickModal] = useState(false);
  console.log("빠른선택메뉴", selectQuick);

  const quickRenderModal = () => {
    if (!isQuickModal) return null;
    if (selectQuick && isQuickModal) {
      switch (selectQuick.func) {
        case "0":
          return <WarningModal setIsQuickModal={setIsQuickModal} />;
        case "1":

        default:
          return null;
      }
    }
  };
  return (
    <>
      <main>
        <Outlet />
        {quickRenderModal()}
      </main>
      <WindowBottomBar
        setSelectQuick={setSelectQuick}
        setIsQuickModal={setIsQuickModal}
      />
    </>
  );
};

export default Mainlayout;
