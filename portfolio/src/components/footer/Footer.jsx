import React from "react";

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__container container'>
				<h1 className='footer__title'>Olokor</h1>

				<ul className='footer__list'>
					<li>
						<a href='#about' className='footer__link'>About</a>
					</li>

					<li>
						<a href='#portfolio' className='footer__link'>Projects</a>
					</li>

					<li>
						<a href='#testimonials' className='footer__link'>Testimonials</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
