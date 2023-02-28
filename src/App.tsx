import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={{}}>
      <div className="App">
        <GlobalStyles />
      </div>
    </ThemeProvider>
  );
}

export default App;
