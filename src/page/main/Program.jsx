import React from "react";

import HtmlProgram from "../../components/main/HtmlProgram";
import CssProgram from "../../components/main/CssProgram";
import PhotoProgram from "../../components/main/PhotoProgram";
import WarningModal from "../../components/common/WarningModal";
import FigmaProgram from "../../components/main/FigmaProgram";

import ProgramData from "../../assets/data/ToolsData.json";
import { ProgramWrap } from "../../style/common/Program_styled";

const Program = ({ setThisProgramData, thisProgramData }) => {
  // JSON 데이터
  const ProgramDateSet = ProgramData.toolsDataList;

  // public 경로 처리
  const publicPath = (path) => {
    return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
  };

  // 선택한 프로그램 제목에 해당하는 데이터 즉시 검색
  const machProgramData =
    ProgramDateSet.find((item) => item.title === thisProgramData) ?? null;

  console.log("선택한 프로그램:", thisProgramData);
  console.log("매칭된 프로그램 데이터:", machProgramData);

  // 선택한 프로그램에 따라 컴포넌트 렌더링
  const renderProgramView = () => {
    if (!thisProgramData) return null;

    switch (thisProgramData) {
      case "HTML5":
        return <HtmlProgram machProgramData={machProgramData} />;

      case "CSS":
        return <CssProgram machProgramData={machProgramData} />;

      case "Adobe Photoshop":
        return <PhotoProgram machProgramData={machProgramData} />;

      case "Figma":
        return <FigmaProgram machProgramData={machProgramData} />;

      case "GitHub":
        return <></>;

      case "REACT":
        return <WarningModal />;

      default:
        return null;
    }
  };

  return (
    <ProgramWrap>
      <div className="inner">
        <div className="program_category">
          <ul className="program_list">
            {ProgramDateSet.map((item) => (
              <li key={item.id} onClick={() => setThisProgramData(item.title)}>
                <div className="program_icon_img">
                  <img src={publicPath(item.src)} alt="" />
                </div>

                <div className="icon_text">{item.title}</div>
              </li>
            ))}
          </ul>
        </div>

        {renderProgramView()}
      </div>
    </ProgramWrap>
  );
};

export default Program;
