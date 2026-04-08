import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Driver = () => {
  const navigate = useNavigate();
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    const drivers = [
      { name: "Anjali Sharma", vehicle: "Activa CG 04 AB 1234", rating: 4.8 },
      { name: "Neha Verma", vehicle: "Scooty CG 10 XY 5678", rating: 4.6 },
      { name: "Priya Singh", vehicle: "Bike CG 07 MN 9012", rating: 4.9 },
    ];

    const assignTimer = setTimeout(() => {
      const selected = drivers[Math.floor(Math.random() * drivers.length)];
      setDriver(selected);

      localStorage.setItem("driverName", selected.name);
      localStorage.setItem("driverVehicle", selected.vehicle);
      localStorage.setItem("driverRating", selected.rating);
    }, 2000);

    const redirectTimer = setTimeout(() => {
      navigate("/tracking");
    }, 5000);

    return () => {
      clearTimeout(assignTimer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-teal-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md text-center w-full max-w-sm">
        {!driver ? (
          <>
            <h1 className="text-2xl font-bold text-teal-700 mb-4">
              Finding Your Driver...
            </h1>

            <p className="text-gray-600 mb-6">
              Connecting you with a nearby verified driver 🚗
            </p>

            <div className="animate-pulse text-4xl">🚗</div>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-green-700 mb-4">
              Driver Assigned ✅
            </h1>

            <div className="text-left space-y-2 mb-4">
              <p>
                <strong>Name:</strong> {driver.name}
              </p>
              <p>
                <strong>Vehicle:</strong> {driver.vehicle}
              </p>
              <p>
                <strong>Rating:</strong> ⭐ {driver.rating}
              </p>
            </div>

            <p className="text-sm text-gray-500">
              Starting your ride shortly...
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Driver;