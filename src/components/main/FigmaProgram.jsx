import React from "react";
import { FigmaProgramWrap } from "../../style/common/Program_styled";

const FigmaProgram = ({ machProgramData }) => {
  const publicPath = (path) => {
    return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
  };
  return (
    <FigmaProgramWrap>
      <section className="hero">
        <div className="icon_img">
          <img src={publicPath(machProgramData.src)} alt="" />
        </div>
        <div className="icon_title">{machProgramData.title}</div>
      </section>
      <section className="figma_list_box">
        <ul className="figma_list"></ul>
      </section>
    </FigmaProgramWrap>
  );
};

export default FigmaProgram;
