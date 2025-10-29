import dbConnect, { collectionNameObj } from '../../lib/dbConnect'
import { ObjectId } from 'mongodb';
import Link from 'next/link';
import Image from 'next/image';

export default async function SinglePlantpage({ params }) {
  const { id } = params;
  const plantCollection = dbConnect(collectionNameObj.plantcollection);
  const plant = await plantCollection.findOne({ _id: new ObjectId(id) });
//  console.log(plant);
  if (!plant) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Plant Not Found</h1>
          <Link href="/allplant" className="text-blue-600 hover:text-blue-800">
            Back to All Plants
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/allplant" className="text-blue-600 hover:text-blue-800 flex items-center">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to All Plants
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Plant Image */}
          <div className="md:w-1/2">
            <Image
              src={plant.image}
              alt={plant.plantName}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Plant Details */}
          <div className="md:w-1/2 p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{plant.plantName}</h1>
            
            <div className="mb-6">
              <span className="px-3 py-1 inline-flex text-sm font-semibold rounded-full bg-green-100 text-green-800 capitalize">
                {plant.category}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase">Description</h3>
                <p className="mt-1 text-gray-700">{plant.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase">Care Level</h3>
                  <p className="mt-1 text-gray-900 capitalize">{plant.careLevel}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase">Health Status</h3>
                  <p className="mt-1 text-gray-900 capitalize">
                    <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                      plant.healthStatus === 'good' ? 'bg-green-100 text-green-800' :
                      plant.healthStatus === 'fair' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {plant.healthStatus}
                    </span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase">Watering Frequency</h3>
                <p className="mt-1 text-gray-900">{plant.wateringFrequency}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase">Last Watered</h3>
                  <p className="mt-1 text-gray-900">{new Date(plant.lastWateredDate).toLocaleDateString()}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase">Next Watering</h3>
                  <p className="mt-1 text-gray-900">{new Date(plant.nextWateringDate).toLocaleDateString()}</p>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="text-sm font-medium text-gray-500 uppercase mb-2">Owner Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500">Name</p>
                    <p className="text-gray-900">{plant.userName}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="text-gray-900">{plant.userEmail}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex space-x-4">
              <Link
                href={`/plants/edit/${plant._id.toString()}`}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Edit Plant
              </Link>
              <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                Delete Plant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}