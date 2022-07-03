import NavBar from "./Components/NavBar/NavBar";
import LandingPage from "./Components/LandingPage/LandingPage"
import AboutPage from "./Components/AboutPage/AboutPage"
import WorksPage from "./Components/WorksPage/WorksPage"
import ContactPage from "./Components/ContactPage/ContactPage"
import { Routes, Route, Link } from 'react-router-dom'
import SkillsPage from "./Components/SkillsPage/SkillsPage";

function App() {
  return (
		<div>
			<header>
				<NavBar />
			</header>
			<main>
				<LandingPage />
				<AboutPage />
				<SkillsPage />
				<WorksPage />
				<ContactPage />
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
