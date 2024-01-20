const About = () => {
  const phoneNumber = '+98 9907383603'

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-6xl text-gray-800 mb-4 font-semibold leading-tight text-center">
          About Us
        </h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          Welcome to the Email Campaign Manager! This tool is designed to
          streamline your email marketing process, making it easy and efficient
          to manage campaigns, send emails, and track your success. Our platform
          offers a range of features including user registration, file uploads,
          and dynamic email templates.
        </p>
        <div className="flex justify-center items-center mt-8">
          <a
            href={`tel:${phoneNumber}`}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Call Us: {phoneNumber}
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
