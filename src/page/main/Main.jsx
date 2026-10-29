import React, { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence, motion } from "motion/react";
import IconData from "../../assets/data/IconData.json";
import ToolsData from "../../assets/data/ToolsData.json";
import WindowView from "../../components/main/WindiwView";
import FolderModal from "../../components/common/folderModal";
import ResumeModal from "../../components/common/ResumeModal";
import RunningModal from "../../components/common/RunningModal";
import WarningModal from "../../components/common/WarningModal";
import MouseMenuModal from "../../components/common/MouseMenuModal";
import { useOutletContext } from "react-router-dom";
import Program from "../../page/main/Program";
import { MainWrap } from "../../style/main/main_styled";
import { retry } from "@reduxjs/toolkit/query";
const Main = ({ setThisProgramData }) => {
  const [fadeAnime, setFadeAnime] = useState(true);

  // // 마우스클릭메뉴
  // const [mouseMenu, setMouseMenu] = useState({
  //   open: false,
  //   x: 0,
  //   y: 0,
  // });

  // 아웃렛컨텍스트
  const { openWindowModal } = useOutletContext();
  // 프로그램데이터 가져오기
  const programData = ToolsData.toolsDataList;
  const [programDataList, setProgramDataList] = useState(programData);
  // 모달(프로그램실행) 스테이트
  const [isProgram, setIsProgram] = useState(null);
  // 바텀 바 데이터
  const openProgramIds = useSelector((state) => state.bottomBar.openProgramIds);
  // 바텀 바 클릭 데이터 불러오기
  const bottomBarThisIds = useSelector(
    (state) => state.bottomThis.thisBottomIds,
  );
  // 아이콘 클릭 데이터 불러오기
  const clickIconIdx = useSelector((state) => state.iconClick.openIconClickIdx);

  // const renderModal = () => {
  //   if (!clickIconIdx) return null;
  //   if (clickIconIdx) {
  //     switch (clickIconIdx.class) {
  //       case "folder":
  //         return <FolderModal />;
  //       case "file":
  //         switch (clickIconIdx.detail) {
  //           case "picture":
  //             return null;
  //           case "word":
  //             return <ResumeModal />;
  //           default:
  //             return null;
  //         }
  //       default:
  //         return null;
  //     }
  //   }
  // };

  // 폴더 및 파일 모달창 코드
  // const renderModal = () => {
  //   if (!isModal) return null;
  //   if (clickData.class === "folder") {
  //     // return (
  //     //   <FolderModal
  //     //     clickData={clickData}
  //     //     setIsModal={setIsModal}
  //     //     setIsProgram={setIsProgram}
  //     //     setThisProgramData={setThisProgramData}
  //     //   />
  //     // );
  //   }
  //   if (clickData.class === "file") {
  //     switch (clickData.detail) {
  //       case "word":
  //         return <ResumeModal setIsModal={setIsModal} />;
  //       case "picture":
  //         return null;
  //       default:
  //         return null;
  //     }
  //   }
  //   return null;
  // };

  // 프로그램 실행창 모달코드
  const renderProgramModal = () => {
    if (!isProgram) return null;
    const thisProgramData = programDataList.find(
      (item) => item.id === isProgram.index,
    );
    if (!thisProgramData) return null;
    switch (thisProgramData.func) {
      case "1":
        return (
          <RunningModal
            thisProgramData={thisProgramData}
            setIsProgram={setIsProgram}
          />
          // navigate("/program")
        );
      case "0":
        return <WarningModal setIsProgram={setIsProgram} />;
      default:
        return null;
    }
  };

  // 마우스오른쪽클릭 코드
  const handleMouseMenuOpen = (e) => {
    e.preventDefault();
    setMouseMenu({
      open: false,
      x: 0,
      y: 0,
    });
    if (mouseMenu.open === true) {
      return <MouseMenuModal mouseMenu={mouseMenu}></MouseMenuModal>;
    }
  };

  console.log("이즈프로그램", isProgram);
  console.log("프로그램데이터", programDataList);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeAnime(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MainWrap>
      <AnimatePresence>
        {fadeAnime && (
          <motion.div
            className="fade_bg"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>
      {/* {renderModal()}
      {renderProgramModal()} */}
      <WindowView openWindowModal={openWindowModal} />
    </MainWrap>
  );
};

export default Main;

// TEST
