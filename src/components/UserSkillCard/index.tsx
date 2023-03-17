import { Notify } from "notiflix";
import { useContext, useState } from "react";
import userSkillservice from "../../api/services/userSkillService";
import { AuthContext } from "../../context/AuthContext";
import { userSkillModel, userSkillUpdateModel } from "../../models/userSkill";
import {
  ButtonHandleSkill,
  CardContainer,
  LastBox,
  MinusButton,
  PlusButton,
} from "./styles";

interface Props {
  userSkill: userSkillModel;
}

export const UserSkillCard = ({ userSkill }: Props) => {
  const { getUsersSkillsUpdated } = useContext(AuthContext);
  const [newLevel, setNewLevel] = useState<number>(userSkill.knowledgeLevel);

  const increaseLevel = () => {
    newLevel == 10 ? setNewLevel(10) : setNewLevel(newLevel + 1);
  };

  const decreaseLevel = () => {
    newLevel == 0 ? setNewLevel(0) : setNewLevel(newLevel - 1);
  };

  const userSkillUpdated: userSkillUpdateModel = {
    knowledgeLevel: newLevel,
  };

  async function updateUserSkill() {
    try {
      await userSkillservice.userSkillUPDATE(userSkill.id, userSkillUpdated);
      getUsersSkillsUpdated();
      Notify.success(`${userSkill.skill.name} atualizado com sucesso!`);
    } catch (err) {
      console.log(err);
      Notify.failure("Ops... Não foi possível atualizar essa habilidade");
    }
  }
  async function removeUserSkill() {
    try {
      await userSkillservice.userSkillDELETE(userSkill.id);
      Notify.success(`${userSkill.skill.name} removido com sucesso!`);
      getUsersSkillsUpdated();
    } catch (err) {
      console.log(err);
      Notify.failure("Ops... Não foi possível remover essa habilidade");
    }
  }

  function handleClick() {
    {
      newLevel === userSkill.knowledgeLevel
        ? removeUserSkill()
        : updateUserSkill();
    }
  }

  return (
    <CardContainer>
      <h1>{userSkill.skill.name}</h1>
      <img src={userSkill.skill.image_url} alt="" />
      <p>{userSkill.skill.description}</p>
      <LastBox>
        <span>
          <MinusButton onClick={decreaseLevel} />
          <h3>Level: {newLevel}</h3>
          <PlusButton onClick={increaseLevel} />
        </span>
        <h2 style={{ fontSize: "0.75rem" }}>
          Atualizado em: {userSkill.updatedAt.slice(0, 10)}
        </h2>
        <ButtonHandleSkill
          onClick={handleClick}
          style={{
            backgroundColor:
              newLevel === userSkill.knowledgeLevel
                ? "#fb3959"
                : "rgba(255,255,255,0.1)",
          }}
        >
          {newLevel === userSkill.knowledgeLevel ? "Deletar" : "Atualizar"}
        </ButtonHandleSkill>
      </LastBox>
    </CardContainer>
  );
};
