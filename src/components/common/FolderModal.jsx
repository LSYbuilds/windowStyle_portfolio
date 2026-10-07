import React from "react";
import { FolderModalWrap } from "../../style/main/main_styled";

const FolderModal = ({ clickData }) => {
  const publicPath = (path) => {
    return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
  };
  return (
    <FolderModalWrap>
      <div className="folder_bar">
        <div className="top_bar">
          <div className="icon_name">
            <div className="icon_img">
              <img src={publicPath("/icon/FolderClosed.png")} alt="" />
              {/* <img src={publicPath(clickData.src)} alt="폴더이미지" /> */}
            </div>
            <div className="folder_name">클릭데이터 타이틀 들어감</div>
          </div>
          <div className="folder_button">
            <button className="minimal"></button>
            <button className="full"></button>
            <button className="close"></button>
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
              {/* <img src="" alt="" /> */}
              <span>뒤로</span>
            </li>
            <li>{/* <img src="" alt="" /> */}</li>
            <li>{/* <img src="" alt="" /> */}</li>
            <li>
              {/* <img src="" alt="" /> */}
              <span>검색</span>
            </li>
            <li>
              {/* <img src="" alt="" /> */}
              <span>폴더</span>
            </li>
            <li>{/* <img src="" alt="" /> */}</li>
          </ul>
          <div className="file_address">
            <p>주소</p>
            <div className="file_address_text"></div>
            <div className="moveto">
              {/* <img src="" alt="" /> */}
              <span>이동</span>
            </div>
          </div>
        </div>
      </div>
      <div className="inner"></div>
    </FolderModalWrap>
  );
};

export default FolderModal;
