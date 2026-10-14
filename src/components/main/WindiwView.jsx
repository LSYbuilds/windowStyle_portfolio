import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addIconClickData } from "../../redux/iconClickSlice";
import { WindowViewWrap } from "../../style/main/main_styled";
import IconData from "../../assets/data/IconData.json";
import ToolsData from "../../assets/data/ToolsData.json";
import { useNavigate } from "react-router-dom";

const WindowView = ({ setThisProgramData, setIsModal }) => {
  // 리덕스툴킷
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // 아이콘데이터 가져오기(유지)
  const IconList = IconData.iconDataList;
  const [iconListData, setIconListData] = useState(IconList);
  const programData = ToolsData.toolsDataList;
  // 아이콘클릭 CSS 변경 state(유지)
  const [iconClickIndex, setIconClickIndex] = useState(null);
  // 한번클릭 css 스테이트
  const [oneClickCss, setOneClickCss] = useState(false);
  // 아이콘 클릭 데이터 불러오기
  const clickIconIdx = useSelector((state) => state.iconClick.openIconClickIdx);

  // 정규식
  const publicPath = (path) => {
    return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
  };

  return (
    <WindowViewWrap>
      <ul className="icon_list_box">
        {iconListData.map((item, idx) => (
          <li
            key={idx}
            onClick={() => {
              setIconClickIndex(idx);
            }}
            onDoubleClick={() => {
              (dispatch(addIconClickData(item)), setIsModal(true));
            }}
            className={iconClickIndex === idx ? "clickIcon" : ""}
          >
            <div className="icon_img_box">
              {item.class === "shot" ? (
                <a href={item.address} target="_blank">
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
