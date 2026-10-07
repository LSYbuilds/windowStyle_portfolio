import React from "react";
import { ResumeModalWrap } from "../../style/common/Modal_styled";
import { motion, useDragControls } from "framer-motion";
import Icon from "./SvgComponents";
const ResumeModal = () => {
  const dragControls = useDragControls();
  return (
    <ResumeModalWrap
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
    >
      <div className="resume_bar">
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

              <button className="restore" aria-label="복원">
                <span></span>
              </button>

              <button className="close" aria-label="닫기">
                <span></span>
              </button>
            </div>
          </div>
        </div>

        {/* 메뉴 */}
        <ul className="word_bottom">
          <li>파일</li>
          <li className="active">홈</li>
          <li>삽입</li>
          <li>디자인</li>
          <li>레이아웃</li>
          <li>참조</li>
          <li>편지</li>
          <li>검토</li>
          <li>보기</li>
          <li>도움말</li>
        </ul>
      </div>

      {/* 문서 영역 */}
      <div className="inner">
        <div className="inner_item">
          <div className="paper">{/* 여기에 이력서 내용 */}</div>
        </div>
      </div>
    </ResumeModalWrap>
  );
};

export default ResumeModal;
