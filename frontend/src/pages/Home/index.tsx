import React, { useContext } from 'react'

// Import the new image for the dashboard
import dashboardImage from '../../assets/Dashboard.png'
import backgroundImage from '../../assets/Emails-bro.png'
import MyContext from '../../components/Context/MyContext'

const Home = () => {
  // Use context to determine if the user is logged in
  const context = useContext(MyContext)
  const isLoggedIn = context?.state // Adjust this according to your state management logic

  return (
    <div className="flex flex-col lg:flex-row items-center h-screen bg-gray-100">
      <div className="flex flex-col justify-start lg:items-start w-full lg:w-1/2 px-4 lg:px-20 pt-0 pb-12 text-center lg:text-left">
        {isLoggedIn ? (
          // Content to show when logged in
          <>
            <h1 className="text-6xl text-gray-800 mb-4 font-semibold leading-tight">
              Welcome Back to Your Dashboard!
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Ready to elevate your email campaigns today?
            </p>
          </>
        ) : (
          // Default content to show when not logged in
          <>
            <h1 className="text-6xl text-gray-800 mb-4 font-semibold leading-tight">
              Drive results with <br /> unforgettable email campaigns manager.
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Effortlessly manage your email campaigns with remarkable
              simplicity and efficiency.
            </p>
            <div className="space-x-4">
              <a
                href="/register"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                Sign up for free
              </a>
              <a
                href="/about"
                className="border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                Learn more
              </a>
            </div>
          </>
        )}
      </div>

      {/* Image Container */}
      <div className="hidden lg:block w-1/2 h-full">
        <img
          src={isLoggedIn ? dashboardImage : backgroundImage}
          alt={isLoggedIn ? 'Dashboard' : 'Email Campaign'}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}

export default Home
