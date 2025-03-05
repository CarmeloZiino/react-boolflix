import { BrowserRouter, Routes, Route } from "react-router-dom";

//HomePage

import HomePage from "./pages/HomePage";

//Layout
import DefaultLayout from "./layouts/DefaultLayout";

//Context


function App() {
  return (
  
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage} />
          </Route>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
