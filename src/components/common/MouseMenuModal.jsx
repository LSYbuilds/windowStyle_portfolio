import React from "react";
import { MouseMenuWrapModalWrap } from "../../style/common/Modal_styled";

const MouseMenuModal = () => {
  const MouseMenu = [
    {
      id: "1",
      title: "새 폴더",
    },
    {
      id: "2",
      title: "정렬",
      aline: [
        {
          id: "1",
          title: "가로형",
        },
        {
          id: "1",
          title: "세로형",
        },
      ],
    },
    {
      id: "3",
      title: "바탕화면 변경",
    },
  ];
  return (
    <MouseMenuWrapModalWrap>
      {MouseMenu.map((item, idx) => (
        <li key={idx}>{item.title}</li>
      ))}
    </MouseMenuWrapModalWrap>
  );
};

export default MouseMenuModal;
