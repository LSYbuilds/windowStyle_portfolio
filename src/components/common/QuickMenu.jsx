import React, { useState } from "react";
import IconData from "../../assets/data/IconData.json";
import { QuickMenuWrap } from "../../style/main/quickMenu_styled";

const QuickMenu = ({ setOpenStart }) => {
  // 정규식
  const publicPath = (path) => {
    return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
  };
  // 아이콘데이터 가져오기(유지)
  const IconList = IconData.quickMainList;
  const [iconListData, setIconListData] = useState(IconList);
  return (
    <QuickMenuWrap
      onClick={(e) => {
        setOpenStart(false);
      }}
    >
      <div className="inner">
        <div className="user_account">
          <div className="account_img">
            <img src={publicPath("/bg/logo_clear.png")} alt="" />
          </div>
          <div className="account_name">Administrator</div>
        </div>
        <div className="head_quick_menu">
          <div className="quick_left">
            <ul className="left_select_list">
              {iconListData.slice(0, 7).map((item, idx) => (
                <li key={idx}>
                  <div className="icon_img">
                    <img src={publicPath(item.src)} alt="아이콘이미지" />
                  </div>
                  <div className="icon_name">
                    <div className="title">{item.title}</div>
                    <div className="sub_title">{item.subtitle}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="all_program_box">
              <div className="group">
                <span>모든 프로그램</span>
                <span>
                  <img src={publicPath("/icon/green_arrow.png")} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className="quick_right">
            <ul className="right_select_list">
              {iconListData.slice(8, 16).map((item, idx) => (
                <li key={idx}>
                  <div className="icon_img">
                    <img src={publicPath(item.src)} alt="아이콘이미지" />
                  </div>
                  <div className="icon_name">
                    <div className="title">{item.title}</div>
                    <div className="sub_title">{item.subtitle}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="login_box">
          <div className="logoff">
            <div className="log_icon">
              <img src={publicPath("/icon/Logout.png")} alt="" />
            </div>
            <div>로그오프</div>
          </div>
          <div className="poweroff">
            <div className="log_icon">
              <img src={publicPath("/icon/Power.png")} alt="" />
            </div>
            <div>컴퓨터 끄기</div>
          </div>
        </div>
      </div>
    </QuickMenuWrap>
  );
};

export default QuickMenu;
