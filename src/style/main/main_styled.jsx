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
  padding: 16px;
  .icon_list_box {
    li {
      display: flex;
      flex-direction: column;
      gap: 4px;
      width: 100px;
      .icon_img_box {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 50px;
        img {
          height: 100%;
        }
      }
      .icon_text {
        text-align: center;
        color: #fff;
      }
    }
  }
`;
