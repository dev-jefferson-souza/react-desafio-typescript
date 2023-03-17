import { AiOutlineAppstore } from "react-icons/ai";
import { RiLogoutCircleRLine } from "react-icons/ri";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 98vh;
  height: 98vh;
  padding: 48px 24px;
  width: 100%;
  max-width: 1080px;
  margin: auto;
  display: flex;
  position: relative;

  h1 {
    margin-bottom: 28px;
    z-index: 1;
  }

  h2 {
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 4px;
  }
`;
export const LogoutIcon = styled(RiLogoutCircleRLine)`
  z-index: 1;
  position: absolute;
  right: 32px;
  top: 32px;
  color: ${(props) => props.theme["red-500"]};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  width: 28px;
  height: 28px;

  &:hover {
    color: #721c24;
    transform: scale(1.25);
  }
`;

export const OpenModalIcon = styled(AiOutlineAppstore)`
  position: absolute;
  background-color: ${(props) => props.theme["gray-900"]};
  border-radius: 100px;
  padding: 6px;

  left: 50%;
  bottom: 16px;
  translate: -50%;
  color: ${(props) => props.theme["red-500"]};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  width: 40px;
  height: 40px;

  &:hover {
    color: #721c24;
    transform: scale(1.15) rotate(225deg);
  }
`;

export const UserSkillsContainer = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 8px;
  padding: 16px;
  margin: auto;
  width: 100%;
  max-height: 90%;
  min-height: 90%;

  div {
    display: flex;
    overflow-x: scroll;
    min-width: 100%;
    gap: 24px;

    ::-webkit-scrollbar {
      height: 8px;
      width: 4px;
    }

    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme["gray-900"]};
    }
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme["gray-700"]};
      border-radius: 100px;
    }
  }
`;
