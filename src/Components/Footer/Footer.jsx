import './Footer.css';

function Footer() {
	return (
		<footer className='App-footer'>
			<div className='container'>
				<div className='footer-body'>
					<div className='footer-copyright'>&copy; 2022</div>
					<div className='footer-social_links'>
						<a className='social_link' href='https://github.com/ePinki'>
							Github
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;