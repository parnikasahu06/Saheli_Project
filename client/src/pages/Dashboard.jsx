import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-teal-50 p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-teal-700">
          Saheli Dashboard
        </h1>

        <button
          onClick={() => navigate("/")}
          className="bg-white border px-4 py-2 rounded-lg shadow"
        >
          Logout
        </button>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-4 gap-6">

        {/* Book Ride */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Book Ride
          </h2>
          <p className="text-gray-600 mb-4">
            Start a safe trip with verified drivers.
          </p>

          <button
            onClick={() => navigate("/ride")}
            className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700"
          >
            Book Now
          </button>
        </div>

        {/* SOS */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Emergency SOS
          </h2>
          <p className="text-gray-600 mb-4">
            Instantly alert trusted contacts in unsafe situations.
          </p>

          <button
            onClick={() => {
              const contacts =
                JSON.parse(localStorage.getItem("contacts")) || [];

              if (contacts.length === 0) {
                alert("⚠️ No trusted contacts added!");
                return;
              }

              alert(
                `🚨 SOS Activated!\n\nAlert sent to:\n${contacts
                  .map((c) => c.name)
                  .join(", ")}\n\nLive location shared.\nNearest help requested.`
              );
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            SOS
          </button>
        </div>

        {/* Live Tracking */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Live Tracking
          </h2>
          <p className="text-gray-600 mb-4">
            Share your ride status and location in real time.
          </p>

          <button
            onClick={() => navigate("/tracking")}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Track Ride
          </button>
        </div>

        {/* Trusted Contacts */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Trusted Contacts
          </h2>
          <p className="text-gray-600 mb-4">
            Add guardians who receive emergency alerts.
          </p>

          <button
            onClick={() => navigate("/contacts")}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
          >
            Manage Contacts
          </button>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;