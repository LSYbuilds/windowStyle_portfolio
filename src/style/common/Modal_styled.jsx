import styled from "@emotion/styled";
import { motion } from "framer-motion";

const publicPath = (path) => {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
};

export const FolderModalWrap = styled(motion.div)`
  position: fixed;
  z-index: 800;
  top: 0px;
  left: 0px;
  width: 40%;
  height: 60%;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #184bc1;
  .folder_bar {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #f3f1e8;
    border-bottom: 1px solid #93adc4;
    cursor: default;
    .top_bar {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 35px;
      background-color: #2259d7;
      box-sizing: border-box;
      &::before {
        position: absolute;
        top: 5px;
        left: 0px;
        content: "";
        width: 100%;
        height: 3px;
        background-color: rgb(255, 255, 255, 0.3);
        filter: blur(3px);
      }
      .icon_name {
        display: flex;
        align-items: center;
        height: 100%;
        .icon_img {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 30px;
          height: 100%;
          img {
            width: 70%;
            aspect-ratio: 1;
            height: fit-content;
          }
        }
        .folder_name {
          color: #fff;
        }
      }
      .folder_button {
        display: flex;
        justify-content: flex-end;
        padding: 5px;
        height: 100%;
        gap: 4px;
        button {
          width: 25px;
          height: 100%;
          border: none;
          background-color: none;
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }
        .minimal {
          background-image: url(${publicPath("/icon/Minimize.png")});
        }
        .full {
          background-image: url(${publicPath("/icon/Maximize.png")});
        }
        .close {
          background-image: url(${publicPath("/icon/Exit.png")});
        }
        .restore {
          background-image: url(${publicPath("/icon/Restore.png")});
        }
      }
    }
  }
  .folder_funtion_bar {
    display: flex;
    flex-direction: column;
    .file_func_top {
      display: flex;
      align-items: center;
      width: 100%;
      height: 30px;
      font-size: 0.875em;
      gap: 8px;
      border-bottom: 1px solid #dfdbc9;
      li {
        align-content: center;
        height: 100%;
        padding: 0px 4px;
        &:hover {
          background-color: #2259d7;
          color: #fff;
        }
      }
    }
    .file_func_bottom {
      display: flex;
      height: 50px;
      padding: 4px 0px;
      li {
        display: flex;
        gap: 4px;
        padding: 0px 8px;
        justify-content: center;
        align-items: center;
        align-content: center;
        height: 100%;
        img {
          height: 25px;
        }
        &:nth-of-type(2) {
          img {
            rotate: 180deg;
            opacity: 0.1;
          }
        }
        &:nth-of-type(3) {
          border-right: 1px solid #dfdbc9;
        }
        &:nth-of-type(5) {
          border-right: 1px solid #dfdbc9;
        }
      }
    }
    .file_address {
      display: flex;
      height: 30px;
      p {
        align-content: center;
        height: 100%;
        padding: 0px 8px;
        font-size: 0.875em;
      }
    }
  }
  .inner {
    width: 100%;
    height: 100%;
    .item_list {
      width: 100%;
      height: 100%;
      gap: 16px;
      display: flex;
      flex-wrap: wrap;
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
          color: #000;
        }
      }
      .clickIcon {
        background-color: #5656d3;
      }
    }
  }
`;

export const ResumeModalWrap = styled.div``;
