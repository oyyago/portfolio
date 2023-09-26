import Header from "./components/header";
import { Main } from "./components/main";
import About from "./components/about";
import Tools from "./components/tools/index";
import Footer from "./components/footer";
import Cursor from "./components/cursor/cursor";
import Projects from "./components/projects";
import './App.css'

export default function App() {
  return (
    <>
      <Cursor />
      <Header />
      <Main />
      <About />
      <Tools />
      <Projects/>
      <Footer />
    </>);
};