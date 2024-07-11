/*

우리은행 6091 2623 118 756
*/

// import { useState } from "react";tt

import "./App.css";
import { useTheme } from "./components/ThemeProvider";
import { ModeToggle } from "./components/ThemeToggler";
import FormTry01 from "./versions/FormTry01";

function App() {
  // const [count, setCount] = useState(0);
  const { theme } = useTheme();
  console.log(theme);

  return (
    <div className="wrapper bg-background w-[calc(100%)] p-4">
      <ModeToggle />
      <h1>hello</h1>
      <FormTry01 />
    </div>
  );
}

export default App;
