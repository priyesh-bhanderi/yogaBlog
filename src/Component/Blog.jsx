import { useState } from "react";
import h1 from '../assets/h1.png'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Datepi from "./CustomDatePicker";


const categories = [
    "Exercise",
    "Family",
    "Fitness",
    "Foodie",
    "Gadgets",
    "Living"
];

const Blog = () => {

  const [value, setValue] = useState(new Date());
    return (
        <main className="px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
            <section className="md:col-span-3">
                <div className="flex flex-col mb-6">
                    <span className="font-bold text-3xl">Recent Blog Posts</span>
                    <span className="text-xs">See Our Latest Post</span>
                </div>
                <div className="grid grid-cols-2 gap-6 my-5">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden p-4 ">
                            <div className="relative">
                                <img
                                    src={h1}
                                    alt="post"
                                    className="w-full h-72 object-cover rounded-md"
                                />
                                <span className="absolute top-3 right-4 bg-[#071C35] text-white text-xs px-2 py-1 rounded">
                                    Exercise
                                </span>
                            </div>
                            <div className="my-4 justify-between">
                                <div>
                                    <h3 className="font-semibold text-2xl leading-tight mb-1">
                                        Etiam mollis libero at placerat feugiat est velit accumsan
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-4">by Betty – 15 June 2023</p>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Vestibulum a pellentesque nunc, at tincidunt odio. Donec aliquet malesuada nisi et semper. Sed tempor nulla id nunc laoreet, in pellentesque purus eleifend.
                                    </p>
                                </div>
                                <div className="flex justify-end items-center pt-4 border-t border-gray-200 ">

                                    <a
                                        href="#"
                                        className="text-sm font-medium text-gray-800 flex items-center gap-1 hover:underline"
                                    >
                                        <FaRegArrowAltCircleRight className="text-lg" />
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </section>

            <aside className="md:col-span-2 space-y-8">
                <div>
                    <h4 className="font-bold mb-6 text-3xl">Featured Posts</h4>
                    <div className="bg-white p-4 rounded-xl mt-10">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-4 rounded-xl mb-4"
                            >
                                <div className="relative">
                                    <img
                                        src={h1}
                                        alt="featured"
                                        className="w-40 object-cover rounded-lg"
                                    />
                                    <span className="absolute top-2 right-2 bg-[#071C35] text-white text-xs py-0.5 px-1 rounded">
                                        Exercise
                                    </span>
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold leading-tight mb-1">
                                        Sed venenatis ultrices nunc at convallis cras eget
                                    </h3>
                                    <p className="text-[10px] text-gray-600 mb-2">
                                        Vestibulum a pellentesque nunc, at tincidunt odio. Donec aliquet
                                        malesuada nisi et semper. Sed tempor nulla id nunc laoreet, in
                                        pellentesque purus eleifend.
                                    </p>
                                    <div className="flex justify-end items-center pt-4 border-t border-gray-200 ">

                                        <a
                                            href="#"
                                            className="text-sm font-medium text-gray-800 flex items-center gap-1 hover:underline"
                                        >
                                            <FaRegArrowAltCircleRight className="text-lg" />
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-3xl">Categories</h4>
                    <div className="grid grid-cols-2 gap-8">
                        {categories.map((cat, i) => (
                            <div key={i} className="text-center">
                                <img
                                    src={h1}
                                    alt={cat}
                                    className="w-full rounded"
                                />
                                <p className="font-bold text-lg mt-2">{cat}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-3xl">Select Date</h4>
                   <Datepi />
                </div>
            </aside>
        </main>
    )
}

export default Blog