import React, { useState } from "react";
import './services.css'

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index)
    }
	return (
		<section className='services section' id='services'>
			<h2 className='section__title'>Services</h2>
			<span className='section__subtitle'>What i offer</span>

			<div className='services__container container grid'>
				<div className='services__content'>
					<div>
						<i className='uil uil-window services__icon'></i>
						<h3 className='services__title'>
							Full Stack <br /> Developer
						</h3>
					</div>
					<span className='services__button' onClick={() => toggleTab(1)}>
						View More
						<i className='uil uil-arrow-right services__button-icon'></i>
					</span>

					<div
						className={
							toggleState === 1
								? "services__modal active-modal"
								: "services__modal"
						}>
						<div className='services__modal-content'>
							<i
								onClick={() => toggleTab(0)}
								className='uil uil-times services__modal-close'></i>

							<h3 className='services__modal-title'>Full Stack Developer</h3>
							<p className='services__modal-description'>
								Service with 2 years of experience. providing quality full stack
								applications to clients and companies.
							</p>

							<ul className='services__modal-services grid'>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										I Develop Full Stack Web Applications Client and Server
										side.
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Providing technical support and maintenance services for
										existing applications.
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Keeping up-to-date with the latest trends and technologies
										in full-stack development.
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Integrating third-party APIs and services into applications.
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Troubleshooting and debugging code issues, including
										performance and scalability optimizations.
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Integrating front-end features with back-end systems, such
										as handling data input and output, authentication and
										authorization, or server-side rendering.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='services__content'>
					<div>
						<i className='uil uil-arrow services__icon'></i>
						<h3 className='services__title'>
							Back-End <br /> Developer
						</h3>
					</div>
					<span onClick={() => toggleTab(2)} className='services__button'>
						View More
						<i className='uil uil-arrow-right services__button-icon'></i>
					</span>

					<div
						className={
							toggleState === 2
								? "services__modal active-modal"
								: "services__modal"
						}>
						<div className='services__modal-content'>
							<i
								onClick={() => toggleTab(0)}
								className='uil uil-times services__modal-close'></i>

							<h3 className='services__modal-title'>Back-End Developer</h3>
							<p className='services__modal-description'>
								Service with 2 years of experience. providing quality server
								side applications to clients and companies.
							</p>

							<ul className='services__modal-services grid'>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Server Side Development.
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Developing and maintaining server-side applications using a
										variety of languages and frameworks.
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Creating and managing databases, including data modeling,
										schema design, and querying.
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Implementing security measures and best practices to protect
										applications and user data from vulnerabilities and threats.
									</p>
								</li>

								{/* <li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										I Develop Full Stack Web Applications.
									</p>
								</li> */}
							</ul>
						</div>
					</div>
				</div>

				<div className='services__content'>
					<div>
						<i className='uil uil-edit services__icon'></i>
						<h3 className='services__title'>
							Front-End <br /> Developer
						</h3>
					</div>
					<span onClick={() => toggleTab(3)} className='services__button'>
						View More
						<i className='uil uil-arrow-right services__button-icon'></i>
					</span>

					<div
						className={
							toggleState === 3
								? "services__modal active-modal"
								: "services__modal"
						}>
						<div className='services__modal-content'>
							<i
								onClick={() => toggleTab(0)}
								className='uil uil-times services__modal-close'></i>

							<h3 className='services__modal-title'>Front-End Developer</h3>
							<p className='services__modal-description'>
								Service with 2 years of experience. Providing quality Client
								side applications to clients and companies.
							</p>

							<ul className='services__modal-services grid'>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Client Side Development.
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Designing and building user interfaces using modern
										front-end frameworks.
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Writing clean, efficient, and well-documented code,
										following industry standards and best practices.
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Creating interactive and engaging user interfaces with
										modern JavaScript libraries and frameworks, such as React.
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Implementing search engine optimization (SEO) strategies to
										improve the visibility and ranking of websites on search
										engines.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
