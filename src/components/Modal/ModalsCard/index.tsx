import { Notify } from "notiflix";
import { useContext } from "react";
import userSkillservice from "../../../api/services/userSkillService";
import { AuthContext } from "../../../context/AuthContext";
import { SkillModel } from "../../../models/skillModel";
import { userSkillPostModel } from "../../../models/userSkill";
import { RoundedButton } from "../../Buttons/RoundedButton";
import { ModalsCardContainer } from "./styles";

interface Props {
  skill: SkillModel;
}

export const ModalsCard = ({ skill }: Props) => {
  const { user } = useContext(AuthContext);

  async function addToUserSkill(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newUserSkill: userSkillPostModel = {
      skill: { id: skill.id },
      user: { id: user?.id || 0 },
    };

    try {
      await userSkillservice.userSkillPOST(newUserSkill);
      Notify.success(`${skill.name} adicionado com sucesso!`);
    } catch (err) {
      console.log(err);
      Notify.failure("Não foi possível adicionar a skill");
    }
  }

  return (
    <ModalsCardContainer onSubmit={addToUserSkill}>
      <h3>{skill.name}</h3>
      <img src={skill.image_url} alt="" />
      <h4>{skill.version}</h4>
      <p>{skill.description}</p>
      <span>
        <RoundedButton
          type="submit"
          color="#fb3959"
          isDisabled={false}
          title={"Adicionar Skill"}
        />
      </span>
    </ModalsCardContainer>
  );
};
