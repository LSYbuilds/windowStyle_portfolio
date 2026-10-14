import styled from "@emotion/styled";

export const WindowBottomWrap = styled.div`
  z-index: 800;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100vw;
  height: 40px;
  .inner {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
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
    .quick_menu_box {
      display: flex;
      justify-content: flex-start;
      gap: 8px;
      .quick_menu {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 8px;
        padding: 0px 8px;
        width: 125px;
        height: 100%;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        background: #48a547;
        cursor: pointer;
        background: linear-gradient(
          90deg,
          rgba(72, 165, 71, 1) 89%,
          rgba(24, 91, 58, 1) 100%
        );
        .quick_img {
          width: 27px;
          img {
            width: 27px;
          }
        }
        span {
          font-style: italic;
          font-weight: bold;
          color: #fff;
          font-size: 1.125em;
          &:before {
            content: "시작";
          }
        }
        &:hover {
          background: linear-gradient(
            90deg,
            #4db84b 89%,
            rgba(24, 91, 58, 1) 100%
          );
        }
      }
      .bottom_list {
        width: 800px;
        height: 100%;
        position: relative;
        display: flex;
        gap: 8px;
        li {
          position: relative;
          display: flex;
          flex: 1 1 10%;
          max-width: 30%;
          cursor: pointer;
          background-color: #3c81f3;
          &:hover {
            background-color: #5992ee;
          }
          &::before {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            content: "";
            width: 99%;
            height: 80%;
            border: 2px solid #4e8cee;
            filter: blur(1px);
          }
          .icon_box {
            width: 40px;
            height: 40px;
            padding: 3%;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .icon_text {
            align-content: center;
            color: #fff;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    height: 60px;
    .inner {
      background-color: #2259d7;
      justify-content: center;
      .quick_menu_box {
        position: relative;
        .quick_menu {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 100%;
          width: 60px;
          height: 60px;
          gap: 0px;
          justify-content: center;
          background: #48a547;
          background: linear-gradient(none);
          padding: 0px 0px;
          .quick_img {
            display: flex;
            justify-content: center;
            width: 100%;
            img {
              width: 100%;
            }
          }
          span {
            &:before {
              content: "";
            }
          }
        }
      }
    }
  }
`;
