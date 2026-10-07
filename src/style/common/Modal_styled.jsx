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

export const ResumeModalWrap = styled(motion.div)`
  position: fixed;
  z-index: 800;

  width: 80%;
  height: 80%;

  top: 30px;
  left: 30px;

  display: flex;
  flex-direction: column;

  background-color: #fff;

  border: 1px solid #d1d1d1;

  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.2),
    0 8px 24px rgba(0, 0, 0, 0.12);

  overflow: hidden;

  font-family: "Segoe UI", "Malgun Gothic", Arial, sans-serif;

  color: #202020;

  /* ---------------------------------
     Word 상단 전체
  --------------------------------- */

  .resume_bar {
    width: 100%;
    flex-shrink: 0;

    background-color: #fff;
  }

  /* ---------------------------------
     최상단
  --------------------------------- */

  .word_top {
    width: 100%;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-left: 14px;

    border-bottom: 1px solid #e5e5e5;

    background-color: #fff;
  }

  /* 왼쪽 영역 */

  .word_info {
    height: 100%;

    display: flex;
    align-items: center;

    gap: 10px;

    white-space: nowrap;
  }

  /* Word 로고 */

  .word_logo {
    width: 22px;
    height: 22px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #185abd;

    color: #fff;

    font-size: 13px;
    font-weight: 700;

    border-radius: 2px;

    position: relative;
  }

  .word_logo::after {
    content: "";

    position: absolute;

    left: 3px;
    bottom: 3px;

    width: 6px;
    height: 8px;

    border: 1px solid rgba(255, 255, 255, 0.7);
  }

  /* 자동 저장 */

  .auto_save {
    display: flex;
    align-items: center;

    gap: 6px;

    font-size: 13px;

    color: #3f3f3f;
  }

  /* 토글 */

  .toggle {
    width: 38px;
    height: 20px;

    padding: 2px;

    border: 1px solid #b7b7b7;
    border-radius: 20px;

    background-color: #fff;

    display: flex;
    align-items: center;

    cursor: default;
  }

  .toggle span {
    width: 14px;
    height: 14px;

    border-radius: 50%;

    background-color: #6f6f6f;

    display: block;
  }

  /* 상단 버튼 공통 */

  .save,
  .arrow_wise,
  .arrow_back,
  .drop_button {
    width: 26px;
    height: 26px;

    padding: 0;

    border: 0;

    background: transparent;

    position: relative;

    cursor: default;
  }

  /* 저장 아이콘 */

  .save::before {
    content: "";

    position: absolute;

    width: 15px;
    height: 15px;

    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    background-color: #9b45b5;

    border-radius: 2px;
  }

  .save::after {
    content: "";

    position: absolute;

    width: 7px;
    height: 5px;

    left: 50%;
    top: 5px;

    transform: translateX(-50%);

    background-color: #fff;
  }

  /* 실행 취소 */

  .arrow_back::before {
    content: "↶";

    position: absolute;

    left: 50%;
    top: 50%;

    transform: translate(-50%, -55%);

    font-size: 23px;
    font-weight: 300;

    color: #858585;
  }

  /* 다시 실행 */

  .arrow_wise::before {
    content: "↷";

    position: absolute;

    left: 50%;
    top: 50%;

    transform: translate(-50%, -55%);

    font-size: 23px;
    font-weight: 300;

    color: #858585;
  }

  /* 드롭다운 */

  .drop_button::before {
    content: "⌄";

    font-size: 15px;

    color: #555;
  }

  /* 접근성용 텍스트 숨기기 */

  .save span,
  .arrow_wise span,
  .arrow_back span,
  .drop_button span {
    position: absolute;

    width: 1px;
    height: 1px;

    overflow: hidden;

    clip: rect(0, 0, 0, 0);
  }

  /* 문서명 */

  .default_name {
    display: flex;
    align-items: center;

    margin-left: 8px;

    font-size: 14px;

    color: #444;
  }

  .default_name span:first-child {
    font-weight: 500;
  }

  .default_name span:last-child {
    margin-left: 4px;
  }

  /* ---------------------------------
     오른쪽
  --------------------------------- */

  .word_right {
    height: 100%;

    display: flex;
    align-items: center;

    margin-left: auto;
  }

  /* 검색 */

  .search {
    width: 395px;
    height: 34px;

    display: flex;
    align-items: center;

    padding: 0 12px;

    margin-right: 22px;

    border: 1px solid #d3d3d3;
    border-radius: 4px;

    background-color: #fff;

    color: #777;

    font-size: 13px;
  }

  .search_icon {
    width: 13px;
    height: 13px;

    margin-right: 10px;

    border: 2px solid #777;

    border-radius: 50%;

    position: relative;
  }

  .search_icon::after {
    content: "";

    position: absolute;

    width: 6px;
    height: 2px;

    right: -5px;
    bottom: -3px;

    background-color: #777;

    transform: rotate(45deg);
  }

  .search_text {
    color: #777;
  }

  /* 로그인 */

  .login {
    height: 28px;

    margin-right: 20px;

    padding: 0 10px;

    border: 1px solid #202020;
    border-radius: 3px;

    background-color: #fff;

    color: #202020;

    font-size: 12px;

    cursor: default;
  }

  /* ---------------------------------
     창 버튼
  --------------------------------- */

  .window_button {
    height: 100%;

    display: flex;
    align-items: stretch;
  }

  .window_button button {
    width: 42px;
    height: 100%;

    padding: 0;

    border: 0;

    background: transparent;

    position: relative;
  }

  /* 최소화 */

  .window_button .minimal::before {
    content: "";

    position: absolute;

    width: 10px;
    height: 1px;

    left: 50%;
    top: 53%;

    transform: translate(-50%, -50%);

    background-color: #333;
  }

  /* 복원 */

  .window_button .restore::before {
    content: "";

    position: absolute;

    width: 10px;
    height: 9px;

    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    border: 1px solid #333;
  }

  .window_button .restore::after {
    content: "";

    position: absolute;

    width: 7px;
    height: 6px;

    left: calc(50% - 4px);
    top: calc(50% - 5px);

    border-top: 1px solid #333;
    border-right: 1px solid #333;
  }

  /* 닫기 */

  .window_button .close::before,
  .window_button .close::after {
    content: "";

    position: absolute;

    width: 14px;
    height: 1px;

    left: 50%;
    top: 50%;

    background-color: #333;
  }

  .window_button .close::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  .window_button .close::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  /* hover */

  .window_button button:hover {
    background-color: #f0f0f0;
  }

  .window_button .close:hover {
    background-color: #e81123;
  }

  .window_button .close:hover::before,
  .window_button .close:hover::after {
    background-color: #fff;
  }

  /* ---------------------------------
     Word 메뉴
  --------------------------------- */

  .word_bottom {
    width: 100%;
    height: 37px;

    display: flex;
    align-items: center;

    gap: 25px;

    padding: 0 20px;

    margin: 0;

    border-bottom: 1px solid #d8d8d8;

    list-style: none;

    background-color: #fff;
  }

  .word_bottom li {
    height: 100%;

    display: flex;
    align-items: center;

    position: relative;

    font-size: 14px;

    color: #333;

    cursor: default;
  }

  .word_bottom li.active {
    font-weight: 600;
  }

  .word_bottom li.active::after {
    content: "";

    position: absolute;

    left: 0;
    right: 0;
    bottom: 0;

    height: 2px;

    background-color: #185abd;
  }

  /* ---------------------------------
     실제 문서 영역
  --------------------------------- */

  .inner {
    width: 100%;
    height: calc(100% - 85px);

    overflow: auto;

    background-color: #f3f3f3;

    padding: 35px 40px;
  }

  .inner_item {
    width: 100%;
    min-height: 100%;

    display: flex;
    justify-content: center;
  }

  /* 실제 종이 */

  .paper {
    width: 794px;
    min-height: 1123px;

    background-color: #fff;

    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  }
`;
