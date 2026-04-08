import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const navigate = useNavigate();

  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [contacts, setContacts] = useState([]);

  // Load saved contacts
  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    setContacts(savedContacts);
  }, []);

  // Save contacts
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = () => {
    if (!contactName || !contactNumber) {
      alert("Please fill all fields");
      return;
    }

    const newContact = {
      name: contactName,
      number: contactNumber,
    };

    setContacts([...contacts, newContact]);
    setContactName("");
    setContactNumber("");
  };

  const deleteContact = (index) => {
    const updated = contacts.filter((_, i) => i !== index);
    setContacts(updated);
  };

  return (
    <div className="min-h-screen bg-purple-50 p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold text-purple-700">
          Trusted Contacts
        </h1>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-white border px-4 py-2 rounded"
        >
          Back
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Name"
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />

        <button
          onClick={addContact}
          className="bg-purple-600 text-white px-4 py-2 rounded w-full"
        >
          Add Contact
        </button>

        <div className="mt-6">
          {contacts.length === 0 ? (
            <p>No contacts yet</p>
          ) : (
            contacts.map((c, i) => (
              <div
                key={i}
                className="flex justify-between bg-purple-100 p-3 rounded mb-2"
              >
                <span>{c.name} ({c.number})</span>

                <button
                  onClick={() => deleteContact(i)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacts;