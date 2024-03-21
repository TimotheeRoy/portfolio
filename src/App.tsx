import Header from "./components/header"
import Footer from "./components/footer"
import ProjectsGrid from "./components/projectsGrid"

import './App.css'

function App() {

  return (<>
    
    <Header />

    <div className='pres'>
      <h1>Hi ! I'm Tim</h1>
      <p>
        I write some code and tinker with computers
      </p>
    </div>
    
    <div id="projects">
    <ProjectsGrid />
    </div>

    <div id="footer">
    <Footer />
    </div>
  </>)
}

export default App
