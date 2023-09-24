import React from 'react';
import './index.css';
import { FaLocationArrow } from 'react-icons/fa';

const Profile = () => {
	return (
		<>
			<header>
				<nav className='profile-nav'>
					<a href='back-arrow'>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M15.535 3.51501L7.04999 12L15.535 20.485L16.95 19.071L9.87799 12L16.95 4.92901L15.535 3.51501Z'
								fill='#333333'
							/>
						</svg>
					</a>
					<h2 className='profile-header'>Buddy Details</h2>
				</nav>
			</header>
			<body>
				<main id='buddy-profile-body' className='buddy-hero'> 
					<div className='buddy-container'>
						<div className='buddy-image-wrapper'>
							<div className='buddy-image'></div>
						</div>

						<div className='name-container'>
							<p>
								Julianna Sandman
								<span className='pronouns-style'>(she/her)</span>{' '}
							</p>
						</div>
						<div className='location-wrapper'>
							<FaLocationArrow className='location-arrow' />
							<p>Houston, TX</p>
						</div>
						<div className='age-para'>
							<p>Age: 29</p>
						</div>
					</div>
					<h4>Allow to help with</h4>
					<div className='btn-container'>
						<button className='button-refugee'>Housing</button>
						<button className='button-refugee'>Daily Skills</button>
						<button className='button-refugee'>Culture</button>
						<button className='button-refugee'>Healthcare</button>
						<button className='button-refugee'>Children</button>
					</div>
					<div>
						<p style={{ fontWeight: '500', padding: '30px 0px 10px 0px' }}>
							About
						</p>
						<p style={{ fontWeight: '300' }}>
							Hi! I’m Julianna, based in Houston. I am able to help you with
							housing, education, job search, and language. I can also help with
							children and their homework.
						</p>
					</div>
					<div className='contact-buddy-container'>
						<button className='btn-contact'>Message</button>
						<button className='btn-contact'>Call</button>
					</div>
				</main>
			</body>
		</>
	);
};

export default Profile;
