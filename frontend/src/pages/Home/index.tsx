const Home = () => (
  <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
    <h1 className="text-4xl font-bold text-gray-800 mb-2">
      Welcome to the Email Campaign Manager
    </h1>
    <p className="text-lg text-gray-600">
      Manage your email campaigns with ease.
    </p>
    <div className="mt-4">
      <button className="bg-blue-500 hover:bg-blue-700 transition-all duration-500 ease-linear text-white hover:text-blue-200 font-bold py-2 px-4 rounded">
        Get Started
      </button>
    </div>
  </div>
)

export default Home
