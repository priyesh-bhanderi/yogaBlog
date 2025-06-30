import h1 from '../assets/h1.png';
import b1 from '../assets/b1.png'
import b2 from '../assets/b2.png'
import b3 from '../assets/b3.png'
import b4 from '../assets/b4.png'
import b5 from '../assets/b5.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'
import c4 from '../assets/c4.png'
import c5 from '../assets/c5.png'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Datepi from "./CustomDatePicker";
import BlogCard from './BlogCard';
import React from 'react'


const categories = [
    { name: "Exercise", img: h1 },
    { name: "Family", img: b1 },
    { name: "Fitness", img: c2 },
    { name: "Foodie", img: c3 },
    { name: "Gadgets", img: c4 },
    { name: "Living", img: c5 }
];

const BlogList = [b1, b2, b1, b3, b4, b5]

const PostBlog = [b2, b3, b4]

const Blog = () => {

    return (
        <main className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
            <section className="md:col-span-3">
                <div className="flex flex-col mb-6">
                    <h2 className="font-bold text-3xl">Recent Blog Posts</h2>
                    <span className="text-xs text-gray-500">See Our Latest Post</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {BlogList.map((list, i) => (
                        <React.Fragment key={i}>
                            <BlogCard list={list} />
                        </React.Fragment>
                    ))}
                </div>
            </section>

            <aside className="md:col-span-2 space-y-12">
                <div>
                    <h4 className="font-bold text-3xl mb-6">Featured Posts</h4>
                    <div className="bg-white p-4 rounded-xl">
                        {PostBlog.map((list, i) => (
                            <div key={i} className="flex items-start gap-4 mb-4">
                                <div className="relative">
                                    <img src={list} alt="featured" className="w-32 h-24 object-cover rounded-lg" />
                                    {/* <span className="absolute top-2 right-2 bg-[#071C35] text-white text-xs px-2 py-0.5 rounded">
                                        Exercise
                                    </span> */}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-sm font-semibold mb-1">
                                        Sed venenatis ultrices nunc at convallis cras eget
                                    </h3>
                                    <p className="text-xs text-gray-600 mb-2">
                                        Donec aliquet malesuada nisi et semper. Sed tempor nulla id nunc laoreet.
                                    </p>
                                    <div className="flex justify-end items-center border-t pt-2">
                                        <a href="#" className="text-xs font-medium text-gray-800 flex items-center gap-1 hover:underline">
                                            <FaRegArrowAltCircleRight className="text-sm" />
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-3xl mb-6">Categories</h4>
                    <div className="grid grid-cols-2 gap-4">
                        {categories.map((cat, i) => (
                            <div key={i} className="text-center">
                                <img src={cat.img} alt={cat} className="w-full rounded" />
                                <p className="font-bold text-sm mt-2">{cat.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-3xl mb-6">Select Date</h4>
                    <Datepi />
                </div>
            </aside>
        </main>
    );
};

export default Blog;
