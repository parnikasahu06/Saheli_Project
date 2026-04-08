import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* 🔹 Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <h1 className="text-xl font-bold text-teal-700">Saheli</h1>

        <div className="space-x-4">
          <button
            onClick={() => navigate("/")}
            className="text-gray-700 hover:text-teal-600"
          >
            Home
          </button>

          <button
            onClick={() => navigate("/contacts")}
            className="text-gray-700 hover:text-teal-600"
          >
            Contact
          </button>

          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 border border-teal-600 text-teal-700 rounded-lg hover:bg-teal-50 transition"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
          >
            Register
          </button>
        </div>
      </nav>

      {/* 🔹 Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-24 px-4">
        <h2 className="text-4xl font-bold text-teal-800 mb-4">
          Ride Safe with Saheli
        </h2>

        <p className="text-gray-600 max-w-xl mb-6">
          A women-focused ride platform designed for safety, trust, and smart travel.
          Track rides, alert contacts, and stay protected every step of the way.
        </p>

        <button
          onClick={() => navigate("/ride")}
          className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
        >
          Book a Ride
        </button>
      </div>
    </div>
  );
};

export default Home;