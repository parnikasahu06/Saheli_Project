import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Ride = () => {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const navigate = useNavigate();

  const handleBooking = () => {
    if (!pickup || !drop) {
      alert("Please enter both pickup and drop locations.");
      return;
    }

    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    const currentHour = new Date().getHours();
    const isNight = currentHour >= 20 || currentHour <= 5;

    const riskyKeywords = [
      "isolated",
      "highway",
      "forest",
      "unknown",
      "bypass",
      "outer",
      "industrial",
    ];

    const routeText = `${pickup} ${drop}`.toLowerCase();
    const isUnknownArea = riskyKeywords.some((word) => routeText.includes(word));
    const hasTrustedContacts = contacts.length > 0;

    let risk = 0;
    let reasons = [];

    if (isNight) {
      risk += 30;
      reasons.push("Night-time travel");
    }

    if (isUnknownArea) {
      risk += 40;
      reasons.push("Route passes through unfamiliar or isolated area");
    }

    if (!hasTrustedContacts) {
      risk += 25;
      reasons.push("No trusted contacts linked (higher vulnerability)");
    }

    if (pickup.toLowerCase() === drop.toLowerCase()) {
      risk -= 10;
      reasons.push("Short route");
    }

    risk += Math.floor(Math.random() * 10);
    risk = Math.min(Math.max(risk, 0), 100);

    let riskLabel = "";
    let riskMessage = "";

    if (risk > 70) {
      riskLabel = "High Risk";
      riskMessage =
        "⚠️ High Risk detected!\nSuggested: Enable SOS, share trip, and use emergency monitoring.";
    } else if (risk > 30) {
      riskLabel = "Moderate Risk";
      riskMessage =
        "⚠️ Moderate Risk detected.\nStay alert and share your ride with trusted contacts.";
    } else {
      riskLabel = "Safe Route";
      riskMessage = "✅ Route appears safe.";
    }

    localStorage.setItem("pickup", pickup);
    localStorage.setItem("drop", drop);
    localStorage.setItem("riskScore", risk);
    localStorage.setItem("riskLabel", riskLabel);
    localStorage.setItem("riskReasons", JSON.stringify(reasons));
    localStorage.setItem("isNight", JSON.stringify(isNight));
    localStorage.setItem("hasTrustedContacts", JSON.stringify(hasTrustedContacts));
    localStorage.setItem("isUnknownArea", JSON.stringify(isUnknownArea));

    alert(riskMessage);
    navigate("/driver");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-teal-50 px-4">
      <div className="bg-white shadow-lg p-8 rounded-2xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-teal-700 mb-6 text-center">
          Book Your Ride
        </h1>

        <input
          type="text"
          placeholder="Pickup Location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <input
          type="text"
          placeholder="Drop Location"
          value={drop}
          onChange={(e) => setDrop(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <button
          onClick={handleBooking}
          className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700"
        >
          Confirm Ride
        </button>
      </div>
    </div>
  );
};

export default Ride;