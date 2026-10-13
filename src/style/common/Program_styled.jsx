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
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    .max_size_inner {
      max-width: 1400px;
      width: 100%;
      height: 100%;
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
