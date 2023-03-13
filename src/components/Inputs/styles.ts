import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  border-radius: 6px;
  padding: 2px 8px;
  justify-content: space-between;
  align-items: center;
  min-height: 38px;

  background: ${(props) => props.theme.transparent};

  input,
  button {
    background: transparent;
    border: none;
  }

  input {
    width: 100%;
    color: ${(props) => props.theme.white};
    font: 500 0.875rem;

    ::placeholder {
      color: ${(props) => props.theme["gray-300"]};
      font-weight: 400;
    }

    &:focus {
      outline: 0;
    }
  }
  button {
    margin: 0px 8px;
  }
`;
