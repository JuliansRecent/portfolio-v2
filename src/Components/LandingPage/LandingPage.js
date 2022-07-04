import './LandingPage.css'
import  resume from '../../Assets/julian-seguras-resume.pdf'

function LandingPage(props) {
    return (
			<section className='landing-page-container d-flex flex-column justify-content-center'>
				<h1 className='hi-statement'>Hi, my name is Julian.</h1>
				<h2 className='im-statement'>Full Stack Developer</h2>
				<p className='i-specialize-statement'>
					I specialize in front-end development and I'm currently based in Las
					Vegas, Nevada.
				</p>
				<div className='d-flex gap-3'>
					<a
						className='btn'
						href={resume}
						rel='noreferrer'
						target='_blank'>
						<button>My Resume</button>
					</a>
					<button
						className='btn'
						onClick={() => window.location.replace('/#works')}>
						My Work
					</button>
				</div>
			</section>
		);
}

export default LandingPage;