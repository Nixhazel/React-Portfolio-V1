import React from "react";

const Social = () => {
	return (
		<div className='home__social'>
			<a
				href='https://www.instagram.com/nixhazel/'
				className='home__social-icon'
				target='_blank'
				rel='noopener noreferrer'>
				<i class='uil uil-instagram'></i>
			</a>

			<a
				href='https://www.linkedin.com/in/emmanuel-olokor-56b260244/'
				className='home__social-icon'
				target='_blank'
				rel='noopener noreferrer'>
				<i class='uil uil-linkedin-alt'></i>
			</a>

			<a
				href='https://github.com/Nixhazel'
				className='home__social-icon'
				target='_blank'
				rel='noopener noreferrer'>
				<i class='uil uil-github-alt'></i>
			</a>
		</div>
	);
};

export default Social;
