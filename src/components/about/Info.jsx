import React from 'react';

const Info = () => {
	return (
		<div className='about__info grid'>
			<div className='about__box'>
				<i className='bx bx-award about__icon'></i>
				<h3 className='about__title'>Experience</h3>
				<span className='about__subtitle'>3+ Years in Fintech</span>
				<span className='about__subtitle'> </span>
				<span className='about__subtitle'>5+ Years Programming</span>
			</div>

			<div className='about__box'>
				<i className='bx bx-briefcase-alt about__icon'></i>
				<h3 className='about__title'>Projects</h3>
				<span className='about__subtitle'>12+ Production Apps</span>
			</div>

			<div className='about__box'>
				<i className='bx bx-mobile about__icon'></i>
				<h3 className='about__title'>Platforms</h3>
				<span className='about__subtitle'>Mobile & Web</span>
			</div>
		</div>
	);
};

export default Info;
