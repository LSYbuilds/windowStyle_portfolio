import { Route } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { LoadingBarWrap } from "../../style/intro/loadingBar_styled";
import { LoadingBarBox } from "../../style/intro/Swiper_styled";
import { useNavigate } from "react-router-dom";
import Icon from "../common/SvgComponents";
import { useEffect } from "react";
const LoadingBar = () => {
  // 정규식
  const publicPath = (path) => {
    return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
  };
  const navigate = useNavigate();
  useEffect(() => {
    setInterval(() => {
      navigate("/main");
    }, 1500);
  });
  return (
    <LoadingBarWrap>
      <div className="inner">
        <div className="my_logo">
          <img src={publicPath("/bg/logo_clear.png")} alt="" />
        </div>
        <div className="my_text">
          <p className="sub_title">
            <span>LSYSOFT</span>
            <span>㉿</span>
          </p>
          <p className="title">LSY Potfolio</p>
        </div>
        <div className="loading_anime_box">
          <div className="loading_track">
            <img
              src={publicPath("/img/loadingBar_img.png")}
              alt="프로그래스 바"
            />
          </div>
        </div>
      </div>
    </LoadingBarWrap>
  );
};

export default LoadingBar;
