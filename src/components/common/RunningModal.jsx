import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RunningModalWarp } from "../../style/common/Modal_styled";
const RunningModal = ({ thisProgramData, setIsProgram }) => {
  const navigate = useNavigate();
  const publicPath = (path) => {
    return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/program");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <RunningModalWarp>
      <div className="inner">
        <div className="icon_img_box">
          <img src={publicPath(thisProgramData.src)} alt="아이콘이미지" />
        </div>
        <div className="loading_anime_box">
          <div className="loading_track">
            <img
              src={publicPath("/img/loadingBar_img2.png")}
              alt="프로그래스 바"
            />
          </div>
        </div>
      </div>
    </RunningModalWarp>
  );
};

export default RunningModal;
