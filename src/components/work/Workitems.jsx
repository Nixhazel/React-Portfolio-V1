import React from 'react';

const Workitems = ({ item }) => {
	return (
		<div className='work__card' key={item.id}>
			<div className='work__img-container'>
				<img src={item.image} alt={item.title} className='work__img' />
				<div className='work__category-badge'>
					{item.category === 'Mobile' ? (
						<i className='uil uil-mobile-android'></i>
					) : (
						<i className='uil uil-window'></i>
					)}
					{item.category}
				</div>
			</div>

			<div className='work__content'>
				<h3 className='work__title'>{item.title}</h3>
				<p className='work__description'>{item.description}</p>

				<div className='work__tech-stack'>
					{item.techStack &&
						item.techStack.map((tech, index) => (
							<span key={index} className='work__tech-badge'>
								{tech}
							</span>
						))}
				</div>

				<div className='work__links'>
					{/* {item.githubLink && (
						<a
							href={item.githubLink}
							className='work__link'
							target='_blank'
							rel='noopener noreferrer'>
							<i className='bx bxl-github'></i> Code
						</a>
					)} */}
					{item.liveLink && (
						<a
							href={item.liveLink}
							className='work__link work__link--primary'
							target='_blank'
							rel='noopener noreferrer'>
							<i className='bx bx-link-external'></i> View App
						</a>
					)}
					{!item.githubLink && !item.liveLink && (
						<span className='work__link work__link--placeholder'>
							<i className='bx bx-lock-alt'></i> Private Project
						</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default Workitems;
