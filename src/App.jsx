//Context
import { AppProvider } from "./context/AppContext";

//components
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Header />
          <Main />
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
