import React, { useState } from "react";
import { PhotoProgramWrap } from "../../style/common/Program_styled";

const PhotoProgram = ({ machProgramData }) => {
  // 정규식
  const publicPath = (path) => {
    return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
  };
  const [maxsize, setMaxSide] = useState(false);
  const [imgdatail, setImgdetail] = useState(null);
  return (
    <PhotoProgramWrap>
      {maxsize && (
        <div className="max_size_wrap">
          <div className="max_size_inner">
            <div className="max_size_close_btn"></div>
            <div className="max_side_img_box">
              <div className="img_box"></div>
              <div className="text_box"></div>
            </div>
          </div>
        </div>
      )}
      <section className="hero">
        <div className="icon_img">
          <img src={publicPath(machProgramData.src)} alt="" />
        </div>
        <div className="icon_title">{machProgramData.title}</div>
      </section>
      <section className="work_list_box">
        <ul className="photoshop_list">
          {machProgramData.imgDetail.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                (setImgdetail(item), setMaxSide(true));
              }}
            >
              <div className="work_img">
                <img src={publicPath(item.src)} alt="썸넬이미지" />
              </div>
              <div className="img_name">{item.title}</div>
            </li>
          ))}
        </ul>
      </section>
    </PhotoProgramWrap>
  );
};

export default PhotoProgram;
