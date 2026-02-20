import "./App.css";
import { Header} from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Auth } from "./pages/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
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
