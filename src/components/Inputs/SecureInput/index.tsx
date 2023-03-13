import { ChangeEvent, useState } from "react";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { TextInputProps } from "../props";
import { InputContainer } from "../styles";

export const SecureInput: React.FC<TextInputProps> = ({
  placeholder,
  value,
  onChange,
}: TextInputProps) => {
  const [secure, setSecure] = useState(true);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }

  function handleSecure() {
    secure === true ? setSecure(false) : setSecure(true);
  }

  return (
    <InputContainer>
      <input
        value={value}
        onChange={handleChange}
        type={secure === true ? "password" : "text"}
        placeholder={placeholder}
        required
      />
      <button type="button" onClick={handleSecure}>
        {secure ? (
          <RxEyeClosed size={"24px"} color={"#fff"} title={"Mostrar senha"} />
        ) : (
          <RxEyeOpen size={"24px"} color={"#fff"} title={"Esconder senha"} />
        )}
      </button>
    </InputContainer>
  );
};
