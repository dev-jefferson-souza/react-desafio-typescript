import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: ${(props) => props.color};
  color: #fff;
  font-weight: 500;
  padding: 8px;
  border: none;
  border-radius: 100px;
  min-width: 100px;
  transition: ease-in-out 0.1s;
  border: solid 1px transparent;

  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  :hover:not(:disabled) {
    border: solid 1px ${(props) => props.theme.transparent};
    box-shadow: 0px 2px 10px -2px ${(props) => props.color};
  }
`;
