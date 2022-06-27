import './AboutPage.css'
import pictureCollage from '../../Assets/picture-collage.png'

function AboutPage(props) {
    return (
			<section className='about-page-container d-flex flex-row justify-content-center'>
                <div className='collage-container d-flex align-items-center p-3'><img className='collage-picture' src={pictureCollage} alt="" /></div>
				<aside className='main-text-container d-flex flex-column justify-content-center'>
                    <h2 className='title'>About Me</h2>
                    <p className='about-description'>
                        Hi! My name is Julian Segura. I come from a medical background with
                        attention to detail, and a passion for helping others. 
                                        <br /> <br />
                                        I love bringing innovative ideas to life and pushing my limits everyday. I’m the
                        happiest when putting my mind to difficult problems and coming out
                        with optimal solutions. 
                                        <br /> <br />
                                        Away from work, I enjoy golfing on the
                        weekends, spending time with my dogs, and driving fast cars. I also
                        enjoy rock climbing whenever I get the time to go.
                    </p>
                </aside>
			</section>
		);
}

export default AboutPage;