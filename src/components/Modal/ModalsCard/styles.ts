import styled from "styled-components";

export const ModalsCardContainer = styled.form`
  position: relative;

  min-width: 220px;
  max-width: 220px;
  min-height: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme["gray-900"]};
  padding: 24px 8px;
  border-radius: 8px;
  margin: 16px 0px;

  img {
    background-color: ${(props) => props.theme.white};
    width: 151px;
    min-height: 151px;
    object-fit: contain;
    border-radius: 8px;
    margin-bottom: 12px;
  }

  h3 {
    margin-bottom: 16px;
  }

  h4 {
    position: absolute;
    font-size: 0.875rem;
    background-color: ${(props) => props.theme["red-500"]};
    padding: 8px;
    border-radius: 0px 6px 0px 20px;
    top: 63px;
    right: 34px;
  }

  @media (max-width: 768px) {
    h4 {
      top: 60px;
    }
  }

  p {
    font-size: 0.875rem;
    line-height: 1.6;
    overflow-y: scroll;
    padding: 0px 4px;
    max-height: 125px;
    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme.transparent};
    }
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme["red-600"]};
      border-radius: 100px;
    }
  }

  span {
    position: absolute;
    bottom: 16px;
  }
`;
