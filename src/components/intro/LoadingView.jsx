import { Route } from "react-router-dom";
import { LoadingWrap } from "../../style/intro/loadingView_styled";
import { useNavigate } from "react-router-dom";
import Icon from "../svgComponents";
import { use, useEffect, useState } from "react";
const LoadingView = ({ setIsLoading, setIsLoadingBar }) => {
  // 정규식
  const publicPath = (path) => {
    return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
  };
  const navigate = useNavigate();
  const [textIndex, setTextIndex] = useState(0);
  const [firstText, setFirstText] = useState(0);
  const [loadingendTimer, setLoadingendTimer] = useState(0);
  const textList = [
    "SYSTEM CHECK...",
    "MEMORY TEST...",
    "LOADING DEVICE DRIVER...",
    "INITIALIZING VISUAL STUIDIO CODE...",
    "INCLUDING PORTFILIO DATA...",
    "ALL STSYEM STATUS NOMAL...",
    "WELCOME TO THE SYSTEM.",
  ];

  const secTextList = [
    "SYSTEM BIOS v4.01",
    "COPYRIGHT (C) 1998-2026 SYSTEM TECHNOLOGY",
    "CHECKING SYSTEM CONFIGURATION...",
    "CPU: OK",
    "MEMORY TEST: 32768 KB OK",
    "DETECTING PRIMARY IDE MASTER...",
    "NETWORK ADAPTER: OK",
    "CHECKING SYSTEM INTEGRITY...",
    "SYSTEM CONFIGURATION: COMPLETE",
    "LOADING USER PROFILE...",
    "STARTING PORTFOLIO SYSTEM...",
    "PLEASE WAIT...",
  ];

  const allendTimer = 3;

  useEffect(() => {
    if (textIndex >= textList.length) return;

    const timer = setTimeout(() => {
      setTextIndex((prev) => prev + 1);
    }, 100);
    return () => clearTimeout(timer);
    setFirstText(true);
  }, [textIndex]);

  useEffect(() => {
    if (textIndex < textList.length) return;
    if (firstText >= secTextList.length) return;

    const timer = setTimeout(() => {
      setFirstText((prev) => prev + 1);
    }, 50);

    return () => clearTimeout(timer);
  }, [textIndex, firstText]);

  useEffect(() => {
    if (textIndex < textList.length) return;
    if (firstText < secTextList.length) return;
    setInterval(() => {
      setIsLoading(false);
      setIsLoadingBar(true);
    }, 1000);
  }, [textIndex, firstText]);

  return (
    <LoadingWrap>
      <div className="inner">
        <div className="text_box_anime">
          <div className="show_text_anime">
            <div className="first_text">
              {textList.map(
                (item, idx) => idx < textIndex && <p key={idx}>{item}</p>,
              )}
            </div>
            <div className="sec_text">
              {secTextList.map(
                (item, idx) => idx < firstText && <p key={idx}>{item}</p>,
              )}
            </div>
          </div>
          <div className="bottom_text">
            <p>Press DAL to enter SETUP</p>
          </div>
        </div>
        <div className="dos_img">
          <div className="img_box">
            <img src={publicPath("/bg/logo_dot.png")} alt="도트로고" />
          </div>
        </div>
      </div>
    </LoadingWrap>
  );
};

export default LoadingView;
