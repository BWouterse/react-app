import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import FormPage from "./pages/FormPage";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <NavBar textOne="Header" />
      <Routes>
        <Route path="/" Component={MainPage}></Route>
        <Route path="/form" Component={FormPage}></Route>
      </Routes>
    </>
  );
}

export default App;
