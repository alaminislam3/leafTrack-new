import Image from 'next/image';
import dbConnect, { collectionNameObj } from '../lib/dbConnect'
import Link from 'next/link';
// import Link from 'next/link';
// import DeletePlantButton from '../components/DeletePlantButton';


export default async function Allplant() {
  const plantCollection = dbConnect(collectionNameObj.plantcollection);
  const plants = await plantCollection.find({}).toArray();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">All Plants</h1>
        <p className="text-gray-600 text-center">Manage your plant collection</p>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  #
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Plant Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Watering Frequency
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {plants.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                    No plants found
                  </td>
                </tr>
              ) : (
                plants.map((plant, index) => (
                  <tr key={plant._id.toString()} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10">
                          <Image
                            className="h-10 w-10 rounded-full object-cover"
                            src={plant.image}
                            alt={plant.plantName}
                            height={40}
                            width={40}
                          />
                        </div>
                        <div className="">
                          <div className="text-sm font-medium text-gray-900">
                            {plant.plantName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 capitalize">
                        {plant.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {plant.wateringFrequency}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {/* <div className="flex space-x-2">
                        
                        <Link
                          href={`/plants/edit/${plant._id.toString()}`}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Edit
                        </Link>
                        <DeletePlantButton plantId={plant._id.toString()} />
                      </div> */}
                      <Link
                          href={`/allplant/${plant._id.toString()}`}
                          className="btn bg-green-300 px-2 py-2 rounded"
                        >
                          Details
                        </Link>
                      {/* <button className=''>Details</button> */}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* {plants.length > 0 && (
        <div className="mt-4 text-sm text-gray-600">
          Total plants: {plants.length}
        </div>
      )} */}
    </div>
  )
}