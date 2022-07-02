import './LandingPage.css'

function LandingPage(props) {
    return (
			<section className='landing-page-container d-flex flex-column justify-content-center'>
				<h1 className='hi-statement'>Hi, my name is Julian.</h1>
				<h2 className='im-statement'>I'm a Software Engineer</h2>
				<p className='i-specialize-statement'>
					I specialize in front-end development and I'm currently based in Las
					Vegas, Nevada.
				</p>
				<div className='d-flex gap-3'>
					<button className='btn'>My Resume</button>
					<button className='btn'>My Work</button>
				</div>
			</section>
		);
}

export default LandingPage;