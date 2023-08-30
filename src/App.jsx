import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import HomePage from "./components/Home";
import StatusPage from "./components/Status";
import HitungPage from "./components/Hitung";
import MagicPage from "./components/Magic";
import ZodiacPage from "./components/Zodiac";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" Component={HomePage}/>
      <Route path="/status" Component={StatusPage}/>
      <Route path="/hitung" Component={HitungPage}/>
      <Route path="/magic" Component={MagicPage}/>
      <Route path="/zodiac" Component={ZodiacPage}/>
    </Routes>
    </>
  );
}

export default App;