import React from 'react';
import styling from './index.css';
import { FiSettings } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';

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
			<body>
				<main>
					<div className='profile-image-wrapper'>
						<div className='profile-image'></div>
						<div className='edit-icon'>

						</div>
					</div>
				</main>
			</body>
		</>
	);
};

export default Profile;
