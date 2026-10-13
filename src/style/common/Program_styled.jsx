import styled from "@emotion/styled";

export const ProgramWrap = styled.div`
  font-family: "Pretendard", sans-serif;
  width: 100%;
  height: 100%;
  background-color: #0b1018;
  .inner {
    margin: 0 auto;
    max-width: 1400px;
    padding-top: 32px;
    padding-bottom: 200px;
    width: 100%;
    .program_category {
      margin-bottom: 32px;
      width: 100%;
      height: 100px;
      .program_list {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 16px;
        width: 100%;
        height: 100%;
        li {
          display: flex;
          flex-direction: column;
          width: 100px;
          height: 125px;
          border-radius: 16px;
          background-color: #c4c4c4;
          border: 3px solid #2d4058;
          cursor: pointer;
          .program_icon_img {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 60%;
            img {
              height: 75%;
            }
          }
          .icon_text {
            width: 100%;
            height: 20%;
            text-align: center;
            color: #000000;
            font-weight: 400;
          }
          &:hover {
            background-color: #b6b6b6;
          }
        }
      }
    }
  }
`;

export const HtmlProgramWrap = styled.div`
  font-family: "Pretendard", sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;

  /* Hero 영역 */
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    padding: 40px 24px 32px;
    box-sizing: border-box;
    color: #fff;
    text-align: center;

    .icon_img {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      width: 180px;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      background-color: aliceblue;
      overflow: hidden;

      img {
        width: 80%;
        height: 80%;
        object-fit: contain;
      }
    }

    .icon_title {
      font-size: clamp(1.5rem, 3vw, 2rem);
      font-weight: 700;
      line-height: 1.3;
      word-break: keep-all;
    }
  }

  /* 본문 영역 */
  .text_script {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 200px;
    margin-top: 24px;
    .script_area {
      display: flex;
      justify-content: space-between;
      gap: 40px;

      /* 이미지 영역 */
      .img_box {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        flex: 0 0 30%;
        min-width: 0;
        overflow: hidden;

        img {
          display: block;
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          height: auto;
          object-fit: contain;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.25);
          border: 2px solid #2d4058;
        }
      }

      /* 설명 영역 */
      .script_box {
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 32px;
        color: #fff;

        .title_group {
          display: flex;
          flex-direction: column;
          gap: 8px;

          .title {
            font-size: clamp(1.5rem, 3vw, 2.5rem);
            font-weight: 700;
            line-height: 1.3;
            word-break: keep-all;
          }
          .sub_title {
            font-size: 1.5em;
          }
        }
        .script_list {
          display: flex;
          flex-direction: column;
          gap: 32px;
          li {
            border: 3px solid #2d4058;
            padding: 3%;
            border-radius: 16px;
            font-size: 1.25em;
            line-height: 1.5em;
            background-color: #151f2d;
          }
        }
      }
    }
  }

  /* 태블릿 */
  @media (max-width: 1024px) {
  }

  /* 모바일 */
  @media (max-width: 640px) {
  }
`;

export const PhotoProgramWrap = styled.div`
  font-family: "Pretendard", sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  .max_size_wrap {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 900;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding: 24px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.7);
    .max_size_inner {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 1400px;
      height: 100%;
      max-height: 800px;
      box-sizing: border-box;
      background-color: #525252;
      border-radius: 8px;
      overflow: hidden;
      .max_size_info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        width: 100%;
        min-height: 68px;
        padding: 12px 20px;
        box-sizing: border-box;

        background-color: #303030;
        border-bottom: 1px solid rgba(255, 255, 255, 0.12);

        .img_info {
          min-width: 0;
          color: #f5f5f5;
          font-size: 1.05rem;
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: -0.02em;

          // 긴 제목이 영역을 벗어나지 않도록 처리
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .close_btn {
          display: flex;
          flex-shrink: 0;
          justify-content: center;
          align-items: center;

          width: 42px;
          height: 42px;
          padding: 0;

          color: #e5e5e5;
          background-color: #414141;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;

          cursor: pointer;
          transition:
            background-color 0.2s ease,
            color 0.2s ease,
            border-color 0.2s ease,
            transform 0.2s ease;

          // X 아이콘
          &::before,
          &::after {
            position: absolute;
            width: 17px;
            height: 2px;
            content: "";
            background-color: currentColor;
            border-radius: 2px;
          }

          &::before {
            transform: rotate(45deg);
          }

          &::after {
            transform: rotate(-45deg);
          }

          &:hover {
            color: #fff;
            background-color: #dc4545;
            border-color: #dc4545;
          }

          &:active {
            transform: scale(0.94);
          }

          &:focus-visible {
            outline: 2px solid #a5b4fc;
            outline-offset: 3px;
          }
        }
      }
      .max_side_img_box {
        position: relative;
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 0;
        padding: 16px;
        box-sizing: border-box;

        .img_box {
          width: 100%;
          height: 100%;
          min-height: 0;
          overflow-y: auto; // 이미지가 영역보다 크면 스크롤
          overflow-x: hidden;

          img {
            display: block;
            width: 100%;
            height: auto; // 원본 비율 유지
          }
        }

        .text_box {
          position: absolute;
          top: 80%;
          left: 50%;
          transform: translate(-50%, -50%);
          padding: 16px;
          background-color: #fff;
        }
      }
    }
  }
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    padding: 40px 24px 32px;
    box-sizing: border-box;
    color: #fff;
    text-align: center;

    .icon_img {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      width: 180px;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      background-color: aliceblue;
      overflow: hidden;

      img {
        width: 80%;
        height: 80%;
        object-fit: contain;
      }
    }

    .icon_title {
      font-size: clamp(1.5rem, 3vw, 2rem);
      font-weight: 700;
      line-height: 1.3;
      word-break: keep-all;
    }
  }
  .work_list_box {
    width: 100%;
    .photoshop_list {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-row-gap: 2.5%;
      grid-column-gap: 2.5%;
      justify-content: flex-start;
      li {
        display: flex;
        flex-direction: column;
        gap: 16px;
        height: 300px;
        cursor: pointer;
        .work_img {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          height: 80%;
          background-color: #2c2c2c;
          padding: 24px;
          overflow: hidden;
          border-radius: 8px;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          &:hover {
            background-color: #525252;
          }
        }
        .img_name {
          font-size: 1.125em;
          color: #fff;
        }
      }
    }
  }
`;

export const FigmaProgramWrap = styled.div`
  font-family: "Pretendard", sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    padding: 40px 24px 32px;
    box-sizing: border-box;
    color: #fff;
    text-align: center;

    .icon_img {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      width: 180px;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      background-color: aliceblue;
      overflow: hidden;

      img {
        width: 80%;
        height: 80%;
        object-fit: contain;
      }
    }

    .icon_title {
      font-size: clamp(1.5rem, 3vw, 2rem);
      font-weight: 700;
      line-height: 1.3;
      word-break: keep-all;
    }
  }
`;
