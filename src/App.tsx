/*


*/

// import { useState } from "react";tt

import "./App.css";
import { useTheme } from "./components/ThemeProvider";
import { ModeToggle } from "./components/ThemeToggler";
import { Toaster } from "./components/ui/toaster";
import FormTry01 from "./versions/FormTry01";
import RecursiveComponent from "./versions/RecursiveComponent";

function App() {
  // const [count, setCount] = useState(0);
  const { theme } = useTheme();
  console.log(theme);

  return (
    <div className="wrapper grid min-h-[100dvh] grid-rows-[auto-1fr-auto] bg-background w-[calc(100%)] p-4">
      <header className="top-0 sticky flex flex-row">
        <h1>hello world</h1>
        <ModeToggle />
      </header>
      <main>
        <FormTry01 />
        <RecursiveComponent />
        <Toaster />
      </main>
      <footer>Copyright no copyrights. All rights reserved.</footer>
    </div>
  );
}

export default App;
