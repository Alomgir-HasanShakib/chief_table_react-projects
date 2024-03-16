import { useState } from "react";
import "./App.css";
import Header from "./componants/header/Header";
import Recipies from "./componants/recipies/Recipies";

import Title from "./componants/title/Title";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Title></Title>

      <Recipies></Recipies>
    </>
  );
}

export default App;
