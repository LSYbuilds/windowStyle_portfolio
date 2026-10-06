import { Route } from "react-router-dom";
import { LoadingBarWrap } from "../../style/intro/loadingBar_styled";
import Icon from "../svgComponents";
const LoadingBar = () => {
  return (
    <LoadingBarWrap>
      <div className="inner">OK</div>
    </LoadingBarWrap>
  );
};

export default LoadingBar;
