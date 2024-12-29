// import React from 'react'
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { Provider } from 'react-redux'
// import store from './store/store.js'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { AuthLayout,Login } from './components/index.js'

// import Home from './pages/Home.jsx'
// import AddPost from './pages/AddPost.jsx'
// import Signup from './pages/Signup.jsx'
// import EditPost from './pages/EditPost.jsx'
// import Post from './pages/Post.jsx'
// import AllPosts from './pages/AllPosts.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />, // It's childrens are routed inside the "outlet" in App.jsx
//     children: [
//       {
//         path: '/',
//         element: <Home />,
//       },
//       {
//         path: "/login",
//         element: (
//           <AuthLayout authentication={false}>
//             <Login />
//           </AuthLayout>
//         )
//       },
//       {
//         path: "/signup",
//         element: (
//           <AuthLayout authentication={false}>
//             <Signup />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/all-posts",
//         element: (
//           <AuthLayout authentication>
//             {" "}
//             <AllPosts />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/add-post",
//         element: (
//           <AuthLayout authentication>
//             {" "}
//             <AddPost />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/edit-post/:slug",
//         element: (
//           <AuthLayout authentication>
//             {" "}
//             <EditPost />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/post/:slug",
//         element: <Post />,
//       },
//     ],
//   },
// ])

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Provider store={store}>
//       <RouterProvider router={router}/>
//     </Provider>
//   </StrictMode>,
// )



import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthLayout, Login } from './components/index.js'

// pages
import HomeBlog from './pages/Home.jsx' // TODO: make it HomeBlog
import AddPost from './pages/AddPost.jsx'
import Signup from './pages/Signup.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'
import AllPosts from './pages/AllPosts.jsx'

//components
import Home from "./components/Home.jsx";
import PlayingPage from "./components/PlayingPage.jsx";
import LearningPage from "./components/LearningPage.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Newsapp from "./components/Newsapp.jsx";
import NewPage from "./components/NewPage.jsx";
import Card1Learn from "./components/Card1Learn.jsx";
import QuizApp from "./components/QuizApp.jsx";
import SnakeLadder from "./components/SnakeLadder.jsx";
import Summarizer from './components/Summarizer.jsx';
import BeforeAuth from './components/BeforeAuth.jsx';
import Contact from './components/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // It's childrens are routed inside the "outlet" in App.jsx
    children: [
      // {
      //   path: '/',
      //   element: <BeforeAuth/>
      // },
      {
        path: "/blog",
        element: <HomeBlog />,
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
      {
        path: '/',
        element: <BeforeAuth />
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        )
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication>
            {" "}
            <AllPosts />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            {" "}
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            {" "}
            <EditPost />
          </AuthLayout>
        ),
      },

      {
        path: "/landingpage",
        element: <LandingPage />,
      },
      {
        path: "/learningpage",
        element: <LearningPage />,
      },
      {
        path: "/playingpage",
        element: <PlayingPage />,
      },
      {
        path: "/newsapp",
        element: <Newsapp />,
      },
      {
        path: "/card1learn",
        element: <Card1Learn />,
      },
      {
        path: "/newpage",
        element: <NewPage />,
      },
      {
        path: "/snakeladder",
        element: <SnakeLadder />,
      },
      {
        path: "/quizapp",
        element: <QuizApp />,
      },
      {
        path: "/summarizer",
        element: <Summarizer />,
      },

      {
        path: "/mmlogin",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
