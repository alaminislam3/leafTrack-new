import Image from "next/image";
import dbConnect, { collectionNameObj } from "../lib/dbConnect";
// import Link from "next/link";

export default async function NewArrival() {
  const plantCollection = dbConnect(collectionNameObj.plantcollection);
  const plants = await plantCollection.find({}).toArray();
    // console.log(plants);
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-green-600 text-center mb-8">
        🌿 New Arrival
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plants.map((plant) => (
          <div
            key={plant._id}
            className="card bg-base-100 p-5 shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure>
              <Image
                src={plant.image}
                width={314}
                height={108}
                alt={plant.plantName}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{plant.plantName}</h2>

              <div className="card-actions justify-end mt-4">
                {/* <Link to={`/allplant/${plant._id}`}> */}
                  <button className="btn bg-gradient-to-l from-lime-200 to-transparent text-emerald-900 font-bold">
                    View Details
                  </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
