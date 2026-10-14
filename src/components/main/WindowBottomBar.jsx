import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addBottomThis,
  removeBottomThis,
} from "../../redux/bottomBarClickSlice";
import { addIconClickData } from "../../redux/iconClickSlice";
import IconData from "../../assets/data/IconData.json";
import { removeBottomBar } from "../../redux/bottomBarSlice";
import { WindowBottomWrap } from "../../style/main/windowBottom_styled";

const WindowBottomBar = ({ setIsModal }) => {
  // 리덕스툴킷
  const dispatch = useDispatch();
  // 정규식
  const publicPath = (path) => {
    return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
  };
  const IconList = IconData.iconDataList;
  // 바텀 바 저장 데이터 불러오는것
  const openProgramIds = useSelector((state) => state.bottomBar.openProgramIds);
  // 바텀 바 클릭 데이터 불러오기
  const bottomBarThisIds = useSelector(
    (state) => state.bottomThis.thisBottomIds,
  );
  // 아이콘 클릭 데이터 불러오기
  const clickIconIdx = useSelector((state) => state.iconClick.openIconClickIdx);

  console.log("바텀 바 저장 데이터:", openProgramIds);
  console.log("클릭 바텀 바 데이터", bottomBarThisIds);
  console.log("클릭데이터", clickIconIdx);

  const handleClick = () => {
    const data = IconList.find((item) => {
      return item.title === bottomBarThisIds.title;
    });
    console.log("일단이게뭐지", data);
    dispatch(addIconClickData(data));
  };
  return (
    <WindowBottomWrap>
      <div className="inner">
        <section className="quick_menu_box">
          <div className="quick_menu">
            <div className="quick_img">
              <img src={publicPath("/bg/logo_clear.png")} alt="빠른메뉴로고" />
            </div>
            <span></span>
          </div>
          <ul className="bottom_list">
            {openProgramIds.map((item, idx) => (
              <li
                key={idx}
                onClick={() => {
                  handleClick();
                  dispatch(
                    addBottomThis({
                      id: item.id,
                      title: item.title,
                      src: item.src,
                      func: item.func,
                      class: item.class,
                    }),
                  );
                  setIsModal(true);
                }}
              >
                <div className="icon_box">
                  <img src={publicPath(item.src)} alt="" />
                </div>
                <div className="icon_text">{item.title}</div>
              </li>
            ))}
          </ul>
        </section>
        <section className="tool_box"></section>
      </div>
    </WindowBottomWrap>
  );
};

export default WindowBottomBar;
