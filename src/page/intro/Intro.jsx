import React, { useState } from "react";
import { IntroWrap } from "../../style/intro/intro_styled";
import OverView from "../../components/intro/Overview";
import LoadingView from "../../components/intro/LoadingView";
import LoadingBar from "../../components/intro/LoadingBar";

const Intro = () => {
  const [isOver, setIsOver] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingBar, setIsLoadingBar] = useState(false);
  return (
    <IntroWrap>
      {isOver && <OverView setIsOver={setIsOver} setIsLoading={setIsLoading} />}
      {isLoading && (
        <LoadingView
          setIsLoading={setIsLoading}
          setIsLoadingBar={setIsLoadingBar}
        />
      )}
      {isLoadingBar && <LoadingBar />}
    </IntroWrap>
  );
};

export default Intro;
