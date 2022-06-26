import NavBar from "./Components/NavBar/NavBar";
import LandingPage from "./Components/LandingPage/LandingPage"
import AboutPage from "./Components/AboutPage/AboutPage"
import ProjectsPage from "./Components/ProjectsPage/ProjectsPage"
import ContactPage from "./Components/ContactPage/ContactPage"


function App() {
  return (
    <div className="app">
      <header>
        <NavBar />
      </header>
      <main>
        <LandingPage />
        <AboutPage />
        <ProjectsPage />
        <ContactPage />
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
