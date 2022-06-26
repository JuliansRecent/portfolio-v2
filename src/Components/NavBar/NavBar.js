import './NavBar.css';

function NavBar(props) {
	return (
		<nav class='navbar fixed-top navbar-light'>
			<div class='container-fluid'>
				<a class='navbar-brand p-2 text-white' href='#'>
					Julian Segura
				</a>
				<ul className='d-flex flex-row align-items-center text-white'>
					<li className='nav-link p-3'>
						<a>About</a>
					</li>
					<li className='nav-link p-3'>
						<a>Projects</a>
					</li>
					<li className='nav-link p-3'>
						<a>Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default NavBar;
