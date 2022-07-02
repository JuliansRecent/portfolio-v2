import './SkillsPage.css'

function SkillsPage(props) {
    return (
			<section className='skills-page-container container-fluid d-flex flex-column justify-content-center'>
				<h2 className='skills-title pb-4'>Skills</h2>
				<div className='skills-svg-container flex-wrap d-flex container justify-content-center'>
					<i className='icon p-1 devicon-html5-plain-wordmark'></i>
					<i className='icon p-1 devicon-css3-plain-wordmark'></i>
					<i className='icon p-1 devicon-javascript-plain'></i>
					<i className='icon p-1 devicon-react-original-wordmark'></i>
					<i className='icon p-1 devicon-python-plain-wordmark'></i>
					<i className='icon p-1 devicon-bootstrap-plain-wordmark'></i>
					<i className='icon p-1 devicon-git-plain-wordmark'></i>
					<i className='icon p-1 devicon-github-original-wordmark'></i>
					<i className='icon p-1 devicon-mongodb-plain-wordmark'></i>
					<i className='icon p-1 devicon-express-original-wordmark'></i>
				</div>
			</section>
		);
}

export default SkillsPage;