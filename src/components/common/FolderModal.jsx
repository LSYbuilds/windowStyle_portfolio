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
import { Resizable } from "re-resizable";

const FolderModal = ({ setIsProgram, setThisProgramData }) => {
  const defaultStyle = {
    width: "30%",
    height: "40%",
    transform: "translateX(84px) translateY(324px)",
  };
  const fullStyle = {
    width: "100vw",
    height: "100vh",
    transform: "translate(0, 0)",
    top: 0,
    left: 0,
  };
  const [full, setFull] = useState(false);
  const [modalStyle, setModalStyle] = useState(defaultStyle);

  const dispatch = useDispatch();
  // 아이콘 클릭 데이터 불러오기
  const dragControls = useDragControls();
  // 드래그컨트롤

  const clickIconIdx = useSelector((state) => state.iconClick.openIconClickIdx);
  // 리덕스

  const publicPath = (path) => {
    return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
  };
  // 정규식

  const minimalfunc = () => {
    dispatch(removeIconClickData());
    dispatch(addBottomBar(clickIconIdx));
    dispatch(removeBottomThis(clickIconIdx.title));
  };
  // 최소화기능

  const closefunc = () => {
    dispatch(removeIconClickData());
    dispatch(removeBottomBar(clickIconIdx.title));
    dispatch(removeBottomThis(clickIconIdx.title));
  };
  // 폴더끄기 기능

  return (
    <FolderModalWrap
      drag={!full}
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
            </div>
            <div className="folder_name">{clickIconIdx.title}</div>
          </div>
          <div className="folder_button">
            <button className="minimal" onClick={minimalfunc}></button>
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
            <button className="close" onClick={closefunc}></button>
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
