import styled from "@emotion/styled";
import { Swiper } from "swiper/react";

export const LoadingBarBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  .loading_track {
    display: flex;
    width: max-content;
    height: 100%;

    animation: loadingMove 0.1s linear infinite;
  }

  img {
    display: block;
    width: auto;
    height: 100%;
    flex-shrink: 0;
  }

  @keyframes loadingMove {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(100%);
    }
  }
`;
