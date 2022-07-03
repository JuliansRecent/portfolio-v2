import './WorksPage.css'
import '../../Assets/Blouson-photo.png'
import '../../Assets/under-construction.jpg'

function ProjectsPage(props) {
    return (
			<section className='projects-page-container'>
				<h2 className='works-title mb-2'>Works</h2>
				<ul className='projects-container container fluid flex-wrap'>
					<a href='https://react-mock-clothing-store.netlify.app'>
						<li className='project-container-container1 mb-2'>
							<div className='opacity-container'>
								<div className='project-container container'>
									<p className='project-title'>
										Blouson - Personal Project
									</p>
									<p className='project-desc pt-3'>
										A mock ecommerce store made using React, CSS, and the
										FakeStoreAPI. Currently, I am making my own API to enhance
										this project by creating my own products to display.
									</p>
									<div className='tech-and-icon-container d-flex justify-content-between'>
										<div className='d-flex flex-column'>
											<span className='tech-used'>Technologies Used: </span>
											<ul className='project-tech-list d-flex flex-row gap-2 container flex-wrap '>
												<li className='tech'>React</li>
												<li className='tech'>CSS</li>
												<li className='tech'>FakeStoreAPI</li>
											</ul>
										</div>
										<ul className='project-links d-flex flex-column justify-content-end align-items-center '>
											<a href='https://github.com/JuliansRecent/react-clothing-store'>
												<i className=' devicon-github-original-wordmark'></i>
											</a>
											<a href='https://react-mock-clothing-store.netlify.app'>
												<button className='btn'>Live</button>
											</a>
										</ul>
									</div>
								</div>
							</div>
						</li>
					</a>
					<a href=''>
						<li className='project-container-container2 mb-2'>
							<div className='opacity-container'>
								<div className='project-container container'>
									<p className='project-title'>
										JMS Pet Sitting - Team Project
									</p>
									<p className='project-desc'>
										A web application similar to LinkedIn for the purpose of all
										things pets, whether it's finding a pet sitter in your area,
										finding pet sitter gigs, or posting for fun. Currently under
										construction!
									</p>
									<div className='tech-and-icon-container d-flex justify-content-between'>
										<div>
											<span className='tech-used'>Technologies Used: </span>
											<ul className='project-tech-list d-flex flex-row gap-2 container flex-wrap'>
												<li className='tech'>React</li>
												<li className='tech'>CSS</li>
												<li className='tech'>Bootstrap</li>
												<li className='tech'>Express</li>
												<li className='tech'>MongoDB</li>
												<li className='tech'>Mongoose</li>
											</ul>
										</div>
										<ul className='project-links d-flex flex-column justify-content-end align-items-center '>
											<a href='https://github.com/sanand100/jms-pet-sitting/tree/js-dev'>
												<i className=' devicon-github-original-wordmark'></i>
											</a>
											<a href=''>
												<button className='btn'>Live</button>
											</a>
										</ul>
									</div>
								</div>
							</div>
						</li>
					</a>
					<a href=''>
						<li className='project-container-container3 mb-3'>
							<div className='opacity-container'>
								<div className='project-container container'>
									<p className='project-title'>
										React Mock Ecomm Store
									</p>
									<p className='project-desc'></p>
									<div className='tech-and-icon-container d-flex justify-content-between'>
										<div>
											<span className='tech-used'>Technologies Used: </span>
											<ul className='project-tech-list d-flex flex-row gap-2 container flex-wrap'>
												<li className='tech'>React</li>
												<li className='tech'>CSS</li>
												<li className='tech'>Bootstrap</li>
												<li className='tech'>Express</li>
												<li className='tech'>MongoDB</li>
												<li className='tech'>Mongoose</li>
											</ul>
										</div>
										<ul className='project-links d-flex flex-column justify-content-end align-items-center '>
											<a href='https://github.com/sanand100/jms-pet-sitting/tree/js-dev'>
												<i className=' devicon-github-original-wordmark'></i>
											</a>
											<a href=''>
												<button className='btn'>Live</button>
											</a>
										</ul>
									</div>
								</div>
							</div>
						</li>
					</a>
				</ul>
			</section>
		);
}

export default ProjectsPage;