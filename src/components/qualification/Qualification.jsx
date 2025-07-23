import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};
	return (
		<section className='qualification section'>
			<h2 className='section__title'>Qualification</h2>
			<span className='section__subtitle'>My personel journey</span>

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
								<h3 className='qualification__title'>Web Development</h3>
								<span className='qualification__subtitle'>
									Udemy The Complete 2023 Web Development Boot camp
								</span>
								<div className='qualification__calender'>
									<i className='uil uil-calendar-alt'></i> Dec 2023
								</div>
							</div>
						</div>

						<div className='qualification__data'>
							<div>
								<h3 className='qualification__title'>
									The Fundamentals for Digital Marketing
								</h3>
								<span className='qualification__subtitle'>
									Google Digital Skills for Africa
								</span>
								<div className='qualification__calender'>
									<i className='uil uil-calendar-alt'></i> Jan 2023 - May 2023
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
									<i className='uil uil-calendar-alt'></i> Sep 2023 - Till Date
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
								<h3 className='qualification__title'>
									Front-End/Mobile Engineer
								</h3>
								<span className='qualification__subtitle'>Sterling Bank</span>
								<div className='qualification__calender'>
									<i className='uil uil-calendar-alt'></i> Aug 2023 - Present
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
									Frontend Engineer (Part-time)
								</h3>
								<span className='qualification__subtitle'>
									Emergency Response Africa
								</span>
								<div className='qualification__calender'>
									<i className='uil uil-calendar-alt'></i> April 2023 - Present
								</div>
							</div>
						</div>

						<div className='qualification__data'>
							<div>
								<h3 className='qualification__title'>
									Full Stack Software Engineer
								</h3>
								<span className='qualification__subtitle'>Decagon</span>
								<div className='qualification__calender'>
									<i className='uil uil-calendar-alt'></i> Nov 2022 - Nov 2024
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
									MERN Stack Software Engineering Tutor
								</h3>
								<span className='qualification__subtitle'>Freelancing</span>
								<div className='qualification__calender'>
									<i className='uil uil-calendar-alt'></i> Sep 2021 - Sep 2024
								</div>
							</div>
						</div>

						<div className='qualification__data'>
							<div>
								<h3 className='qualification__title'>Front-End Engineer</h3>
								<span className='qualification__subtitle'>SysServe</span>
								<div className='qualification__calender'>
									<i className='uil uil-calendar-alt'></i> May 2023 - July 2023
								</div>
							</div>

							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Qualification;
