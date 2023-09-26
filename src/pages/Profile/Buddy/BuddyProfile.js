import React from 'react';
import './index.css';
import { FaLocationArrow } from 'react-icons/fa';
import { LuMessagesSquare } from 'react-icons/lu';
import { IoIosCall } from 'react-icons/io';

const Profile = () => {
	return (
		<>
			<header></header>
			<body>
				<div className='buddy-container'>
					<div>
						<p className='profile-header'>Buddy Details</p>
					</div>
					<div className='buddy-image-wrapper'>
						<div className='buddy-image'></div>
					</div>
					<div className='name-wrapper'>
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
				<main id='buddy-profile-body' className='buddy-hero'>
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
						<button className='btn-wrapper'>
							<span className='contact-btn'>
								<LuMessagesSquare />
							</span>
							Message
						</button>
						<button className='btn-wrapper'>
							<span className='contact-btn'>
								<IoIosCall />
							</span>
							Call
						</button>
					</div>
				</main>
			</body>
		</>
	);
};

export default Profile;
