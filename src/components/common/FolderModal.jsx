import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBottomBar, removeBottomBar } from "../../redux/bottomBarSlice";
import {
  addBottomThis,
  removeBottomThis,
} from "../../redux/bottomBarClickSlice";
import { removeIconClickData } from "../../redux/iconClickSlice";
import { FolderModalWrap } from "../../style/common/Modal_styled";
import { motion, useDragControls } from "framer-motion";

const FolderModal = ({ setIsProgram, setThisProgramData }) => {
  const defaultStyle = { width: "40%", height: "60%" };
  const fullStyle = {
    width: "100%",
    height: "100%",
    transform: "translate(267px, 55px)",
    top: "0px",
    left: "0px",
  };
  // 리덕스
  const dispatch = useDispatch();
  // 아이콘 클릭 데이터 불러오기
  const clickIconIdx = useSelector((state) => state.iconClick.openIconClickIdx);
  // 리덕스
  const [full, setFull] = useState(false);
  const dragControls = useDragControls();
  const [modalStyle, setModalStyle] = useState(defaultStyle);
  const publicPath = (path) => {
    return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
  };
  return (
    <FolderModalWrap
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      style={modalStyle}
    >
      <div
        className="folder_bar"
        onPointerDown={(e) => {
          dragControls.start(e);
        }}
      >
        <div className="top_bar">
          <div className="icon_name">
            <div className="icon_img">
              <img src={publicPath(clickIconIdx.src)} alt="" />
              {/* <img src={publicPath(clickData.src)} alt="폴더이미지" /> */}
            </div>
            <div className="folder_name">{clickIconIdx.title}</div>
          </div>
          <div className="folder_button">
            <button
              className="minimal"
              onClick={() => {
                dispatch(removeIconClickData());
                dispatch(addBottomBar(clickIconIdx));
                dispatch(removeBottomThis(clickIconIdx.title));
              }}
            ></button>
            {full ? (
              <button
                className="restore"
                onClick={() => {
                  (setModalStyle(defaultStyle), setFull(false));
                }}
              ></button>
            ) : (
              <button
                className="full"
                onClick={() => {
                  (setModalStyle(fullStyle), setFull(true));
                }}
              ></button>
            )}
            <button
              className="close"
              onClick={() => {
                dispatch(removeIconClickData());
                dispatch(removeBottomBar(clickIconIdx.title));
                dispatch(removeBottomThis(clickIconIdx.title));
              }}
            ></button>
          </div>
        </div>
        <div className="folder_funtion_bar">
          <ul className="file_func_top">
            <li>파일</li>
            <li>편집</li>
            <li>보기</li>
            <li>즐겨찾기</li>
            <li>도구</li>
            <li>도움말</li>
          </ul>
          <ul className="file_func_bottom">
            <li>
              <img src={publicPath("/icon/Back.png")} alt="" />
              <span>뒤로</span>
            </li>
            <li>
              <img src={publicPath("/icon/Back.png")} alt="" />
            </li>
            <li>
              <img src={publicPath("/icon/Up.png")} alt="" />
            </li>
            <li>
              <img src={publicPath("/icon/Search.png")} alt="" />
              <span>검색</span>
            </li>
            <li>
              <img src={publicPath("/icon/FolderView.png")} alt="" />
              <span>폴더</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="inner">
        <ul className="item_list">
          {clickIconIdx.list ? (
            <>
              {clickIconIdx.list.map((item) => (
                <li
                  key={item.id}
                  onClick={() => {
                    (setIsProgram({ state: true, index: item.id }),
                      setThisProgramData(item.title));
                  }}
                >
                  <div className="icon_img_box">
                    <img src={publicPath(item.src)} alt="" />
                  </div>
                  <div className="icon_text">{item.title}</div>
                </li>
              ))}
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </FolderModalWrap>
  );
};

export default FolderModal;
