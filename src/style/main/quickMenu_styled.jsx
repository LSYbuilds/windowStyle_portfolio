import styled from "@emotion/styled";

export const QuickMenuWrap = styled.div`
  position: fixed;
  bottom: 40px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  .inner {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: auto;
    height: auto;
    display: flex;
    .initial_menu {
      width: 600px;
      height: auto;
      display: flex;
      flex-direction: column;
      background: #59a4ff;
      background: linear-gradient(
        18deg,
        rgba(89, 164, 255, 1) 0%,
        rgba(24, 100, 200, 1) 100%
      );
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
      overflow: hidden;
      border: 1px solid #184bc1;
      box-shadow:
        0 2px 8px rgba(0, 0, 0, 0.2),
        0 8px 24px rgba(0, 0, 0, 0.12);

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
      .user_account {
        display: flex;
        gap: 16px;
        width: 100%;
        height: 100px;
        padding: 8px;
        align-items: center;
        .account_img {
          width: 90px;
          height: 90px;
          background-color: #36384f;
          border-radius: 8px;
          padding: 8px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .account_name {
          font-size: 1.125em;
          font-weight: 600;
          color: #fff;
        }
      }
      .head_quick_menu {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .quick_left {
          width: 50%;
          display: flex;
          flex-direction: column;
          background-color: #fff;
          gap: 120px;
          .left_select_list {
            display: flex;
            flex-direction: column;
            li {
              gap: 16px;
              height: 60px;
              padding: 8px 16px;
              cursor: pointer;
              a {
                display: flex;
                gap: 16px;
                width: 100%;
                align-items: center;
                height: 100%;
                .icon_img {
                  width: 50px;
                  height: 50px;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
              }
              .icon_box {
                display: flex;
                gap: 16px;
                width: 100%;
                height: 100%;
                align-items: center;
                .icon_img {
                  width: 50px;
                  height: 50px;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
              }
              &:hover {
                background-color: #1764c9;
                .icon_name {
                  color: #fff;
                }
              }
            }
          }
          .all_program_box {
            position: relative;
            display: flex;
            justify-content: flex-end;
            width: 100%;
            padding: 8px 16px;
            &:before {
              position: absolute;
              left: 50%;
              top: 0px;
              transform: translate(-50%, 0%);
              width: 80%;
              height: 1px;
              background-color: #b1b1b1;
              content: "";
            }
            .group {
              display: flex;
              align-items: center;
              gap: 16px;
              height: 50px;
              span {
                font-family: 1.125em;
                font-weight: 600;
                img {
                  width: 35px;
                  height: 40px;
                }
              }
            }
          }
        }
        .quick_right {
          flex: 1;
          display: flex;
          flex-direction: column;
          background-color: #d3e5fa;
          .right_select_list {
            display: flex;
            flex-direction: column;
            li {
              display: flex;
              gap: 8px;
              height: 50px;
              align-items: center;
              padding: 8px 16px;
              cursor: pointer;
              .icon_img {
                width: 40px;
                height: 100%;
                img {
                  height: 100%;
                }
              }
              &:hover {
                background-color: #1764c9;
                .icon_name {
                  color: #fff;
                }
              }
            }
          }
        }
      }
      .login_box {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        height: 60px;
        gap: 16px;
        padding: 8px 16px;
        color: #fff;
        div {
          display: flex;
          align-items: center;
          gap: 8px;
          .log_icon {
            height: 100%;
            img {
              width: auto;
              height: 100%;
              object-fit: contain;
            }
          }
        }
      }
    }
  }
`;

export const QuickAllMenu = styled.ul`
  position: absolute;
  bottom: 60px;
  left: 50%;
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  background-color: #fff;
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.2),
    0 8px 24px rgba(0, 0, 0, 0.12);
  li {
    display: flex;
    gap: 16px;
    align-items: center;
    width: 300px;
    padding: 2px 0px;
    .icon_img {
      width: 25px;
      height: 25px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .icon_name {
      flex: 1;
      color: #000;
    }
  }
`;
