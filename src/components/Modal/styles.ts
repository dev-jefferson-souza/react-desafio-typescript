import * as Dialog from "@radix-ui/react-dialog";
// import * as RadioGroup from "@radix-ui/react-radio-group";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: auto;
  inset: 0;
  background: rgba(10, 10, 10, 0.15);
  z-index: 1;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50);
`;

export const Content = styled(Dialog.Content)`
  z-index: 2;
  width: 96%;
  height: fit-content;
  max-width: 920px;
  border-radius: 6px;
  padding: 2.5rem 1.5rem;
  background: rgba(10, 10, 10, 0.5);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  div {
    margin-top: 12px;
    width: 100%;
    height: 100%;
    display: flex;
    overflow: auto;
    gap: 16px;

    ::-webkit-scrollbar {
      height: 6px;
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

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 14px;
  right: 24px;
  :hover {
    background-color: red;
  }

  ::after {
    transition: all 0.5 ease-in-out;
    position: absolute;
    display: flex;
    content: "";
    width: 3px;
    height: 18px;
    border-radius: 8px;
    background-color: #fff;
    transform: rotate(45deg);
  }
  ::before {
    position: absolute;
    display: flex;
    content: "";
    width: 3px;
    height: 18px;
    border-radius: 8px;
    background-color: #fff;
    transform: rotate(-45deg);
  }
`;
