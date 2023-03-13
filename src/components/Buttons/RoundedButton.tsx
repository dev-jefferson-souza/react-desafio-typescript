import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  color: string;
  type: string;
  isDisabled: boolean;
};

export const RoundedButton = ({ title, color, type, isDisabled }: Props) => {
  return (
    <ButtonContainer color={color} type={type} disabled={isDisabled}>
      {title}
    </ButtonContainer>
  );
};
