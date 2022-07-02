import './AboutPage.css'
import pictureCollage from '../../Assets/picture-collage.png'

function AboutPage(props) {
    return (
			<section className='about-page-container d-flex flex-row justify-content-center'>
				<aside className='main-text-container d-flex flex-column justify-content-center'>
                    <h2 className='title'>About Me</h2>
                    <p className='about-description'>
                        Hi! My name is Julian Segura. I come from a medical background with
                        attention to detail, and a passion for helping others. 
                                        <br /> <br />
                        I love bringing innovative ideas to life and pushing my limits everyday. I’m the
                        happiest when putting my mind to difficult problems and coming out
                        with optimal solutions. 
                    </p>
                </aside>
			</section>
		);
}

export default AboutPage;