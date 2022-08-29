import './AboutPage.css'
import professionalPicture from '../../Assets/Professional-picture.JPG'

function AboutPage(props) {
    return (
			<section
				className='about-page-container d-flex flex-column justify-content-center'
				id='about'>
				<h2 className='about-title'>About Me</h2>
				<div className='text-and-img-container'>
					<p className='about-description'>
						Hi! My name is Julian Segura, I come from
						a medical background with attention to detail, and a passion for
						helping others.
						<br /> <br />
						I love bringing innovative ideas to life and pushing my limits day
						to day. I’m happiest when putting my mind to difficult problems and
						creating optimal solutions.
						<br /> <br />
						Outside of tech, I love being outdoors, whether it's golfing on the
						weekends or surfing on vacation. I also enjoy rock climbing
						and trails with my dog!
					</p>
					<div className='img-container d-flex align-self-center'>
						<img
							src={professionalPicture}
							alt=''
							className='professional-img'
						/>
					</div>
				</div>
			</section>
		);
}

export default AboutPage;