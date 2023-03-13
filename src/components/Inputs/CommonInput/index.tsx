import { ChangeEvent } from "react";
import { TextInputProps } from "../props";
import { InputContainer } from "../styles";

export const CommonInput: React.FC<TextInputProps> = ({
  placeholder,
  value,
  onChange,
}: TextInputProps) => {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }

  return (
    <InputContainer>
      <input
        type={"text"}
        placeholder={placeholder}
        required
        value={value}
        onChange={handleChange}
      />
    </InputContainer>
  );
};
