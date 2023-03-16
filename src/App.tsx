import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Blob } from "./components/Blob";
import { AuthProvider } from "./context/AuthContext";
import { Router } from "./routes/router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Blob />
          <Router />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
