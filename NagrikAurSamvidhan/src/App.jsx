// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import './App.css';
// import authService from './appwrite/auth';
// import { login, logout } from './store/authSlice';
// import { Footer, Header } from './components';
// import { Outlet } from 'react-router-dom';

// function App() {
//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch()

//   useEffect(() => {
//     authService.getCurrentUser()
//       .then((userData) => {
//         if (userData) {
//           dispatch(login({ userData }));
//         } else {
//           dispatch(logout());
//         }
//       })
//       .finally(() => setLoading(false))
//   }, [])


//   return loading ? (
//     <div className="min-h-screen flex items-center justify-center bg-gray-400">
//     <div className="flex items-center justify-center space-x-2">
//       <div className="w-12 h-12 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
//       <span className="text-white text-xl">Loading...</span>
//     </div>
//   </div>
//   ) : (
//     <div className='min-h-screen flex flex-wrap content-between bg-gray-800'>
//       <div className='w-full block'>
//         <Header />
//         <main>
//           <Outlet />
//         </main>
//         <Footer />
//       </div>
//     </div>

//   )
// }

// export default App


import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import MainHeader from './components/Header'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  const location = useLocation();
  return (
    <div>
      <div>
      {location.pathname !== "/" && location.pathname !== '/blog' && location.pathname !== '/login' && location.pathname !=='/signup' && <MainHeader />}
      {location.pathname === "/blog" && <Header />}
        <main>
          <Outlet />
        </main>
        {location.pathname !== "/card1learn" && location.pathname !== '/' && location.pathname !== '/login' && location.pathname !=='/signup' && <Footer />}
      </div>
    </div>
  )
}

export default App
