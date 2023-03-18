import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RoundedButton } from "../../components/Buttons/RoundedButton";
import { Checkbox } from "../../components/Checkbox";
import { CommonInput } from "../../components/Inputs/CommonInput";
import { SecureInput } from "../../components/Inputs/SecureInput";
import { Spacer } from "../../components/Spacer";
import { AuthContext } from "../../context/AuthContext";
import { signInProps } from "../../models/signIn";
import { userModelLogin } from "../../models/userModel";

import { Container, Form } from "./styles";

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

    const user: userModelLogin = {
      login: login,
      password: password,
    };

    const request: signInProps = {
      savePassword: savePassword,
      user: user,
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
          label="Lembrar de mim"
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
          <Spacer y="36px" x="0px" />
          <div>
            <p>Não possui uma conta?</p>
            <Link to="/register">Criar conta</Link>
          </div>
        </span>
      </Form>
    </Container>
  );
};
