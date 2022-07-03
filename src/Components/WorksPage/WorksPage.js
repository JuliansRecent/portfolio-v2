import './WorksPage.css'
import '../../Assets/Blouson-photo.png'

function ProjectsPage(props) {
    return (
			<section className='projects-page-container'>
				<h2 className='works-title mb-3'>Works</h2>
				<ul className='projects-container container fluid flex-wrap'>
					<li className='project-container-container mb-3'>
						<div className='opacity-container'>
							<div className='project-container p-2'>
								<a href='' className='project-title'>
									React Mock Ecomm Store
								</a>
								<p className='project-desc pt-3'>
									{' '}
									A mock ecommerce store made using react, css, and the
									FakeStoreAPI. Currently, I am making my own API to enhance
									this project by creating my own products to display.
								</p>
                                <span className='tech-used'>Technologies Used:</span>
								<ul className='project-tech-list d-flex flex-row gap-3 container'> 
									<li className='tech'>React</li>
									<li className='tech'>CSS</li>
									<li className='tech'>FakeStoreAPI</li>
									<li className='tech'>Netlify</li>
								</ul>
								<ul className='project-links'></ul>
							</div>
						</div>
					</li>
					<li className='project-container-container mb-3'>
						<div className='opacity-container'>
							<div className='project-container p-2'>
								<a href='' className='project-title'>
									React Mock Ecomm Store
								</a>
								<p className='project-desc'></p>
								<ul className='project-tech-list'></ul>
								<ul className='project-links'></ul>
							</div>
						</div>
					</li>
					<li className='project-container-container mb-3'>
						<div className='opacity-container'>
							<div className='project-container p-2'>
								<a href='' className='project-title'>
									React Mock Ecomm Store
								</a>
								<p className='project-desc'></p>
								<ul className='project-tech-list'></ul>
								<ul className='project-links'></ul>
							</div>
						</div>
					</li>
				</ul>
			</section>
		);
}

export default ProjectsPage;