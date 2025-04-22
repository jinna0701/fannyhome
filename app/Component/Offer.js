// components/WhatWeOffer.js
import React from 'react';

export default function Offer() {
    const features = [
        {
            id: 1,
            title: "Easy Management",
            description: "Enjoy less paperwork and administrative burdens while allowing our clients to focus on delivering quality care"
        },
        {
            id: 2,
            title: "Easy Management",
            description: "Enjoy less paperwork and administrative burdens while allowing our clients to focus on delivering quality care"
        },
        {
            id: 3,
            title: "Easy Management",
            description: "Enjoy less paperwork and administrative burdens while allowing our clients to focus on delivering quality care"
        }
    ];

    return (
        <section style={{ backgroundColor: '#fff8f2' }} className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Dashboard platform has lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Maxime mollitia.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map(feature => (
                        <div 
                            key={feature.id} 
                            className="bg-[#F8D8C1] rounded-lg p-8 h-72"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}