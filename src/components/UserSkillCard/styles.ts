import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import styled from "styled-components";

export const CardContainer = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 360px;
  min-width: 220px;
  max-width: 220px;
  min-height: 360px;
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.85);
  background: rgba(0, 2, 2, 0.6);
  border-radius: 8px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 1;

  padding: 12px;
  margin-bottom: 24px;

  h1 {
    text-align: center;
    font-size: 1.5rem;
  }

  img {
    border-radius: 8px;
    width: 80px;
    height: 80px;
    object-fit: contain;
    z-index: 2;

    margin-bottom: 16px;
  }

  p {
    font-size: 0.85rem;
    line-height: 1.6;
    max-height: 90px;
    overflow-y: scroll;
    margin-bottom: 16px;
    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme.transparent};
    }
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme["gray-500"]};
      border-radius: 100px;
    }
  }

  span:first-child {
    display: flex;
    gap: 16px;
    align-items: center;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 0.875rem;
    width: 60px;
    text-align: center;
    font-weight: 500;
  }
`;

export const LastBox = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const PlusButton = styled(AiFillPlusCircle)`
  width: 24px;
  height: 24px;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

export const MinusButton = styled(AiFillMinusCircle)`
  width: 24px;
  height: 24px;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

export const ButtonHandleSkill = styled.button`
  width: 100%;
  transition: all 0.3s ease-in-out;
  border-radius: 0px 0px 8px 8px;
  margin-top: 6px;
  color: #fff;
  font-weight: 500;
  padding: 4px;
  border: none;
  display: block;
  width: 100%;

  &:hover {
    opacity: 0.7;
  }
`;
