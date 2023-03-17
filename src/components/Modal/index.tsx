import * as Dialog from "@radix-ui/react-dialog";
import { Notify } from "notiflix";
import { useEffect, useState } from "react";
import { IoIosConstruct } from "react-icons/io";
import skillService from "../../api/services/skillService";
import { SkillModel } from "../../models/skillModel";
import { ModalsCard } from "./ModalsCard";
import { CloseButton, Content, Overlay } from "./styles";

export const SkillsModal = () => {
  const [skillList, setSkillList] = useState<SkillModel[]>([]);

  async function loadSkills() {
    try {
      const response = await skillService.skillGETALL();
      setSkillList(response.data);
    } catch (e) {
      Notify.failure("Não foi possível carregar as skills");
    }
  }
  useEffect(() => {
    setTimeout(() => {
      loadSkills();
    }, 500);
  }, []);

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <span
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            margin: "auto",
            width: "fit-content",
          }}
        >
          <Dialog.Title style={{ width: "fit-content" }}>
            Escolha uma skill
          </Dialog.Title>
          <IoIosConstruct size={26} />
        </span>
        <CloseButton />
        <div>
          {skillList.map((skill) => (
            <ModalsCard skill={skill} key={skill.id} />
          ))}
        </div>
        <p
          style={{
            textAlign: "center",
            marginTop: "16px",
            fontSize: "0.85rem",
            fontWeight: "500",
          }}
        >
          A skill escolhida será atribuída ao seu perfil
        </p>
      </Content>
    </Dialog.Portal>
  );
};
