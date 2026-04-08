import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow-md">
        <h1 className="text-xl font-bold text-teal-700">Saheli</h1>

        <div className="space-x-6">
          <button onClick={() => navigate("/")}>Home</button>
          <button>About</button>
          <button>Contact</button>

          <button
            onClick={() => navigate("/login")}
            className="bg-teal-600 text-white px-4 py-2 rounded-lg"
          >
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-20 px-4">
        <h1 className="text-5xl font-bold text-teal-800 mb-4">
          Ride Safe with Saheli
        </h1>

        <p className="max-w-xl text-gray-600 mb-6">
          A women-focused ride platform designed for safety, trust, and smart
          travel. Track rides, alert contacts, and stay protected every step of
          the way.
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-gradient-to-r from-teal-500 to-green-400 text-white px-6 py-3 rounded-xl text-lg"
        >
          Book a Ride
        </button>
      </div>
    </div>
  );
};

export default Home;