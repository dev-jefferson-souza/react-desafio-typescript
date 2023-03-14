import { Notify } from "notiflix";
import { useEffect, useState } from "react";
import userService from "../../api/services/userService";
import { RoundedButton } from "../../components/Buttons/RoundedButton";
import { CommonInput } from "../../components/Inputs/CommonInput";
import { SecureInput } from "../../components/Inputs/SecureInput";
import { Spacer } from "../../components/Spacer";
import { userModel } from "../../models/userModel";

import { Blob, Container, Form } from "./styles";

export const Register = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isDisabledSubmit, setIsDisabledSubmit] = useState(true);

  function handleLoginChange(value: string) {
    setLogin(value);
  }

  function handlePasswordChange(value: string) {
    setPassword(value);
  }

  function handleRepeatPasswordChange(value: string) {
    setRepeatPassword(value);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // const response = await userService.userGET(1027);
    // console.log(response.data);

    const user: userModel = {
      login: login,
      password: password,
    };

    if (password === repeatPassword) {
      try {
        const response = await userService.userPOST(user);
        {
          response.status === 201
            ? Notify.success("Conta criada com sucesso!")
            : null;
        }
      } catch (e) {
        Notify.failure("Já existe uma conta com esse login");
        console.log(e);
      }
    } else {
      Notify.failure("As senhas não coincidem");
    }
  }

  function enableSubmitButton() {
    {
      login !== "" && password !== "" && repeatPassword !== ""
        ? setIsDisabledSubmit(false)
        : setIsDisabledSubmit(true);
    }
  }

  useEffect(() => {
    enableSubmitButton();
  }, [login, password, repeatPassword]);

  return (
    <Container>
      <Blob />
      <Form onSubmit={handleSubmit}>
        <h1>Criar conta</h1>
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
        <Spacer y="24px" x="0px" />
        <h2>Confirmar senha</h2>
        <SecureInput
          placeholder="Digite sua senha novamente"
          value={repeatPassword}
          onChange={handleRepeatPasswordChange}
        />
        <Spacer y="24px" x="0px" />
        <span>
          <RoundedButton
            type="submit"
            color="#fb3959"
            title="Criar conta"
            isDisabled={isDisabledSubmit}
          />
        </span>
        <Spacer y="36px" x="0px" />
        <div>
          <p>Já possui uma conta?</p>
          <a href="">Acessar</a>
        </div>
      </Form>
      {/* <button onClick={() => showError()}>n</button> */}
    </Container>
  );
};
