import Header from "./components/header";
import { Main } from "./components/main";
import About from "./components/about";
import Tools from "./components/tools/index";
import Footer from "./components/footer";
import Cursor from "./components/cursor/cursor";
import './App.css'

export default function App() {
  
  return (
    <>
      <Cursor />
      <Header />
    <div className="papai">
      <Main />
      <About />
      <Tools />
    </div>
      <Footer />
    </>);
};