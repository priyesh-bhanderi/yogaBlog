import React from 'react'
import { AiOutlineComment } from 'react-icons/ai'
import { IoIosEye } from 'react-icons/io'
import blog1 from '../assets/blog1.png'
import user from '../assets/user.png'
import user2 from '../assets/user2.png'

import body1 from '../assets/body1.png'
import body2 from '../assets/body2.png'
import body3 from '../assets/body3.png'
import body4 from '../assets/body4.png'

import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import pint from '../assets/pint.png'
import email from '../assets/email.png'
import insta from '../assets/insta.png'
import { BsYoutube } from 'react-icons/bs'
import { FaHeart, FaRegHeart, FaXTwitter } from 'react-icons/fa6'
import { BiLogoFacebookCircle } from 'react-icons/bi'


const BlogDetails = () => {

    const IconsData = ({ value, icon }) => {
        return (
            <div className="flex flex-row gap-3 place-items-center font-poppins">
                <span className='bg-[#071C35] rounded-full h-7 w-7 aspect-square text-xl flex justify-center place-items-center text-white'>{icon}</span>
                <span className='font-semibold text-sm'>{value}</span>
            </div>
        )
    }

    const Title = ({ title }) => {
        return (
            <span className='font-bold text-3xl'>{title}</span>
        )
    }

    const bodyData = [
        {
            title: 'Fusce eu nisi ut lorem consectetur accumsan',
            text: 'Proin eu eros libero. Praesent tempor purus eget egestas venenatis. In a hendrerit elit. Aliquam dignissim hendrerit metus, non varius augue pulvinar sit amet.',
            images: [body1, body2]
        },
        {
            title: 'Fusce eu nisi ut lorem consectetur accumsan',
            text: 'Proin eu eros libero. Praesent tempor purus eget egestas venenatis. In a hendrerit elit. Aliquam dignissim hendrerit metus, non varius augue pulvinar sit amet.',
            images: [body3, body4]
        },
    ]

    const shareData = [facebook, twitter, pint, email, insta]

    const shareIcons = [
        { name: 'YouTube', icon: BsYoutube },
        { name: 'Twitter', icon: FaXTwitter },
        { name: 'Facebook', icon: BiLogoFacebookCircle },
    ]

    const comments = [
        {
            img: user,
            name: 'Michel',
            text: '“pharetra fermentum. Vivamus purus sem, fermentum eu enim eu, faucibus blandit ex. Proin pharetra nisi nec interdum laoreet.”',
            like: true,
        },
        {
            img: user,
            name: 'Michel',
            text: '“pharetra fermentum. Vivamus purus sem, fermentum eu enim eu, faucibus blandit ex. Proin pharetra nisi nec interdum laoreet.”',
            like: false,
        },
        {
            img: user,
            name: 'Michel',
            text: '“pharetra fermentum. Vivamus purus sem, fermentum eu enim eu, faucibus blandit ex. Proin pharetra nisi nec interdum laoreet.”',
            like: false,
        },
        {
            img: user,
            name: 'Michel',
            text: '“pharetra fermentum. Vivamus purus sem, fermentum eu enim eu, faucibus blandit ex. Proin pharetra nisi nec interdum laoreet.”',
            like: false,
        },
    ]

    return (
        <div className='space-y-10 pt-5 pb-5'>
            <div className="xl:h-[60vh] lg:h-[45vh] md:h-[40vh] h-[30vh] w-full rounded-2xl overflow-hidden relative bg-cover bg-no-repeat" style={{ backgroundImage: `radial-gradient(circle at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 100%), url(${blog1})`, backgroundPosition: 'center', }} >
                {/* <img src={blog1} alt="" className='h-full w-full object-cover absolute' /> */}
                <span className='font-semibold md:text-xl text-sm text-white bg-[#071C35] px-5 pb-0.5 rounded-lg absolute top-5 right-5'>Exercise</span>
                <div className="flex flex-col gap-5 absolute md:left-16 left-3 bottom-5 text-white">
                    <h1 className=' font-semibold md:text-3xl text-lg'>Sed venenatis ultrices nunc at convallis cras eget</h1>
                    <div className="md:flex flex-row gap-5 place-items-center hidden">
                        <div className="flex flex-row gap-3">
                            <img src={user} alt="" className='h-12 w-12 object-cover aspect-square' />
                            <div className="flex flex-col ">
                                <h6 className='font-semibold text-base'>Betty</h6>
                                <span className='text-sm'>Jun 15,2023</span>
                            </div>
                        </div>
                        <IconsData value='31 Commnets' icon={<AiOutlineComment />} />
                        <IconsData value='5k  View' icon={<IoIosEye />} />
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-5 place-items-center md:hidden">
                <div className="flex flex-row gap-3 w-full place-items-start">
                    <img src={user} alt="" className='h-14 w-14 object-cover aspect-square' />
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row justify-between w-full place-items-center">
                            <h6 className='font-semibold text-lg'>Betty</h6>
                            <span className='text-sm'>Jun 15,2023</span>
                        </div>
                        <div className="flex flex-row place-items-center gap-5">
                            <IconsData value='31 Commnets' icon={<AiOutlineComment />} />
                            <IconsData value='5k  View' icon={<IoIosEye />} />
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex flex-col gap-5 md:text-xl text-sm">
                <p>Vivamus at dui in tellus auctor imperdiet. Proin vitae hendrerit erat. Suspendisse placerat, purus et laoreet tristique, nisl justo facilisis purus, ultricies egestas nibh diam ut libero. Maecenas iaculis odio sapien, vel eleifend ligula commodo non. Duis bibendum laoreet ligula a ultrices. Proin pretium tristique felis, sed bibendum mauris ultrices sed. Curabitur faucibus fringilla orci, id vestibulum turpis ultricies at. Praesent mollis sapien ultrices diam gravida convallis. Sed posuere, tellus sit amet cursus gravida, ex orci feugiat leo, sed tristique arcu velit ac ex</p>
                <p>Vivamus at dui in tellus auctor imperdiet. Proin vitae hendrerit erat. Suspendisse placerat, purus et laoreet tristique, nisl justo facilisis purus, ultricies egestas nibh diam ut libero. Maecenas iaculis odio sapien, vel eleifend ligula commodo non. Duis bibendum laoreet ligula a ultrices. Proin pretium tristique felis, sed bibendum mauris ultrices sed. Curabitur faucibus fringilla orci, id vestibulum turpis ultricies at. Praesent mollis sapien ultrices diam gravida convallis. Sed posuere, tellus sit amet cursus gravida, ex orci feugiat leo, sed tristique arcu velit ac ex</p>
                <p>Vivamus at dui in tellus auctor imperdiet. Proin vitae hendrerit erat. Suspendisse placerat, purus et laoreet tristique, nisl justo facilisis purus, ultricies egestas nibh diam ut libero. Maecenas iaculis odio sapien, vel eleifend ligula commodo non. Duis bibendum laoreet ligula a ultrices. Proin pretium tristique felis, sed bibendum mauris ultrices sed. Curabitur faucibus fringilla orci, id vestibulum turpis ultricies at. Praesent mollis sapien ultrices diam gravida convallis. Sed posuere, tellus sit amet cursus gravida, ex orci feugiat leo, sed tristique arcu velit ac ex</p>
            </div>
            <div className="space-y-5">
                <Title title='Body Stretching' />
                <div className="grid md:grid-cols-2 grid-cols-1 gap-8 px-3">
                    {bodyData.map((list, i) => (
                        <div className="flex flex-col gap-3" key={i}>
                            <div className="flex flex-row gap-1.5 place-items-start">
                                <span className='bg-[#071C35] text-sm font-semibold rounded-full h-6 w-6 aspect-square text-white flex justify-center place-items-center mt-1'>{i + 1}</span>
                                <div className="flex flex-col gap-1">
                                    <span className='line-clamp-1 font-semibold text-xl'>{list.title}</span>
                                    <span className='text-sm'>{list.text}</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {list?.images.map((item, i) => (
                                    <img key={i} src={item} className='aspect-video object-cover' />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="space-y-5">
                <Title title='Tags' />
                <div className="tags flex flex-row md:gap-10 gap-7 flex-wrap px-3">
                    {[...Array(5)].map((list, i) => (
                        <button key={i} className='h-7 relative bg-[#071C35] text-white ps-3 pe-5 before:content-[""] before:absolute before:top-0 before:-left-3 shadow-xl
                    before:border-t-[14px] before:border-b-[14px] before:border-r-[12px] before:border-t-transparent before:border-b-transparent before:border-l-transparent before:border-r-[#071C35] 
                    before:border-solid after:absolute after:h-1 after:w-1 after:aspect-square after:bg-white after:rounded-full after:left-0 after:top-1/2 after:-translate-y-1/2'>
                            Text
                        </button>
                    ))}
                </div>
            </div>
            <div className="space-y-5 flex md:flex-row flex-col gap-5">
                <div className="flex flex-col gap-7 xl:w-1/2 md:w-1/3">
                    <Title title='Share This ' />
                    <div className="flex flex-row gap-5">
                        {shareData.map((list, i) => (
                            <button className='xl:h-10 xl:w-10 md:h-7 md:w-7 w-7 h-7 aspect-square' key={i}><img src={list} alt="" className='w-full h-full aspect-square' /></button>
                        ))}
                    </div>
                </div>
                <div className="rounded-xl bg-white shadow-xl xl:p-5 md:p-4 p-3 flex flex-row gap-4 xl:w-1/2 md:w-2/3">
                    <img src={user2} className='xl:h-28 xl:w-28 md:w-24 md:h-24 w-24 h-24 aspect-square' alt="" />
                    <div className="flex flex-col">
                        <h6 className='font-semibold md:text-sm text-xs'>About Author</h6>
                        <h6 className='font-semibold md:text-base text-sm mt-1'>Betty</h6>
                        <p className='text-xs line-clamp-2'>I love sushi and I’m a big fan of Japan. I’m always looking for new ways to create and express myself.</p>
                        <div className="grid grid-cols-3 mt-auto w-fit">
                            {shareIcons.map((list, i) => (
                                <button key={i} className='flex flex-row place-items-center gap-2'>
                                    <h6 className='md:text-base text--sm'><list.icon /></h6>
                                    <span className='text-xs font-semibold'>{list.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-5">
                <Title title='Comments Review' />
                <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-5">
                    {comments.map((list, i) => (
                        <div className="flex flex-row gap-3 place-items-start bg-white shadow-xl p-4 rounded-xl" key={i}>
                            <img src={list.img} className='h-10 w-10 aspect-square' alt="" />
                            <div className="flex flex-col gap-1 w-full">
                                <div className="flex flex-row justify-between place-items-center w-full">
                                    <h6 className='font-semibold text-sm'>{list.name}</h6>
                                    <span className={`${list.like ? 'text-red-600' : ''}`}>{list.like ? <FaHeart /> : <FaRegHeart />}</span>
                                </div>
                                <p className='text-xs'>{list.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogDetails
