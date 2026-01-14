import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};
	return (
		<section className='qualification section'>
			<h2 className='section__title'>Qualification</h2>
			<span className='section__subtitle'>My professional journey</span>

			<div className='qualification__container container'>
				<div className='qualification__tabs'>
					<div
						className={
							toggleState === 1
								? 'qualification__button qualification__active button--flex active-qualification'
								: 'qualification__button button--flex'
						}
						onClick={() => toggleTab(1)}>
						<i className='uil uil-graduation-cap qualification__icon'></i>
						Education
					</div>

					<div
						className={
							toggleState === 2
								? 'qualification__button qualification__active button--flex active-qualification'
								: 'qualification__button button--flex'
						}
						onClick={() => toggleTab(2)}>
						<i className='uil uil-briefcase-alt qualification__icon '></i>
						Experience
					</div>
				</div>

				<div className='qualification__sections'>
					<div
						className={
							toggleState === 1
								? 'qualification__content qualification__content-active'
								: 'qualification__content'
						}>
						<div className='qualification__data'>
							<div>
								<h3 className='qualification__title'>BSc. Computer Science</h3>
								<span className='qualification__subtitle'>
									Federal University of Petroleum Resources
								</span>
								<div className='qualification__calender'>
									<i className='uil uil-calendar-alt'></i> Nov 2016 - Sep 2021
								</div>
							</div>

							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
						</div>

						<div className='qualification__data'>
							<div></div>

							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
							<div>
								<h3 className='qualification__title'>Software Engineering</h3>
								<span className='qualification__subtitle'>
									Decagon Institute
								</span>
								<div className='qualification__calender'>
									<i className='uil uil-calendar-alt'></i> Nov 2022 - June 2023
								</div>
							</div>
						</div>

						<div className='qualification__data'>
							<div>
								<h3 className='qualification__title'>MSc. Computer Science</h3>
								<span className='qualification__subtitle'>
									Federal University of Petroleum Resources
								</span>
								<div className='qualification__calender'>
									<i className='uil uil-calendar-alt'></i> Sep 2023 - Present
								</div>
							</div>

							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
						</div>
					</div>

					<div
						className={
							toggleState === 2
								? 'qualification__content qualification__content-active'
								: 'qualification__content'
						}>
						<div className='qualification__data'>
							<div>
								<h3 className='qualification__title'>Lead Mobile Developer</h3>
								<span className='qualification__subtitle'>
									Raiz Digital Services
								</span>
								<p className='qualification__description'>
									Built flagship fintech app with React Native & Expo.
									Integrated wallets, cards, transfers, and loyalty systems.
								</p>
								<div className='qualification__calender'>
									<i className='uil uil-calendar-alt'></i> Feb 2023 - Present
								</div>
							</div>

							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
						</div>

						<div className='qualification__data'>
							<div></div>

							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
							<div>
								<h3 className='qualification__title'>
									Mobile Frontend Engineer
								</h3>
								<span className='qualification__subtitle'>
									Emergency Response Africa
								</span>
								<p className='qualification__description'>
									Built Era-Responder mobile app and Era Dispatch web dashboard
									with real-time sync.
								</p>
								<div className='qualification__calender'>
									<i className='uil uil-calendar-alt'></i> April 2023 - Present
								</div>
							</div>
						</div>

						<div className='qualification__data'>
							<div>
								<h3 className='qualification__title'>
									Mobile & Frontend Engineer
								</h3>
								<span className='qualification__subtitle'>Sterling Bank</span>
								<p className='qualification__description'>
									Web and mobile apps with React & React Native. UI/UX focus
									with Agile delivery.
								</p>
								<div className='qualification__calender'>
									<i className='uil uil-calendar-alt'></i> Aug 2023 - Feb 2024
								</div>
							</div>

							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
						</div>

						<div className='qualification__data'>
							<div></div>

							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
							<div>
								<h3 className='qualification__title'>Frontend Engineer</h3>
								<span className='qualification__subtitle'>Float Transfer</span>
								<p className='qualification__description'>
									Secure, compliant fintech systems. Collaborated with backend
									and security teams.
								</p>
								<div className='qualification__calender'>
									<i className='uil uil-calendar-alt'></i> May 2025 - July 2025
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Qualification;
