import React, { useState } from "react";
import { WindowViewWrap } from "../../style/main/main_styled";
import IconData from "../../assets/data/IconData.json";
import FolderModal from "../common/FolderModal";

const WindowView = () => {
  const IconList = IconData.iconDataList;
  const [iconListData, setIconListData] = useState(IconList);
  const [iconClickIndex, setIconClickIndex] = useState(null);
  const [clickData, setClickData] = useState(null);
  const [isModal, setIsModal] = useState(true);
  console.log("클릭데이터", clickData);
  // 정규식
  const publicPath = (path) => {
    return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
  };
  const handleClick = () => {};
  return (
    <WindowViewWrap>
      {isModal && <FolderModal clickData={clickData} />}
      <ul className="icon_list_box">
        {iconListData.map((item, idx) => (
          <li
            key={idx}
            onClick={() => {
              (setIconClickIndex(idx), setClickData(item), setIsModal(true));
            }}
            className={iconClickIndex === idx ? "clickIcon" : ""}
          >
            <div className="icon_img_box">
              <img src={publicPath(item.src)} alt="아이콘이미지" />
              {item.class === "shot" ? <div className="shotcutIcon"></div> : ""}
            </div>

            <div className="icon_text">{item.title}</div>
          </li>
        ))}
      </ul>
    </WindowViewWrap>
  );
};

export default WindowView;
