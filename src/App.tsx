import Header from "./components/header";
import Footer from "./components/footer";
import ProjectsGrid from "./components/projectsGrid";

import "./App.css";

function App() {
    return (
        <>
            <section id="top">
                <div className="header">
                    <Header />
                </div>

                <div className="pres">
                    <h1>Hi ! I'm Tim</h1>
                    <p>
                        I write some code and tinker with computers <br/> <br />I'm
                        currently studying web developement and more ... 
                    </p>
                </div>
            </section>

            <section id="projects">
                <ProjectsGrid />
            </section>

            <div id="footer">
                <Footer />
            </div>

            <div className="endpoint">
                <p>Overkill with React ❤️</p>
            </div>
        </>
    );
}

export default App;
