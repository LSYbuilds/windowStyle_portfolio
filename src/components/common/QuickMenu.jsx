import React, { useState } from "react";
import IconData from "../../assets/data/IconData.json";
import { QuickMenuWrap } from "../../style/main/quickMenu_styled";

const QuickMenu = () => {
  // 정규식
  const publicPath = (path) => {
    return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
  };
  // 아이콘데이터 가져오기(유지)
  const IconList = IconData.iconDataList;
  const [iconListData, setIconListData] = useState(IconList);
  return (
    <QuickMenuWrap>
      <div className="user_account">
        <div className="account_img">
          <img src={publicPath("/bg/logo_clear.png")} alt="" />
        </div>
        <div className="account_name">Administrator</div>
      </div>
      <div className="head_quick_menu">
        {/* <ul className="head_select_list">
          {iconListData.slice(0, 7).map((item, idx) => (
            <li key={idx}>
              <div className="icon_img">
                <img src={publicPath(item.src)} alt="아이콘이미지" />
              </div>
              <div className="icon_name">{item.title}</div>
            </li>
          ))}
        </ul> */}
        <div className="all_program_box">
          <div className="group">
            <span>모든 프로그램</span>
            <span>화살표</span>
          </div>
        </div>
      </div>
      <div className="login_box">
        <div className="logoff"></div>
        <div className="poweroff"></div>
      </div>
    </QuickMenuWrap>
  );
};

export default QuickMenu;
