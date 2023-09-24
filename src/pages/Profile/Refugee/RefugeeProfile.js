import React from 'react';
import './index.css';
import { FiSettings } from 'react-icons/fi';
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
					<h2 className='profile-header'>Profile</h2>
					<a href='/settings'>
						<FiSettings className='settings-icon' />
					</a>
				</nav>
			</header>
			<body id='profile-body'>
				<main>
					<div className='profile-image-wrapper'>
						<div className='profile-image'></div>
						<div className='edit-icon'></div>
					</div>
					<div className='name-container'>
						<p>
							Sofia Ivanova <span className='pronouns-style'>(she/her)</span>{' '}
						</p>
					</div>
					<div className='location-wrapper'>
						<FaLocationArrow className='location-arrow' />
						<p>Houston, TX</p>
					</div>
					<div className='age-para'>
						<p>Age: 30</p>
					</div>
					<div className='btn-container'>
						<button className='button-refugee'>Housing</button>
						<button className='button-refugee'>Education</button>
						<button className='button-refugee'>Language</button>
					</div>
					<div>
						<p style={{fontWeight: '500', padding: '30px 0px 10px 0px'}}>About</p>
						<p style={{fontWeight: '300'}}>
							Hi, I’m Sofia. I arrived in Houston a week ago from Ukraine. I am
							looking for someone who can help me with finding a place to live,
							education and the English language.
						</p>
					</div>
          <div>
            <p style={{fontWeight: '500', padding: '30px 0px 10px 0px'}}>Education</p>
            <ul className='education-list'>
              <li>Primary Level</li>
              <li>Secondary Level</li>
              <li>Vocational Level</li>
            </ul>
          </div>
          <div className='edit-profile-container'>
            <button className='btn-edit-profile'>Edit Profile</button>
          </div>
				</main>
			</body>
		</>
	);
};

export default Profile;
