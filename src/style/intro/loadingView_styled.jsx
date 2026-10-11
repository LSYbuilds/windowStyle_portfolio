import styled from "@emotion/styled";

export const LoadingWrap = styled.div`
  font-family: "DOS";
  width: 100vw;
  height: 100vh;
  background-color: #000;
  .inner {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 5%;
    color: #fff;
    font-size: 1.5em;
    .text_box_anime {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      .show_text_anime {
        display: flex;
        flex-direction: column;
        gap: 32px;
        .first_text {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .sec_text {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .inner {
      flex-direction: column;
      justify-content: flex-start;
      gap: 32px;
      font-size: 1em;
      .text_box_anime {
        justify-content: flex-start;
        .first_text {
          text-align: center;
        }
        .sec_text {
          text-align: center;
        }
        .bottom_text {
          margin-top: 30px;
          text-align: center;
        }
      }
      .dos_img {
        order: -1;
        display: flex;
        flex-direction: row;
        justify-content: center;
        .img_box {
          display: flex;
          flex-direction: row;
          justify-content: center;
          img {
            width: 40%;
          }
        }
      }
    }
  }
`;
