import Header from "./components/header";
import { Main } from "./components/main";
import About from "./components/about";
import Tools from "./components/tools/index";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Cursor from "./components/cursor/cursor";

export default function App() {

  return (
    <>
        <Header />
      <Cursor />
        <Main />
        <About />
        <Tools />
        <Projects />
        <Footer />
    </>);
};