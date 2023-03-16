import { Notify } from "notiflix";
import { useContext } from "react";
import userSkillservice from "../../../api/services/userSkillService";
import { AuthContext } from "../../../context/AuthContext";
import { SkillModel } from "../../../models/skillModel";
import { userSkillModel } from "../../../models/userSkill";
import { RoundedButton } from "../../Buttons/RoundedButton";
import { ModalsCardContainer } from "./styles";

export const ModalsCard = ({
  id,
  name,
  version,
  description,
  image_url,
}: SkillModel) => {
  const { user } = useContext(AuthContext);

  async function addToUserSkill(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newUserSkill: userSkillModel = {
      skill: { id: id },
      user: { id: user?.id || 0 },
    };

    try {
      console.log(user);
      const response = await userSkillservice.userSkillPOST(newUserSkill);
      console.log(response.status);
      console.log(response.data);
    } catch (err) {
      console.log(err);
      Notify.failure("Não foi possível adicionar a skill");
    }
  }

  return (
    <ModalsCardContainer onSubmit={addToUserSkill}>
      <h3>{name}</h3>
      <img src={image_url} alt="" />
      <h4>{version}</h4>
      <p>{description}</p>
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
