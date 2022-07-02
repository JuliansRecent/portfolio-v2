import './NavBar.css';

function NavBar(props) {
	return (
		<nav className='navbar fixed-top navbar-light'>
			<div className='container-fluid'>
				<a className='brand p-2' href='#'>
					Julian Segura
				</a>
				<ul className='d-flex flex-row align-items-center'>
					<li className='nav-link p-3'>
						<a>About</a>
					</li>
					<li className='nav-link p-3'>
						<a>Works</a>
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
