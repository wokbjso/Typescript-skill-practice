import { debounce, throttle } from "lodash";
import React from "react";
import { styled } from "styled-components";

function App() {
  const textInputted = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }, 500);
  return <Input onChange={textInputted} placeholder="입력하세요."></Input>;
}

const Input = styled.input`
  width: 300px;
  height: 50px;
  background-color: wheat;
  border-radius: 10px;
  font-size: 20px;
`;

export default App;
