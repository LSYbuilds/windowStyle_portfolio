import React from "react";
import { useDispatch } from "react-redux";
import { removeIconClickData } from "../../redux/iconClickSlice";
import { WarningModalWrap } from "../../style/common/Modal_styled";

const WarningModal = ({ setIsQuickModal }) => {
  // 정규식
  const publicPath = (path) => {
    return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
  };
  // 리덕스
  const dispatch = useDispatch();

  const closefunc = () => {
    dispatch(removeIconClickData());
  };
  return (
    <WarningModalWrap>
      <div className="inner">
        <div className="title_bar">
          <p>Windows XP</p>
          <button
            className="close_btn"
            onClick={() => setIsQuickModal()}
          ></button>
        </div>
        <div className="content">
          <div className="icon">
            <img src={publicPath("/icon/Information.png")} alt="경고이미지" />
          </div>
          <div className="content_text">
            <p>해당 프로그램을 실행할 수 없습니다.</p>
            <p>
              <i>현재 프로그램이 이미 실행 중이거</i>나 실행 권한이 없습니다.
            </p>
          </div>
        </div>
        <div className="button_area">
          <button className="ok_btn" onClick={closefunc}>
            확인
          </button>
        </div>
      </div>
    </WarningModalWrap>
  );
};

export default WarningModal;
