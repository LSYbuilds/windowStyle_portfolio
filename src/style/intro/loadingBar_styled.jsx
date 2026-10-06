import styled from "@emotion/styled";

export const LoadingBarWrap = styled.div`
  font-family: "dotum";
  width: 100vw;
  height: 100vh;
  background-color: #000;
  .inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-bottom: 8%;
    color: #fff;
    font-size: 1.5em;
    .my_logo {
      width: fit-content;
      height: fit-content;
      img {
        width: 350px;
      }
    }
    .my_text {
      .sub_title {
        text-align: left;
        span {
          &:nth-of-type(2) {
            font-size: 0.5em;
          }
        }
      }
      .title {
        font-size: 2em;
        font-weight: 600;
      }
    }
    .loading_bar {
    }
    .loading_anime_box {
      width: 320px;
      height: 35px;
      border-radius: 10px;
      overflow: hidden;
      border: 3px solid #4d4d4d;
    }

    .loading_track {
      display: flex;
      width: max-content;
      height: 100%;

      animation: loadingMove 1s linear infinite;
    }

    .loading_track img {
      display: block;
      width: auto;
      height: 100%;
      flex-shrink: 0;
    }

    @keyframes loadingMove {
      from {
        transform: translateX(0);
      }

      to {
        transform: translateX(1000%);
      }
    }
  }
`;
