import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./context/AuthContext";
import { Login } from "./pages/Login";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AuthProvider>
        <Login />
        {/* <Register /> */}
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
