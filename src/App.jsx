import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header} from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Auth } from "./pages/Auth";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)
  return (
    <>

    <BrowserRouter>
      <Header />

      <main className="min-h-screen flex flex-col bg-slate-40 text-slate-900\\">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </main>

      <Footer/>
    </BrowserRouter>

    </>
  );
}
export default App;
