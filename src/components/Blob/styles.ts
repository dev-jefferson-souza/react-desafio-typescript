import styled from "styled-components";
import { userModel } from "../../models/userModel";

type BlobContainerProps = {
  user: userModel | null;
};

export const BlobContainer = styled.div<BlobContainerProps>`
  overflow: hidden;
  width: 500px;
  height: 500px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgba(47, 184, 255, 0.42) 31.77%,
    #5c9df1 100%
  );

  mix-blend-mode: color-dodge;
  -webkit-animation: move 5s infinite alternate;
  animation: move 25s infinite alternate;
  transition: 1s cubic-bezier(0.07, 0.8, 0.16, 1);

  -webkit-filter: ${(props) =>
    props.user === null ? "blur(0px)" : "blur(30px)"};
  filter: ${(props) => (props.user === null ? "blur(0px)" : "blur(30px)")};
  box-shadow: ${(props) =>
    props.user === null
      ? "none"
      : "inset 0 0 0 5px rgba(255, 255, 255, 0.6), inset 100px 100px 0 0px #1778c4, inset 200px 200px 0 0px #efe105, inset 300px 300px 0 0px #d54c5b"};

  @media screen and (max-width: 500px) {
    animation: move 14s infinite alternate;
    width: 540px;
    height: 540px;
    -webkit-filter: blur(30px);
    filter: blur(30px);
    box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.6),
      inset 100px 100px 0 0px #1778c4, inset 200px 200px 0 0px #efe105,
      inset 300px 300px 0 0px #d54c5b;
  }

  &:hover {
    width: 540px;
    height: 540px;
    -webkit-filter: blur(30px);
    filter: blur(30px);
    box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.6),
      inset 100px 100px 0 0px #1778c4, inset 200px 200px 0 0px #efe105,
      inset 300px 300px 0 0px #d54c5b;
  }

  @-webkit-keyframes move {
    from {
      transform: translate(-100px, -50px) rotate(-90deg);
      border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%;
    }

    to {
      transform: translate(500px, 100px) rotate(-10deg);
      border-radius: 76% 24% 33% 67% / 68% 55% 45% 32%;
    }
  }

  @keyframes move {
    from {
      transform: translate(-100px, -50px) rotate(-90deg);
      border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%;
    }

    to {
      transform: translate(500px, 100px) rotate(-10deg);
      border-radius: 76% 24% 33% 67% / 68% 55% 45% 32%;
    }
  }
`;
