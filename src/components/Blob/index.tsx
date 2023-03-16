import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { BlobContainer } from "./styles";

export const Blob = () => {
  const { user } = useContext(AuthContext);
  return <BlobContainer user={user} />;
};
