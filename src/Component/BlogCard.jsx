import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const BlogCard = ({ list }) => {
    return (
        <Link to='blog-details' className="bg-white rounded-xl shadow-md overflow-hidden p-4">
            <div className="relative">
                <img src={list} alt="post" className="w-full h-72 object-cover rounded-md" />
                <span className="absolute top-3 right-4 bg-[#071C35] text-white text-xs px-2 py-1 rounded">
                    Exercise
                </span>
            </div>
            <div className="my-4">
                <h3 className="font-semibold text-xl mb-1">
                    Etiam mollis libero at placerat feugiat est velit accumsan
                </h3>
                <p className="text-sm text-gray-500 mb-2">by Betty – 15 June 2023</p>
                <p className="text-sm text-gray-600 mb-4">
                    Vestibulum a pellentesque nunc, at tincidunt odio. Donec aliquet malesuada nisi et semper. Sed tempor nulla id nunc laoreet, in pellentesque purus eleifend.
                </p>
                <div className="flex justify-end border-t pt-3">
                    <a href="#" className="text-sm font-medium text-gray-800 flex items-center gap-1 hover:underline">
                        <FaRegArrowAltCircleRight className="text-lg" />
                        Read More
                    </a>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard
