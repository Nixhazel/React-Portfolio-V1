import React, { useState } from 'react';
import './services.css';

const Services = () => {
	const [toggleState, setToggleState] = useState(0);

	const toggleTab = (index) => {
		setToggleState(index);
	};
	return (
		<section className='services section' id='services'>
			<h2 className='section__title'>Services</h2>
			<span className='section__subtitle'>What I offer</span>

			<div className='services__container container grid'>
				<div className='services__content'>
					<div>
						<i className='uil uil-mobile-android services__icon'></i>
						<h3 className='services__title'>
							Mobile App <br /> Development
						</h3>
					</div>
					<span className='services__button' onClick={() => toggleTab(1)}>
						View More
						<i className='uil uil-arrow-right services__button-icon'></i>
					</span>

					<div
						className={
							toggleState === 1
								? 'services__modal active-modal'
								: 'services__modal'
						}>
						<div className='services__modal-content'>
							<i
								onClick={() => toggleTab(0)}
								className='uil uil-times services__modal-close'></i>

							<h3 className='services__modal-title'>Mobile App Development</h3>
							<p className='services__modal-description'>
								3+ years building production-grade mobile applications for
								fintech, health-tech, and e-commerce sectors.
							</p>

							<ul className='services__modal-services grid'>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Cross-platform mobile apps with React Native & Expo
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Payment integrations, wallets, and secure transactions
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Real-time features with WebSocket and push notifications
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										App Store & Play Store deployment and optimization
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='services__content'>
					<div>
						<i className='uil uil-window services__icon'></i>
						<h3 className='services__title'>
							Frontend <br /> Development
						</h3>
					</div>
					<span onClick={() => toggleTab(2)} className='services__button'>
						View More
						<i className='uil uil-arrow-right services__button-icon'></i>
					</span>

					<div
						className={
							toggleState === 2
								? 'services__modal active-modal'
								: 'services__modal'
						}>
						<div className='services__modal-content'>
							<i
								onClick={() => toggleTab(0)}
								className='uil uil-times services__modal-close'></i>

							<h3 className='services__modal-title'>Frontend Development</h3>
							<p className='services__modal-description'>
								Building responsive, performant web applications with modern
								frameworks and best practices.
							</p>

							<ul className='services__modal-services grid'>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Modern web apps with React, Next.js & TypeScript
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Admin dashboards and data visualization interfaces
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Responsive design with Tailwind CSS and modern UI libraries
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										State management with Redux, Zustand, and React Query
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='services__content'>
					<div>
						<i className='uil uil-transaction services__icon'></i>
						<h3 className='services__title'>
							Fintech <br /> Solutions
						</h3>
					</div>
					<span onClick={() => toggleTab(3)} className='services__button'>
						View More
						<i className='uil uil-arrow-right services__button-icon'></i>
					</span>

					<div
						className={
							toggleState === 3
								? 'services__modal active-modal'
								: 'services__modal'
						}>
						<div className='services__modal-content'>
							<i
								onClick={() => toggleTab(0)}
								className='uil uil-times services__modal-close'></i>

							<h3 className='services__modal-title'>Fintech Solutions</h3>
							<p className='services__modal-description'>
								Specialized in building secure financial technology applications
								with seamless user experiences.
							</p>

							<ul className='services__modal-services grid'>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Digital wallet and payment gateway integrations
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Card management and virtual card systems
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										P2P transfers and international remittance features
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Loyalty programs and rewards systems
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
