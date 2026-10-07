import styled from "@emotion/styled";

const publicPath = (path) => {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
};

export const MainWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${publicPath("/bg/windowBg.jpg")});
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

export const FolderModalWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);
  width: 40%;
  height: 60%;
  background-color: #fff;
  .folder_bar {
    display: flex;
    flex-direction: column;
    width: 100%;
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
        height: 100%;
        button {
          width: 35px;
          height: 100%;
          border: none;
          background-repeat: no-repeat;
        }
        .minimal {
          background-image: url(${publicPath("/icon/Minimize.png")});
        }
      }
    }
  }
`;
