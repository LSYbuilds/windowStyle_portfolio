import React from "react";
import { WindowViewWrap } from "../../style/main/main_styled";
import IconData from "../../assets/data/IconData.json";

const WindowView = () => {
  // 정규식
  const publicPath = (path) => {
    return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
  };
  const IconList = IconData.iconDataList;
  return (
    <WindowViewWrap>
      <ul className="icon_list_box">
        {IconList.map((itme, idx) => (
          <li key={idx}>
            <div className="icon_img_box">
              <img src={publicPath(itme.src)} alt="아이콘이미지" />
            </div>
            <div className="icon_text">{itme.title}</div>
          </li>
        ))}
      </ul>
    </WindowViewWrap>
  );
};

export default WindowView;
