import styled from "@emotion/styled";
import { motion } from "framer-motion";

const publicPath = (path) => {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
};

export const MainWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;
  background-image: url(${publicPath("/bg/windowBg.jpg")});
  background-size: cover;
  background-repeat: no-repeat;
  .fade_bg {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: #000000;
  }
`;

export const WindowViewWrap = styled.div`
  width: 100%;
  height: 100%;
  .icon_list_box {
    width: 100%;
    height: 100%;
    gap: 16px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: baseline;
    padding: 16px;
    padding-bottom: 80px;
    li {
      display: flex;
      flex-direction: column;
      gap: 4px;
      width: 80px;
      .icon_img_box {
        position: relative;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 50px;
        img {
          height: 100%;
        }
        .shotcutIcon {
          position: absolute;
          left: 10%;
          bottom: 0px;
          width: 16px;
          height: 16px;
          background-image: url(${publicPath("/icon/shotcut.png")});
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }
      }
      .icon_text {
        height: 20px;
        text-align: center;
        color: #fff;
      }
    }
    .clickIcon {
      background-color: #5656d3;
    }
  }
`;
