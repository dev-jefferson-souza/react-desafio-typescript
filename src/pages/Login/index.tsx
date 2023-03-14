import { useContext, useEffect, useState } from "react";
import { RoundedButton } from "../../components/Buttons/RoundedButton";
import { Checkbox } from "../../components/Checkbox";
import { CommonInput } from "../../components/Inputs/CommonInput";
import { SecureInput } from "../../components/Inputs/SecureInput";
import { Spacer } from "../../components/Spacer";
import { AuthContext } from "../../context/AuthContext";
import { signInProps } from "../../models/signIn";

import { Blob, Container, Form } from "./styles";

export const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [savePassword, setSavePassword] = useState(false);
  const [isDisabledSubmit, setIsDisabledSubmit] = useState(true);
  const { signIn } = useContext(AuthContext);

  function handleLoginChange(value: string) {
    setLogin(value);
  }

  function handlePasswordChange(value: string) {
    setPassword(value);
  }

  function handleSavePasswordChange() {
    setSavePassword(!savePassword);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const request: signInProps = {
      savePassword: savePassword,
      user: {
        login: login,
        password: password,
      },
    };

    signIn(request);
  }

  function enableSubmitButton() {
    {
      login !== "" && password !== ""
        ? setIsDisabledSubmit(false)
        : setIsDisabledSubmit(true);
    }
  }

  useEffect(() => {
    enableSubmitButton();
  }, [login, password]);

  return (
    <Container>
      <Blob />
      <Form onSubmit={handleSubmit}>
        <h1>Acessar conta</h1>
        <h2>Login</h2>
        <CommonInput
          placeholder="Digite seu login"
          value={login}
          onChange={handleLoginChange}
        />
        <Spacer y="24px" x="0px" />
        <h2>Senha</h2>
        <SecureInput
          placeholder="Digite sua senha"
          value={password}
          onChange={handlePasswordChange}
        />
        <Spacer y="12px" x="0px" />
        <Checkbox
          label="Salvar senha"
          isChecked={savePassword}
          onChange={handleSavePasswordChange}
          backgroundColor={savePassword ? "#007bff" : "#fff"}
          borderColor={savePassword ? "#007bff" : "#999"}
        />
        <Spacer y="24px" x="0px" />
        <span>
          <RoundedButton
            type="submit"
            color="#fb3959"
            title="Entrar"
            isDisabled={isDisabledSubmit}
          />
        </span>
        <Spacer y="36px" x="0px" />
        <div>
          <p>Não possui uma conta?</p>
          <a href="">Criar conta</a>
        </div>
      </Form>
      {/* <button onClick={() => showError()}>n</button> */}
    </Container>
  );
};
