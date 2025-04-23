import React, { useState } from 'react';

const AddChildProfile = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    parent1Name: '',
    parent2Name: '',
    address: '',
    email: '',
    emergencyContact: '',
    cellNumber: '',
    allergy: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="font-sans antialiased bg-gray-100 text-gray-900 flex justify-center items-center h-screen">
        <div className="container mx-auto bg-white rounded shadow-md overflow-hidden max-w-3xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Submitted Information</h2>
          <ul className="list-disc pl-5">
            {Object.entries(formData).map(([key, value]) => (
              <li key={key} className="mb-2">
                <strong>{key.replace(/([A-Z])/g, ' $1')}: </strong>
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans antialiased bg-gray-100 text-gray-900 flex justify-center items-center h-screen">
      <div className="container mx-auto bg-white rounded shadow-md overflow-hidden max-w-3xl">
        <div className="md:flex">
          <div className="md:w-1/2 p-8">
            <div className="flex items-center mb-6">
              <img
                src="/Profile3.png"
                alt="Profile"
                className="rounded-full h-16 w-16 object-cover mr-4"
              />
              <div>
                <h2 className="text-2xl font-semibold">New student</h2>
              </div>
            </div>
            {['fullName', 'gender', 'parent1Name', 'address', 'email'].map((field) => (
              <div className="mb-4" key={field}>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor={field}
                >
                  {field.replace(/([A-Z])/g, ' $1')}
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id={field}
                  type={field === 'email' ? 'email' : 'text'}
                  placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                  value={formData[field]}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>

          <div className="md:w-1/2 p-8">
            <div className="flex justify-end mb-4">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSubmit}
              >
                Add Child
              </button>
            </div>
            {['parent2Name', 'emergencyContact', 'cellNumber', 'allergy'].map((field) => (
              <div className="mb-4" key={field}>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor={field}
                >
                  {field.replace(/([A-Z])/g, ' $1')}
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id={field}
                  type={field === 'cellNumber' ? 'tel' : 'text'}
                  placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                  value={formData[field]}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddChildProfile;
