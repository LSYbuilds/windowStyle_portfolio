import React from "react";
import { WarningModalWrap } from "../../style/common/Modal_styled";

const WarningModal = ({ setIsProgram }) => {
  // 정규식
  const publicPath = (path) => {
    return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
  };
  return (
    <WarningModalWrap>
      <div className="inner">
        <div className="title_bar">
          <p>Windows XP</p>{" "}
          <button
            className="close_btn"
            onClick={() => setIsProgram(false)}
          ></button>
        </div>
        <div className="content">
          <div className="icon">
            <img src={publicPath("/icon/Information.png")} alt="경고이미지" />
          </div>
          <div className="content_text">
            <p>해당 프로그램을 실행할 수 없습니다.</p>
            <p>
              <i>현재 프로그램이 이미 실행 중이거</i> 나 파일을 찾을 수
              없습니다.
            </p>
          </div>
        </div>
        <div className="button_area">
          <button className="ok_btn" onClick={() => setIsProgram(false)}>
            확인
          </button>
        </div>
      </div>
    </WarningModalWrap>
  );
};

export default WarningModal;
