export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-700 to-purple-900">
    {/* Card container */}
    <div className="bg-gray-200 p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
      {/* Header */}
      <h1 className="text-2xl text-black font-semibold">Bahasa</h1>
      <h2 className="text-4xl font-bold text-black mt-2 mb-6">Hulondalo</h2>
      <p className="text-lg font-medium mb-8 text-black">SIGN-IN</p>

      {/* Form */}
      <form className="space-y-6">
        {/* Username Input */}
        <div className="relative">
          <label className="flex items-center space-x-2 text-gray-700">
            <i className="fas fa-user-circle text-xl"></i>
            <input
              type="text"
              placeholder="Username"
              className="w-full border-b-2 border-gray-400 focus:border-black outline-none py-2 pl-10 text-gray-700"
            />
          </label>
        </div>

        {/* Email Input */}
        <div className="relative">
          <label className="flex items-center space-x-2 text-gray-700">
            <i className="fas fa-envelope text-xl"></i>
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b-2 border-gray-400 focus:border-black outline-none py-2 pl-10 text-gray-700"
            />
          </label>
        </div>

        {/* Password Input */}
        <div className="relative">
          <label className="flex items-center space-x-2 text-gray-700">
            <i className="fas fa-lock text-xl"></i>
            <input
              type="password"
              placeholder="Password"
              className="w-full border-b-2 border-gray-400 focus:border-black outline-none py-2 pl-10 text-gray-700"
            />
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gray-800 text-white font-medium py-3 rounded-lg mt-4 hover:bg-gray-900 flex items-center justify-center space-x-2"
        >
          <i className="fas fa-envelope"></i>
          <span>Request</span>
        </button>
      </form>
    </div>
  </div>
);
};
