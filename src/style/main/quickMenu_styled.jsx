import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const QuickMenuWrap = styled.div`
  position: absolute;
  bottom: 100%;
  left: 0px;
  width: 500px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  overflow: hidden;
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
    background: #59a4ff;
    background: linear-gradient(
      18deg,
      rgba(89, 164, 255, 1) 0%,
      rgba(24, 100, 200, 1) 100%
    );
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
    flex-direction: column;
    gap: 120px;
    padding: 8px 0px;
    .head_select_list {
      display: flex;
      flex-direction: column;
      li {
        display: flex;
        gap: 16px;
        height: 60px;
        align-items: center;
        padding: 8px 16px;
        cursor: pointer;
        .icon_img {
          width: 50px;
          height: 50px;
          img {
            width: 100%;
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
    .all_program_box {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      padding: 8px 0px;
      .group {
        display: flex;
        gap: 16px;
        height: 50px;
      }
    }
  }
`;
