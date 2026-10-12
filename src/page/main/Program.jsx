import React, { use, useEffect, useState } from "react";
import HtmlProgram from "../../components/main/HtmlProgram";
import ProgramData from "../../assets/data/ToolsData.json";
import { ProgramWrap } from "../../style/common/Program_styled";

const Program = ({ setThisProgramData, thisProgramData }) => {
  console.log("이거뭐냐", thisProgramData);
  const ProgramDateSet = ProgramData.toolsDataList;
  const thisData = ProgramDateSet.find(
    (item) => item.title === thisProgramData,
  );
  const [machProgramData, setMachProgramData] = useState(thisData);
  console.log("매치데이터", machProgramData);

  // thisProgramData 분기
  const renderProgramView = () => {
    if (!thisProgramData) return null;
    switch (thisProgramData) {
      case "HTML5":
        return <HtmlProgram machProgramData={machProgramData} />;
      case "CSS":
        return <></>;
      case "Adobe Photoshop":
        return <></>;
      case "Figma":
        return <></>;
      case "GitHub":
        return <></>;
      default:
        return null;
    }
  };
  return (
    <ProgramWrap>
      <div className="inner">{renderProgramView()}</div>
    </ProgramWrap>
  );
};

export default Program;
