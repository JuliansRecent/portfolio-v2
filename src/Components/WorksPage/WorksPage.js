import './WorksPage.css'
import '../../Assets/Blouson-photo.png'
import '../../Assets/under-construction.jpg'

function ProjectsPage(props) {
    return (
			<section className='projects-page-container' id='works'>
				<h2 className='works-title mb-5'>Works</h2>
				<ul className='projects-container d-flex justify-content-center flex-column align-items-center'>
					<a
						href='https://movingco.netlify.app/'
						className='projects-container'>
						<li className='project-container-container1 mb-1'></li>
					</a>
					<div className='project-container container'>
						<p className='project-title'>Moving Co.</p>
						<p className='project-desc'>
							A moving centric blog that my team and I created due to multiple
							of us moving in the near future. Users can sign up, sign in,
							create user profiles, and post blogs!
						</p>
						<div className='tech-and-icon-container d-flex justify-content-between'>
							<div>
								<span className='tech-used'>Technologies Used: </span>
								<ul className='project-tech-list d-flex flex-row gap-2 container flex-wrap'>
									<li className='tech'>React.js</li>
									<li className='tech'>CSS</li>
									<li className='tech'>Bootstrap</li>
									<li className='tech'>Java</li>
									<li className='tech'>PostgreSQL</li>
								</ul>
							</div>
							<ul className='project-links d-flex flex-column justify-content-end align-items-center mb-5'>
								<a href='https://github.com/AnAppThatMovesYou'>
									<i className='devicon-github-original-wordmark'></i>
								</a>
								<a href='https://movingco.netlify.app/'>
									<button className='btn'>Live</button>
								</a>
							</ul>
						</div>
					</div>

					{/* <a href='https://redoit.netlify.app/' className='projects-container'>
						<li className='project-container-container2 mb-1'></li>
					</a>
					<div className='project-container container'>
						<p className='project-title'>Redo-It</p>
						<p className='project-desc'>
							A social media platform with full CRUD functionality. RedoIt
							allows users to sign up, log in, make posts, comment on posts, and
							much more!
						</p>
						<div className='tech-and-icon-container d-flex justify-content-between'>
							<div>
								<span className='tech-used'>Technologies Used: </span>
								<ul className='project-tech-list d-flex flex-row gap-2 container flex-wrap'>
									<li className='tech'>React.js</li>
									<li className='tech'>CSS</li>
									<li className='tech'>Bootstrap</li>
									<li className='tech'>Express</li>
									<li className='tech'>MongoDB</li>
									<li className='tech'>Mongoose</li>
								</ul>
							</div>
							<ul className='project-links d-flex flex-column justify-content-end align-items-center mb-5'>
								<a href='https://github.com/re-do-it'>
									<i className=' devicon-github-original-wordmark'></i>
								</a>
								<a href='https://redoit.netlify.app/'>
									<button className='btn'>Live</button>
								</a>
							</ul>
						</div>
					</div> */}

					<a href='https://blouson.netlify.app/' className='projects-container'>
						<li className='project-container-container3 mb-1'></li>
					</a>
					<div className='project-container container'>
						<p className='project-title'>Blouson - Personal Project</p>
						<p className='project-desc pt-3'>
							A mock ecommerce store made using React, CSS, and the
							FakeStoreAPI. Currently, I am making my own API to enhance this
							project by creating my own products to display.
						</p>
						<div className='tech-and-icon-container d-flex justify-content-between'>
							<div className='d-flex flex-column'>
								<span className='tech-used'>Technologies Used: </span>
								<ul className='project-tech-list d-flex flex-row gap-2 container flex-wrap '>
									<li className='tech'>React.js</li>
									<li className='tech'>CSS</li>
									<li className='tech'>FakeStoreAPI</li>
								</ul>
							</div>
							<ul className='project-links d-flex flex-column justify-content-end align-items-center mb-5'>
								<a href='https://github.com/JuliansRecent/react-clothing-store'>
									<i className=' devicon-github-original-wordmark'></i>
								</a>
								<a href='https://blouson.netlify.app/'>
									<button className='btn'>Live</button>
								</a>
							</ul>
						</div>
					</div>
				</ul>
			</section>
		);
}

export default ProjectsPage;