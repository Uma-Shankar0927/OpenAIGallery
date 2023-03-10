import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { logo,addIcon} from "./assets";
import botAI from "./assets/botAI.png"
import { Home, CreatePost } from "./pages";

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-[#0e0e0e] sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <div className="logos">
          <img src={botAI} alt="" className="botimg"/>
          <img src={logo} alt="logo" className="w-28 h-8" />
        </div>
      </Link>

      <Link
        to="/create-post"
        className="font-inter font-medium bg-[#FFF] text-black px-4 py-2 rounded-md"
      >
        <div className="adddiv gap-1">
          <img src={addIcon} alt="" />
          Create
        </div>
      </Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#0e0e0e] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
