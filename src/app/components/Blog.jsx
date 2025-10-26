import Image from "next/image";
// import Link from "next/link";
import fourImg from "@/assets/four.jpg"
import fiveImg from "@/assets/five.jpg"
import sixImg from "@/assets/six.jpg"

export default function Blog() {
  return <div className='py-10 max-w-7xl mx-auto  '>
            <h2 className='text-3xl text-green-600 text-center mb-6'>Read Blogs</h2>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-4'>
                {/* Blog 1 */}
                <div className='text-center'>
                    <Image
                        className='w-full max-w-[500px] h-auto object-cover rounded-lg mx-auto'
                        src={fourImg}
                        alt="Blog 1"
                    />
                    <h3 className='text-lg font-semibold text-emerald-800 mt-4'>
                        🌿 Blog 1: Plant Care Basics
                    </h3>
                    {/* <Link to={'/allplant'}> */}
                    <button className='mt-4 btn text-lg bg-gradient-to-l from-lime-200 to-transparent text-emerald-900'>
                        View more..
                    </button>
                    {/* </Link> */}
                </div>

                {/* Blog 2 */}
                <div className='text-center'>
                    <Image
                        className='w-full max-w-[500px] h-auto object-cover rounded-lg mx-auto'
                        src={fiveImg}
                        alt="Blog 2"
                    />
                    <h3 className='text-lg font-semibold text-emerald-800 mt-4'>
                        🌼 Blog 2: Top 10 Indoor Plants
                    </h3>
                    {/* <Link to={'/allplant'}> */}
                    <button className='mt-4 btn text-lg bg-gradient-to-l from-lime-200 to-transparent text-emerald-900'>
                        View more..
                    </button>
                    {/* </Link> */}
                </div>

                {/* Blog 3 */}
                <div className='text-center'>
                    <Image
                        className='w-full max-w-[500px] h-[240px] object-cover rounded-lg mx-auto'
                        src={sixImg}
                        alt="Blog 3"
                    />
                    <h3 className='text-lg font-semibold text-emerald-800 mt-4'>
                        🍃 Blog 3: How Plants Clean Air
                    </h3>
                    {/* <Link to={'/allplant'}> */}
                    <button className='mt-4 btn text-lg bg-gradient-to-l from-lime-200 to-transparent text-emerald-900'>
                        View more..
                    </button>
                    {/* </Link> */}
                </div>
            </div>
        </div>;
}
