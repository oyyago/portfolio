import About from "../components/about";
import Footer from "../components/footer";
import Header from "../components/header";
import Main from "../components/main";
import Projects from "../components/projects";
import Tools from "../components/tools";

export default function Portfolio() {
    return (
        <>
            <Header />
                <Main />
                <About />
                <Tools />
                <Projects />
            <Footer />
        </>
    );
}