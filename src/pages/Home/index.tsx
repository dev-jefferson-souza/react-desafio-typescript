import * as Dialog from "@radix-ui/react-dialog";
import { useContext } from "react";
import { SkillsModal } from "../../components/Modal";
import { AuthContext } from "../../context/AuthContext";
import {
  Container,
  LogoutIcon,
  OpenModalIcon,
  UserSkillsContainer,
} from "./styles";

export const Home = () => {
  const { setUser, setToken } = useContext(AuthContext);

  function logout() {
    localStorage.clear();
    setUser(null);
    setToken(null);
  }

  return (
    <Container>
      <LogoutIcon onClick={logout} title="Sair da conta" />
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <OpenModalIcon title="Abrir modal" />
        </Dialog.Trigger>

        <SkillsModal />
      </Dialog.Root>
      <UserSkillsContainer>
        <h1>Essas são suas habilidades</h1>
      </UserSkillsContainer>
    </Container>
  );
};
