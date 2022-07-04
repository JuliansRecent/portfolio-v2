import './Footer.css'
import twitterIcon from '../../Assets/twitter-icon.png'
import linkedinIcon from '../../Assets/linkedin-icon.png'
import githubIcon from '../../Assets/github-icon.png'

function Footer(props) {
    return (
			<section
				className='footer-page-container container-fluid d-flex justify-content-center align-items-center
            flex-column'>
				<h3 className='footer-title mb-3'>Socials</h3>
				<ul className='social-links d-flex gap-3'>
					<li className='social-link'>
						<a
							href='https://twitter.com/JuliansRecent'
							className='icon-container'>
							<img src={twitterIcon} alt='Twitter icon' />
						</a>
					</li>
					<li className='social-link'>
						<a
							href='https://github.com/JuliansRecent'
							className='icon-container'>
							<img src={githubIcon} alt='GitHub icon' />
						</a>
					</li>
					<li className='social-link'>
						<a
							href='https://linkedin.com/in/julian-segura12'
							className='icon-container'>
							<img src={linkedinIcon} alt='LinkedIn icon' />
						</a>
					</li>
				</ul>
			</section>
		);
}

export default Footer;