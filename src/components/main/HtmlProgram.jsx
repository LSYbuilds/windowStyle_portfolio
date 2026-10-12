import React from "react";
import { HtmlProgramWrap } from "../../style/common/Program_styled";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
// 정규식
const publicPath = (path) => {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
};

const HtmlProgram = ({ machProgramData }) => {
  return (
    <HtmlProgramWrap>
      <section className="hero">
        <div className="icon_img">
          <img src={publicPath(machProgramData.src)} alt="" />
        </div>
        <div className="icon_title">{machProgramData.title}</div>
      </section>
      <section className="text_script">
        {machProgramData.desc.map((item) => (
          <motion.div
            key={item.id}
            className="script_area"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <div className="img_box">
              <img src={publicPath(item.img)} alt="" />
            </div>
            <div className="script_box">
              <div className="title_group">
                <div className="title">{item.title}</div>
                <div className="sub_title">{item.subtitle}</div>
              </div>
              <ul className="script_list">
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                  }}
                >
                  {item.text1}
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 1.1,
                    ease: "easeOut",
                  }}
                >
                  {item.text2}
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                  }}
                >
                  {item.text3}
                </motion.li>
              </ul>
            </div>
          </motion.div>
        ))}
      </section>
    </HtmlProgramWrap>
  );
};

export default HtmlProgram;
