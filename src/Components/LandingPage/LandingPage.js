import './LandingPage.css'

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
					<a className='btn' href='Assets/Julian-Seguras-Resume.pdf' target='_blank'>
					<button>My Resume</button></a>
					<button className='btn'>My Work</button>
				</div>
			</section>
		);
}

export default LandingPage;