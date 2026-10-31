import React, { use, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import WindowBottomBar from "../main/WindowBottomBar";
import WarningModal from "../common/WarningModal";
import FolderModal from "../common/folderModal";

const Mainlayout = () => {
  // 모달(빠른메뉴) 스테이트
  const [isQuickModal, setIsQuickModal] = useState(false);
  // 모달(윈도우) 스테이트
  const [isWindowModal, setIsWindowModal] = useState(false);
  // 아이콘 클릭 데이터 스테이트
  const clickIconIdx = useSelector((state) => state.iconClick.openIconClickIdx);

  // console.log("빠른선택메뉴", clickIconIdx);

  const openQuickModal = () => {
    setIsQuickModal(true);
    setIsWindowModal(false);
  };

  const openWindowModal = () => {
    setIsWindowModal(true);
    setIsQuickModal(false);
  };

  // 빠른선택에서 눌렀을시 나오는 모달
  const renderModal = () => {
    if (!clickIconIdx) return null;
    switch (clickIconIdx.func) {
      case "0":
        return <WarningModal />;

      case "1":
        if (clickIconIdx.class === "folder") {
          return <FolderModal />;
        }
        return null;

      default:
        return null;
    }
  };

  // const windowRenderModal = () => {
  //   if (!isWindowModal || !clickIconIdx) return null;
  //   switch (clickIconIdx.func) {
  //     case "0":
  //       return <WarningModal setIsQuickModal={setIsQuickModal} />;

  //     case "1":
  //       switch (clickIconIdx.class) {
  //         case "folder":
  //           return <FolderModal />;

  //         default:
  //           return null;
  //       }

  //     default:
  //       return null;
  //   }
  // };
  return (
    <>
      <main>
        <Outlet context={{ openWindowModal }} />
        {renderModal()}
      </main>
      <WindowBottomBar openQuickModal={openQuickModal} />
    </>
  );
};

export default Mainlayout;
