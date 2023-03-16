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
    color: ${(props) => props.theme["red-500"]};
    font-size: 0.85rem;
    font-weight: 900;
    text-decoration: none;
  }
`;
