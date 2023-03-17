import * as Dialog from "@radix-ui/react-dialog";
import { useContext, useEffect } from "react";
import { SkillsModal } from "../../components/Modal";
import { UserSkillCard } from "../../components/UserSkillCard";
import { AuthContext } from "../../context/AuthContext";
import {
  Container,
  LogoutIcon,
  OpenModalIcon,
  UserSkillsContainer,
} from "./styles";

export const Home = () => {
  const {
    setUser,
    setToken,
    usersSkills,
    getUsersSkillsUpdated,
    setUserSkills,
  } = useContext(AuthContext);

  useEffect(() => {
    getUsersSkillsUpdated();
  }, []);

  function logout() {
    localStorage.clear();
    setUser(null);
    setToken(null);
    setUserSkills(null);
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
        <div>
          {usersSkills?.map((userSkill) => (
            <UserSkillCard userSkill={userSkill} key={userSkill.id} />
          ))}
        </div>
      </UserSkillsContainer>
    </Container>
  );
};
