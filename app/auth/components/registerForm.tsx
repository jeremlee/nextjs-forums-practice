

export default function RegisterForm() {
    return (
      <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Register</h2>
        
        <div className="mb-4">
          <label htmlFor="username" className="block text-lg font-medium text-gray-700">Username</label>
          <input 
            type="text" 
            name="username" 
            placeholder="example: johndoe69" 
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        <div className="mb-6">
          <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
          <input 
            type="password" 
            name="password" 
            placeholder="123456" 
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <button 
          type="submit"
          className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Register
        </button>
      </div>
    )
  }
  
  