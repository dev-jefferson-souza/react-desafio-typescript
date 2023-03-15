import styled from "styled-components";

export const Container = styled.div`
  min-height: 98vh;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  h1 {
    margin-bottom: 28px;
  }

  h2 {
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 4px;
  }
`;

export const Form = styled.form`
  position: relative;
  width: 400px;
  min-height: 470px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid ${(props) => props.theme.transparent};
  border-radius: 1rem;
  padding: 1.5rem;
  z-index: 10;
  color: whitesmoke;

  h1 {
    text-align: center;
  }

  span {
    position: absolute;
    bottom: 18px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;

    button {
      max-width: fit-content;
    }
  }

  div:last-child {
    display: flex;
    gap: 6px;
    width: fit-content;
    margin: auto;
  }

  p {
    font-size: 0.85rem;
  }

  a {
    color: ${(props) => props.theme["pink-500"]};
    font-size: 0.85rem;
    font-weight: 900;
    text-decoration: none;
  }
`;

export const Blob = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  background: linear-gradient(
    180deg,
    rgba(47, 184, 255, 0.42) 31.77%,
    #5c9df1 100%
  );
  mix-blend-mode: color-dodge;
  -webkit-animation: move 25s infinite alternate;
  animation: move 25s infinite alternate;
  transition: 1s cubic-bezier(0.07, 0.8, 0.16, 1);

  @media screen and (max-width: 500px) {
    animation: move 14s infinite alternate;

    width: 520px;
    height: 520px;
    -webkit-filter: blur(30px);
    filter: blur(30px);
    box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.6),
      inset 100px 100px 0 0px #fa709a, inset 200px 200px 0 0px #784ba8,
      inset 300px 300px 0 0px #2b86c5;
  }

  &:hover {
    width: 520px;
    height: 520px;
    -webkit-filter: blur(30px);
    filter: blur(30px);
    box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.6),
      inset 100px 100px 0 0px #fa709a, inset 200px 200px 0 0px #784ba8,
      inset 300px 300px 0 0px #2b86c5;
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
