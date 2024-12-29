// import React from 'react';
// import { useDispatch } from 'react-redux';
// import authService from '../../appwrite/auth';
// import { logout } from '../../store/authSlice';

// function LogoutBtn() {
//     const dispatch = useDispatch();

//     const logoutHandler = () => {
//         authService.logout()
//             .then(() => {
//                 dispatch(logout());
//                 alert('You have been successfully logged out.');
//             })
//             .catch((error) => {
//                 console.error('Logout failed:', error);
//                 alert('An error occurred while logging out. Please try again.');
//             });
//     };

//     return (
//         <button
//             className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
//             onClick={logoutHandler}
//         >
//             Logout
//         </button>
//     );
// }

// export default LogoutBtn;


import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        const confirmLogout = window.confirm('Are you sure you want to log out?');
        
        if (confirmLogout) {
            authService.logout()
                .then(() => {
                    dispatch(logout());
                    alert('You have been successfully logged out.');
                })
                .catch((error) => {
                    console.error('Logout failed:', error);
                    alert('An error occurred while logging out. Please try again.');
                });
        }
    };

    return (
        <button
            className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            onClick={logoutHandler}
        >
            Logout
        </button>
    );
}

export default LogoutBtn;
