import React from "react";
import './footer.css'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__container container'>
				<h1 className='footer__title'>Olokor</h1>

				<ul className='footer__list'>
					<li>
						<a href='#about' className='footer__link'>
							About
						</a>
					</li>

					<li>
						<a href='#portfolio' className='footer__link'>
							Projects
						</a>
					</li>

					<li>
						<a href='#testimonials' className='footer__link'>
							Testimonials
						</a>
					</li>
				</ul>

				<div className='footer__social'>
					<a
						href='https://www.instagram.com/nixhazel/'
						className='footer__social-link'
						target='_blank'
						rel='noopener noreferrer'>
						<i class='bx bxl-instagram'></i>
					</a>

					<a
						href='https://www.linkedin.com/in/emmanuel-olokor-56b260244/'
						className='footer__social-link'
						target='_blank'
						rel='noopener noreferrer'>
						<i class='bx bxl-linkedin'></i>
					</a>

					<a
						href='https://twitter.com/EmmanuelOlokor'
						className='footer__social-link'
						target='_blank'
						rel='noopener noreferrer'>
						<i class='bx bxl-twitter'></i>
					</a>

					<a
						href='https://github.com/Nixhazel'
						className='footer__social-link'
						target='_blank'
						rel='noopener noreferrer'>
						<i class='bx bxl-github'></i>
					</a>
				</div>

				<span className='footer__copy'>
					&#169; Olokor O. Emmanuel. All rigths reserved
				</span>
			</div>
		</footer>
	);
};

export default Footer;
