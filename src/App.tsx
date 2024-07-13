/*


*/

// import { useState } from "react";tt

import "./App.css";
import { useTheme } from "./components/ThemeProvider";
import { ModeToggle } from "./components/ThemeToggler";
import { Toaster } from "./components/ui/toaster";
import FormTry01 from "./versions/FormTry01";

function App() {
  // const [count, setCount] = useState(0);
  const { theme } = useTheme();
  console.log(theme);

  return (
    <div className="wrapper bg-background w-[calc(100%)] p-4">
      <ModeToggle />
      <h1>hello world</h1>
      <FormTry01 />
      <Toaster />
    </div>
  );
}

export default App;
