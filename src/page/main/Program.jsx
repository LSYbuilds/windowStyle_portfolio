import React, { use, useEffect, useState } from "react";
import HtmlProgram from "../../components/main/HtmlProgram";
import ProgramData from "../../assets/data/ToolsData.json";
import { HtmlProgramWrap } from "../../style/common/Program_styled";

const Program = ({ setThisProgramData, thisProgramData }) => {
  console.log("이거뭐냐", thisProgramData);
  const ProgramDateSet = ProgramData.toolsDataList;
  const thisData = ProgramDateSet.find(
    (item) => item.title === thisProgramData,
  );
  const [machProgramData, setMachProgramData] = useState(thisData);
  console.log("매치데이터", machProgramData);
  // const rendarProgram = () => {
  //   if (!thisProgramData) return null;
  //   if (thisProgramData) {
  //     const data = ProgramDateSet.find(
  //       (item) => item.title === thisProgramData,
  //     );
  //     setMachProgramData(data);
  //     console.log("매치데이터", data);
  //   }
  //   switch (thisProgramData) {
  //     case "HTML5":
  //       return <HtmlProgram machProgramData={machProgramData} />;
  //     default:
  //       return null;
  //   }
  // };
  // const machdate = () => {
  //   if (!thisProgramData) return null;
  //   if (thisProgramData) {
  //     const data = ProgramDateSet.find(
  //       (item) => item.title === thisProgramData,
  //     );
  //     setMachProgramData(data);
  //     console.log("매치데이터", data);
  //   }
  // };

  // useEffect(() => {
  //   machdate();
  // }, [thisProgramData]);

  return (
    <HtmlProgramWrap>
      <div className="inner">
        <section className="hero"></section>
        <section className="text_script"></section>
      </div>
    </HtmlProgramWrap>
  );
};

export default Program;
