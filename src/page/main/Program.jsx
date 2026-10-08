import React, { useEffect, useState } from "react";
import { ProgramModalWrap } from "../../style/common/Modal_styled";

const ProgramModal = ({ thisProgramData }) => {
  const [running, setRunning] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setRunning(true);
    }, 1500);
  });
  return (
    <ProgramModalWrap>
      <div className="inner"></div>
    </ProgramModalWrap>
  );
};

export default ProgramModal;
