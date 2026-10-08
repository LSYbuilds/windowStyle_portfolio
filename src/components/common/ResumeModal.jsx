import React, { useState } from "react";
import { ResumeModalWrap } from "../../style/common/Modal_styled";
import { motion, useDragControls } from "framer-motion";
import Icon from "./SvgComponents";
const ResumeModal = ({ setIsModal }) => {
  const [full, setFull] = useState(false);
  const [innerFull, setInnerFull] = useState(false);
  const dragControls = useDragControls();
  const defaultStyle = { width: "80%", height: "80%" };
  const innerDefultStyle = { width: "50%" };
  const innerFullStyle = { width: "100%" };
  const fullStyle = {
    width: "100%",
    height: "100%",
    transform: "translate(0px, 0px)",
    top: "0px",
    left: "0px",
  };
  const [modalStyle, setModalStyle] = useState(defaultStyle);
  const [innerStyle, setInnerStyle] = useState(innerDefultStyle);
  return (
    <ResumeModalWrap
      style={modalStyle}
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
    >
      <div
        className="resume_bar"
        onPointerDown={(e) => {
          dragControls.start(e);
        }}
      >
        {/* 상단 영역 */}
        <div className="word_top">
          <div className="word_info">
            <div className="word_logo">W</div>

            <div className="auto_save">
              <span>자동 저장</span>

              <button className="toggle">
                <span></span>
              </button>
            </div>

            <button className="save" aria-label="저장">
              <Icon.saveFilled />
            </button>

            <button className="arrow_wise" aria-label="다시 실행">
              <Icon.arrowBack />
            </button>

            <button className="arrow_back" aria-label="실행 취소">
              <Icon.arrowWise />
            </button>
            <div className="default_name">
              <span>문서1</span>
              <span>- Word</span>
            </div>
          </div>

          <div className="word_right">
            <div className="search">
              <span className="search_icon"></span>
              <span className="search_text">검색</span>
            </div>

            <button className="login">로그인</button>

            <div className="window_button">
              <button className="minimal" aria-label="최소화">
                <span></span>
              </button>
              {full ? (
                <button
                  className="restore"
                  aria-label="축소"
                  onClick={() => {
                    {
                      (setModalStyle(defaultStyle), setFull(false));
                    }
                  }}
                ></button>
              ) : (
                <button
                  className="max"
                  aria-label="복원"
                  onClick={() => {
                    (setModalStyle(fullStyle), setFull(true));
                  }}
                ></button>
              )}

              <button
                className="close"
                onClick={() => {
                  setIsModal(false);
                }}
              >
                <span></span>
              </button>
            </div>
          </div>
        </div>

        {/* 메뉴 */}
        <ul className="word_bottom">
          <li>파일</li>
          <li>홈</li>
          <li>삽입</li>
          <li>디자인</li>
          <li>레이아웃</li>
          <li>참조</li>
          <li>편지</li>
          <li>검토</li>
          <li>보기</li>
          {innerFull ? (
            <li
              className="zoom"
              onClick={() => {
                (setInnerFull(false), setInnerStyle(innerDefultStyle));
              }}
            >
              문서축소
            </li>
          ) : (
            <li
              className="zoom"
              onClick={() => {
                (setInnerFull(true), setInnerStyle(innerFullStyle));
              }}
            >
              문서확대
            </li>
          )}
        </ul>
      </div>

      {/* 문서 영역 */}
      <div className="inner">
        <div className="inner_item">
          <div className="paper" style={innerStyle}>
            {/* 여기에 이력서 내용 */}
          </div>
        </div>
      </div>
    </ResumeModalWrap>
  );
};

export default ResumeModal;
