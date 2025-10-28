import Link from 'next/link';
import React from 'react';


const PlantCareTips = () => {
    return (
        <section className="bg-white max-w-7xl mx-auto py-10 px-4">
            <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
                🌿 Plant Care Tips
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-100 rounded-xl shadow-md p-6">
                    <h3 className="text-lg font-semibold text-green-700">Succulent Care</h3>
                    <p className="text-sm mt-2">
                        Succulents need bright, indirect light and watering only when the soil is fully dry.
                    </p>
                </div>
                <div className="bg-green-100 rounded-xl shadow-md p-6">
                    <h3 className="text-lg font-semibold text-green-700">Fern Care</h3>
                    <p className="text-sm mt-2">
                        Ferns love humidity. Mist them regularly and keep soil consistently moist.
                    </p>
                </div>
                <div className="bg-green-100 rounded-xl shadow-md p-6">
                    <h3 className="text-lg font-semibold text-green-700">Tropical Plant Tips</h3>
                    <p className="text-sm mt-2">
                        Use filtered water and ensure temperature doesn’t drop below 18°C.
                    </p>
                </div>
            </div>

            <div className="text-center mt-10">
                <Link href={'/allplant'}>
                <button className=" bg-gradient-to-l from-lime-200 to-transparent text-emerald-900 font-semibold px-6 py-3 rounded-xl shadow">
                    Learn More
                </button>
                </Link>
            </div>
        </section>
    );
};

export default PlantCareTips;