
import React from 'react';

export default function ChildProfile() {
  const children = [
    { name: 'Tony Kim', image: '/Profile1.png' },
    { name: 'Robert Kale', image: '/Profile2.png' },
    { name: 'Neeha', image: '/Profile3.png' },
    { name: 'Boss Baby', image: '/Profile4.png' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-medium text-gray-800 mb-6">Child Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {children.map((child, index) => (
          <div key={index} className="bg-white border border-gray-100 rounded-lg p-6 flex flex-col items-center">
            <img src={child.image} alt={child.name} className="w-24 h-24 rounded-full mb-4" />
            <h3 className="text-gray-800 text-xl font-medium mb-2">{child.name}</h3>
            <button className="bg-orange-500 text-white px-4 py-2 rounded">View Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
}
