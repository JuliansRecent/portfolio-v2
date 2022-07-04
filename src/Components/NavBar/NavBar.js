import './NavBar.css';
import { useState, useEffect } from 'react'
import { debounce } from '../../utilities/helpers'

function NavBar(props) {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	const handleScroll = debounce(() => {
		// Find current scroll position
		const currentScrollPos = window.pageYOffset;

		// Set state based on current scroll position compared to the previous scroll position
		setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

		// Set state equal to new scroll position
		setPrevScrollPos(currentScrollPos);
	}, 100);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, [prevScrollPos, visible, handleScroll]);

	return (
		<nav
			style={{ top: visible ? '0' : '-120px' }}
			className='navbar fixed-top navbar-light'>
			<div className='container-fluid'>
				<a className='brand p-2' href='#'>
					Julian Segura
				</a>
				<ul className='d-flex flex-row align-items-center'>
					<li className='nav-link p-2'>
						<a onClick={() => window.location.replace('/#about')}>About</a>
					</li>
					<li className='nav-link p-2'>
						<a onClick={() => window.location.replace('/#skills')}>Skills</a>
					</li>
					<li className='nav-link p-2'>
						<a onClick={() => window.location.replace('/#works')}>Works</a>
					</li>
					<li className='nav-link p-2'>
						<a onClick={() => window.location.replace('/#contact')}>Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default NavBar;
