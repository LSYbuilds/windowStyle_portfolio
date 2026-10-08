import React, { useState } from "react";
import { FolderModalWrap } from "../../style/common/Modal_styled";
import { motion, useDragControls } from "framer-motion";

const FolderModal = ({ clickData, setIsModal }) => {
  const defaultStyle = { width: "40%", height: "60%" };
  const fullStyle = {
    width: "100%",
    height: "100%",
    transform: "translate(267px, 55px)",
    top: "0px",
    left: "0px",
  };
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
              <img src={publicPath(clickData.src)} alt="" />
              {/* <img src={publicPath(clickData.src)} alt="폴더이미지" /> */}
            </div>
            <div className="folder_name">{clickData.title}</div>
          </div>
          <div className="folder_button">
            <button className="minimal"></button>
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
              onClick={() => setIsModal(false)}
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
          {clickData.list ? (
            <>
              {clickData.list.map((item) => (
                <li key={item.id}>
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
