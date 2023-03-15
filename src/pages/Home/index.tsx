import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Home = () => {
  const { setUser } = useContext(AuthContext);
  const { user, token } = useContext(AuthContext);

  function logout() {
    localStorage.clear();
    console.log(user);
    console.log(token);
    // alert(user);
    setUser(null);
  }

  return (
    <div>
      <h1>Essa é a home</h1>
      <a onClick={logout} href="#">
        Logout
      </a>
    </div>
  );
};
