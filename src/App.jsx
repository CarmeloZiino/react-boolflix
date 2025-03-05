import { BrowserRouter, Routes, Route } from "react-router-dom";

//HomePage

import HomePage from "./pages/HomePage";

//Layout

import DefaultLayout from "./layouts/DefaultLayout";


//Context

import { GlobalProvider } from "./context/GlobalContext";


function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
