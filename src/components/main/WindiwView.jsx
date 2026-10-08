import React, { useState } from "react";
import { WindowViewWrap } from "../../style/main/main_styled";
import IconData from "../../assets/data/IconData.json";
import ToolsData from "../../assets/data/ToolsData.json";
import FolderModal from "../common/FolderModal";
import ResumeModal from "../common/ResumeModal";
import ProgramModal from "../../page/main/Program";

const WindowView = () => {
  // 아이콘데이터 가져오기
  const IconList = IconData.iconDataList;
  const [iconListData, setIconListData] = useState(IconList);
  const programData = ToolsData.toolsDataList;
  // 프로그램데이터 가져오기
  const [programDataList, setProgramDataList] = useState(programData);
  const [iconClickIndex, setIconClickIndex] = useState(null);
  const [clickData, setClickData] = useState(null);
  // 모달스테이트
  const [isModal, setIsModal] = useState(false);
  // 모달(프로그램실행) 스테이트
  const [isProgram, setIsProgram] = useState(null);
  console.log("클릭데이터", clickData);
  // 정규식
  const publicPath = (path) => {
    return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
  };
  // <FolderModal clickData={clickData} setIsModal={setIsModal} />

  // 폴더 및 파일 모달창 코드
  const renderModal = () => {
    if (!isModal || !clickData) return null;
    if (clickData.class === "folder") {
      return (
        <FolderModal
          clickData={clickData}
          setIsModal={setIsModal}
          setIsProgram={setIsProgram}
        />
      );
    }
    if (clickData.class === "file") {
      switch (clickData.detail) {
        case "word":
          return <ResumeModal setIsModal={setIsModal} />;
        case "picture":
          return null;
        default:
          return null;
      }
    }
    return null;
  };

  //   const thisProgramData = programDataList.find(
  //   (item) => item.id === isProgram.index,
  // );
  // console.log("해당 데이터", thisProgramData);
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
          <ProgramModal
            thisProgramData={thisProgramData}
            setIsProgram={setIsProgram}
          />
        );
      case "0":
        return <WarningModal setIsProgram={setIsProgram} />;
      default:
        return null;
    }
  };
  console.log("이즈프로그램", isProgram);
  console.log("프로그램데이터", programDataList);

  return (
    <WindowViewWrap>
      {renderModal()}
      {renderProgramModal()}
      <ul className="icon_list_box">
        {iconListData.map((item, idx) => (
          <li
            key={idx}
            onClick={() => {
              (setIconClickIndex(idx), setClickData(item), setIsModal(true));
            }}
            className={iconClickIndex === idx ? "clickIcon" : ""}
          >
            <div className="icon_img_box">
              {item.class === "shot" ? (
                <a href={item.address}>
                  <img src={publicPath(item.src)} alt="아이콘이미지" />
                </a>
              ) : (
                <img src={publicPath(item.src)} alt="아이콘이미지" />
              )}
              {item.class === "shot" ? <div className="shotcutIcon"></div> : ""}
            </div>

            <div className="icon_text">{item.title}</div>
          </li>
        ))}
      </ul>
    </WindowViewWrap>
  );
};

export default WindowView;
