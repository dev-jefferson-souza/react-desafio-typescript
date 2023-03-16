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
  }

  h2 {
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 4px;
  }
`;
export const LogoutIcon = styled(RiLogoutCircleRLine)`
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
  border-radius: 8px;
  padding: 16px;
  margin: auto;
  width: 100%;
  min-height: 90%;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.85);
  background: rgba(10, 10, 10, 0.75);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);

  z-index: 1;
`;
