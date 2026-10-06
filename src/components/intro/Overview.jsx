import { Route } from "react-router-dom";
import { OverViewWrap } from "../../style/intro/overview_styled";
import Icon from "../svgComponents";
const OverView = ({ setIsOver, setIsLoading }) => {
  return (
    <OverViewWrap>
      <div className="inner">
        <div className="computer_box">
          <div
            className="power_on_btn"
            onClick={() => {
              (setIsOver(false), setIsLoading(true));
            }}
          >
            <Icon.power />
          </div>
        </div>
      </div>
    </OverViewWrap>
  );
};

export default OverView;
