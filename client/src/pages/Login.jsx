import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-teal-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-teal-700 mb-2">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Login to continue to Saheli
        </p>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition"
        >
          Login
        </button>

        <button
          onClick={() => navigate("/")}
          className="w-full mt-3 border border-teal-600 text-teal-700 py-2 rounded-lg hover:bg-teal-50 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Login;