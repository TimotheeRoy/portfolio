import Footer from "./components/footer";
import ProjectsGrid from "./components/projectsGrid";
import { ReactTyped } from "react-typed";

import { useEffect, useState } from "react";

import "./App.css";

function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [count, setCount] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1);
        }, 2000);
    }, [count]);

    if (count > 5) setCount(1);
    return (
        <>
            <div className={darkMode ? "dark" : "light"}>
                <section id="top">
                    <div className="header">
                        <button
                            className="btn-dark"
                            onClick={() => setDarkMode(!darkMode)}
                        >
                            {!darkMode ? "🌙" : "☀️"}
                        </button>
                    </div>

                    <div className="pres">
                        <ReactTyped
                            className="greetings"
                            strings={["Hi ! I'm Tim"]}
                            typeSpeed={60}
                            style={{ fontFamily: "tauri" }}
                        />

                        <ReactTyped
                            className="about-me"
                            strings={[
                                "I write some code and tinker with computers",
                                "I'm currently studying web developement and more ...",
                            ]}
                            typeSpeed={90}
                            loop
                            style={{ fontFamily: "Noto Serif JP" }}
                        />
                    </div>
                </section>

                <section id="projects">
                    <ProjectsGrid isDark={darkMode} />
                </section>

                <div id="footer">
                    <Footer isDark={darkMode} />
                </div>

                <div className="endpoint">
                    <p>Overkill with React ❤️</p>
                </div>
            </div>
        </>
    );
}

export default App;
