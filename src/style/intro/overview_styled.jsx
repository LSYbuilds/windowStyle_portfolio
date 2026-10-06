import styled from "@emotion/styled";

const publicPath = (path) => {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
};
export const OverViewWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
  .inner {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    .computer_box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 800px;
    }

    .computer_box::before {
      content: "";
      position: absolute;
      inset: 0;
      background: url(${publicPath("/bg/Computer_Case_Front.png")}) center /
        contain no-repeat;
      opacity: 0.5;
      filter: blur(2px);
      -webkit-mask-image: radial-gradient(
        ellipse,
        #000 40%,
        rgba(0, 0, 0, 0.5) 55%,
        rgba(0, 0, 0, 0.4) 70%,
        transparent 100%
      );

      mask-image: radial-gradient(
        ellipse,
        #000 40%,
        rgba(0, 0, 0, 0.5) 55%,
        rgba(0, 0, 0, 0.4) 70%,
        transparent 100%
      );
    }
    .power_on_btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 999;
      width: 150px;
      height: 150px;
      border-radius: 100%;
      box-shadow: 1px 1px 0px 10px #fff;
      background-color: rgba(255, 255, 255, 1);
      transition-duration: 0.3s;
      cursor: pointer;
      svg {
        path {
          fill: #585858;
        }
      }
      &:hover {
        box-shadow: 1px 1px 15px 10px #fff;
      }
    }
  }
`;
