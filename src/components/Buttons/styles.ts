import { darken } from "polished";
import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: ${(props) => props.color};
  z-index: 10;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  padding: 8px;
  border: none;
  border-radius: 100px;
  min-width: 100px;
  transition: all ease-in-out 0.3s;

  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  :hover:not(:disabled) {
    background: ${(props) => darken(0.05, props.color || "#fff")};
    box-shadow: 0px 2px 20px -2px ${(props) => props.color};
  }
`;
