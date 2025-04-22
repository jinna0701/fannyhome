// components/ChildProfilesGrid.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ChildProfileCard = ({ child }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 mb-2 overflow-hidden rounded-md">
        <Image 
          src={child.photoUrl} 
          alt={`Photo of ${child.name}`}
          width={96}
          height={96}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="mb-2 text-base font-medium text-gray-800">{child.name}</h3>
      <Link 
        href={`/child-profile/${child.id}`}
        className="px-6 py-2 text-sm text-gray-700 bg-amber-100 rounded hover:bg-amber-200 transition-colors w-full text-center"
      >
        View Profile
      </Link>
    </div>
  );
};

const ChildProfilesGrid = ({ children }) => {
  return (
    <div className="container px-4 py-6">
      <h1 className="mb-6 text-2xl font-medium text-gray-700">Child Profile</h1>
      
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {children.map((child) => (
          <ChildProfileCard key={child.id} child={child} />
        ))}
      </div>
    </div>
  );
};

export default ChildProfilesGrid;

// Example usage in a page file
export function ChildProfilesPage() {
  // This would typically come from an API or database
  const childrenData = [
    {
      id: "1",
      name: "Robert Kale",
      photoUrl: "/images/child1.jpg",
    },
    {
      id: "2",
      name: "Robert Kale",
      photoUrl: "/images/child2.jpg",
    },
    {
      id: "3",
      name: "Robert Kale",
      photoUrl: "/images/child3.jpg",
    },
    {
      id: "4",
      name: "Robert Kale",
      photoUrl: "/images/child4.jpg",
    },
  ];

  return (
    <div className="flex-1">
      <ChildProfilesGrid children={childrenData} />
    </div>
  );
}