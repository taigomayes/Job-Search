import React, { useState } from "react";
import "./App.css";
import { Jobs } from "./components/Jobs";
import { Filter } from "./components/Filter";
import header from "./images/bg-header-desktop.svg";
import styled from "styled-components";
import { Search } from "./components/Search";

const Header = styled.img`
  width: 100vw;
  height: 200px;
  position: fixed;
  top: -130px;

  z-index: 50;
  background: white;
`;

const Logo = styled.div`
  position: fixed;
  top: 15px;
  left: 45px;
  color: hsl(180, 29%, 50%);
  font-weight: 700;
  font-size: 14px;
  z-index: 200;
  cursor: pointer;
`;

function App() {
  const [filter, setFilter] = useState([]);
  const [term, setTerm] = useState("");
  const [toggle, setToggle] = useState(false);

  

  return (
    <div className="App">
      <Header src={header} />

      <Search term={term} setTerm={setTerm} />

      <Filter toggle={toggle} setToggle={setToggle} filter={filter} setFilter={setFilter} />

      <Jobs toggle={toggle} term={term} filter={filter} setFilter={setFilter} />
    </div>
  );
}

export default App;
