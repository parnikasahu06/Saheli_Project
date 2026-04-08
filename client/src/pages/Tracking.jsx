import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Tracking = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Driver assigned");

  const pickup = localStorage.getItem("pickup") || "City Mall";
  const drop = localStorage.getItem("drop") || "Girls Hostel Gate";
  const riskScore = Number(localStorage.getItem("riskScore") || 0);
  const riskLabel = localStorage.getItem("riskLabel") || "Safe Route";

  const driverName = localStorage.getItem("driverName") || "Unknown";
  const driverVehicle = localStorage.getItem("driverVehicle") || "N/A";
  const driverRating = localStorage.getItem("driverRating") || "0";

  const riskReasons = JSON.parse(localStorage.getItem("riskReasons")) || [];
  const isNight = JSON.parse(localStorage.getItem("isNight") || "false");
  const hasTrustedContacts = JSON.parse(
    localStorage.getItem("hasTrustedContacts") || "false"
  );
  const isUnknownArea = JSON.parse(
    localStorage.getItem("isUnknownArea") || "false"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 10;

        if (next >= 20 && next < 50) setStatus("Driver is on the way");
        else if (next >= 50 && next < 90) setStatus("Ride in progress");
        else if (next >= 90) setStatus("Arriving at destination");

        return next >= 100 ? 100 : next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const riskColor =
    riskScore > 70
      ? "text-red-600"
      : riskScore > 30
      ? "text-yellow-600"
      : "text-green-600";

  const riskBoxColor =
    riskScore > 70
      ? "bg-red-50 border-red-300"
      : riskScore > 30
      ? "bg-yellow-50 border-yellow-300"
      : "bg-green-50 border-green-300";

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-700">Live Ride Tracking</h1>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-white border border-blue-600 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-100"
        >
          Back
        </button>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-6 max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Ride Status</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-3 text-gray-700">
            <p><strong>Driver:</strong> {driverName}</p>
            <p><strong>Vehicle:</strong> {driverVehicle}</p>
            <p><strong>Rating:</strong> ⭐ {driverRating}</p>
            <p><strong>Pickup:</strong> {pickup}</p>
            <p><strong>Destination:</strong> {drop}</p>
            <p>
              <strong>Status:</strong>{" "}
              <span className="text-blue-700 font-semibold">{status}</span>
            </p>
            <p>
              <strong>Safety Score:</strong>{" "}
              <span className={`font-semibold ${riskColor}`}>
                {riskLabel} ({riskScore}/100)
              </span>
            </p>
            <p className="text-xs text-gray-500">
              Calculated using contextual risk factors
            </p>
          </div>

          <div className="bg-blue-100 rounded-xl p-4">
            <h3 className="font-semibold text-blue-800 mb-3">Safety Features Active</h3>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>• Live trip sharing enabled</li>
              <li>• Trusted contacts {hasTrustedContacts ? "linked" : "not linked"}</li>
              <li>• SOS emergency button available</li>
              <li>• Route monitoring active</li>
            </ul>
          </div>
        </div>

        <div className={`border rounded-xl p-4 mb-6 ${riskBoxColor}`}>
          <h3 className="font-semibold text-gray-800 mb-2">
            AI-Powered Risk Analysis
          </h3>

          <p className="text-sm text-gray-700 mb-3">
            AI-powered safety monitoring system dynamically evaluates ride risk
            based on trip conditions.
          </p>

          <p className="mt-2 text-sm text-blue-700 mb-3">
            💡 Tip: Sharing your ride can reduce safety risk by improving response readiness.
          </p>

          <ul className="text-sm text-gray-700 space-y-1 mb-3">
            <li>• Night Travel: {isNight ? "Yes" : "No"}</li>
            <li>• Unknown/Isolated Route: {isUnknownArea ? "Yes" : "No"}</li>
            <li>• Trusted Contacts Added: {hasTrustedContacts ? "Yes" : "No"}</li>
          </ul>

          {riskReasons.length > 0 && (
            <div className="text-sm text-gray-700">
              <p className="font-medium mb-1">Risk Factors:</p>
              <ul className="list-disc ml-5 space-y-1">
                {riskReasons.map((reason, index) => (
                  <li key={index}>{reason}</li>
                ))}
              </ul>
            </div>
          )}

          <p className="mt-3 text-sm text-gray-700">
            This safety score is dynamically calculated based on time, route
            conditions, and user preparedness.
          </p>

          {!hasTrustedContacts && (
            <p className="text-red-600 mt-2 text-sm font-medium">
              ⚠️ Add trusted contacts to improve safety score and enable emergency alerts.
            </p>
          )}

          {riskScore > 70 && (
            <p className="text-red-600 font-medium mt-3">
              ⚠️ High risk detected. Enable SOS, emergency monitoring, and trip sharing immediately.
            </p>
          )}

          {riskScore > 30 && riskScore <= 70 && (
            <p className="text-yellow-700 font-medium mt-3">
              ⚠️ Moderate risk. Stay alert and share your trip with trusted contacts.
            </p>
          )}

          {riskScore <= 30 && (
            <p className="text-green-700 font-medium mt-3">
              ✅ Route appears safe. Continue with standard monitoring.
            </p>
          )}
        </div>

        <div className="mt-4 bg-slate-100 rounded-2xl h-56 relative overflow-hidden border">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-slate-200" />

          <div className="absolute top-8 left-8 w-3 h-3 bg-green-600 rounded-full" />
          <div className="absolute bottom-8 right-8 w-3 h-3 bg-red-600 rounded-full" />

          <div className="absolute top-10 left-12 text-xs text-gray-700 font-medium">
            Pickup
          </div>
          <div className="absolute bottom-10 right-12 text-xs text-gray-700 font-medium">
            Destination
          </div>

          <div className="absolute top-1/2 left-10 right-10 h-1 bg-gray-300 rounded-full -translate-y-1/2" />

          <div
            className="absolute top-1/2 left-10 h-1 bg-blue-500 rounded-full transition-all duration-700"
            style={{ width: `${progress * 0.8}%` }}
          />

          <div
            className="absolute top-1/2 -translate-y-1/2 text-xl transition-all duration-700"
            style={{ left: `calc(10% + ${progress * 0.8}%)` }}
          >
            🚗
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Trip Progress</span>
            <span>{progress}%</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-6">
          <button
            onClick={() => alert("Trip link shared with trusted contact")}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Share Live Trip
          </button>

          <button
            onClick={() =>
              alert(
                "🚨 Emergency Monitoring Activated\n\n• Live tracking shared\n• Contacts notified\n• Route monitoring started"
              )
            }
            className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
          >
            Emergency Monitor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tracking;