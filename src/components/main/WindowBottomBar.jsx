import React from "react";
import { WindowBottomWrap } from "../../style/main/windowBottom_styled";

const WindowBottomBar = () => {
  return (
    <WindowBottomWrap>
      <div className="inner">
        <section className="quick_menu_box">
          <div className="quick_menu">
            <div className="quick_img">
              <img src="/bg/logo_clear.png" alt="빠른메뉴로고" />
            </div>
            <span>시작</span>
          </div>
          <div className="open_tab_list"></div>
        </section>
        <section className="tool_box"></section>
      </div>
    </WindowBottomWrap>
  );
};

export default WindowBottomBar;
