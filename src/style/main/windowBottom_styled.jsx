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
        }
        &:hover {
          background: linear-gradient(
            90deg,
            #4db84b 89%,
            rgba(24, 91, 58, 1) 100%
          );
        }
      }
    }
  }
`;
