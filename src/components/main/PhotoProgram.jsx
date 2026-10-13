import React, { useState } from "react";
import { PhotoProgramWrap } from "../../style/common/Program_styled";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

const PhotoProgram = ({ machProgramData }) => {
  // 정규식
  const publicPath = (path) => {
    return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
  };
  const [maxsize, setMaxSide] = useState(false);
  const [imgdatail, setImgdetail] = useState(null);
  return (
    <PhotoProgramWrap>
      <AnimatePresence>
        {maxsize && (
          <motion.div
            className="max_size_wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max_size_inner">
              <div className="max_size_info">
                <div className="img_info">{imgdatail.title}</div>
                <button
                  className="close_btn"
                  onClick={() => setMaxSide(false)}
                ></button>
              </div>
              <div className="max_side_img_box">
                <div className="img_box">
                  <img src={publicPath(imgdatail.src)} alt="" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
