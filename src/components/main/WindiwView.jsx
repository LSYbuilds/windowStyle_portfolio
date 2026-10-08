import React, { useState } from "react";
import { WindowViewWrap } from "../../style/main/main_styled";
import IconData from "../../assets/data/IconData.json";
import FolderModal from "../common/FolderModal";
import ResumeModal from "../common/ResumeModal";

const WindowView = () => {
  const IconList = IconData.iconDataList;
  const [iconListData, setIconListData] = useState(IconList);
  const [iconClickIndex, setIconClickIndex] = useState(null);
  const [clickData, setClickData] = useState(null);
  // 모달스테이트
  const [isModal, setIsModal] = useState(false);
  console.log("클릭데이터", clickData);
  // 정규식
  const publicPath = (path) => {
    return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
  };
  // <FolderModal clickData={clickData} setIsModal={setIsModal} />
  const handleClick = () => {};
  const renderModal = () => {
    if (!isModal || !clickData) return null;
    if (clickData.class === "folder") {
      return <FolderModal clickData={clickData} setIsModal={setIsModal} />;
    }
    if (clickData.class === "file") {
      switch (clickData.detail) {
        case "word":
          return <ResumeModal setIsModal={setIsModal} />;
        case "picture":
          return null;
        default:
          return null;
      }
    }
    return null;
  };
  return (
    <WindowViewWrap>
      {renderModal()}
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
              {item.class === "shot" ? (
                <a href={item.address}>
                  <img src={publicPath(item.src)} alt="아이콘이미지" />
                </a>
              ) : (
                <img src={publicPath(item.src)} alt="아이콘이미지" />
              )}
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
