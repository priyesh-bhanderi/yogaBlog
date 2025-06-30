import h1 from '../assets/h1.png'
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const HeroCard = () => {
    return (
        <section className="py-8">
            <div className="flex flex-col md:flex-row gap-6 bg-white shadow-lg rounded-2xl overflow-hidden p-4 md:p-6">
                
                <img
                    src={h1}
                    alt="Workout"
                    className="w-full md:w-5/12 h-64 md:h-96 object-cover rounded-xl"
                />

                <div className="w-full md:w-7/12 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                            <div className="flex items-center gap-3">
                                <img
                                    src={h1}
                                    alt="author"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-bold text-md text-gray-900">Betty</p>
                                    <p className="text-xs text-gray-500">Jun 15, 2023</p>
                                </div>
                            </div>

                            <span className="text-xs bg-[#071C35] px-3 py-1 rounded-md font-medium text-white">
                                Exercise
                            </span>
                        </div>

                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 my-4 md:pr-12">
                            Etiam at sollicitudin eros nullam vestibulum tincidunt ultrices
                        </h2>

                        <p className="text-sm md:text-base text-black md:pr-12">
                            Mauris pulvinar urna non ex fringilla molestie. Ut tincidunt
                            tortor id elit ullamcorper accumsan. Mauris odio nisi, mollis vel
                            accumsan vel, vulputate a metus. Morbi […]
                        </p>
                    </div>

                    <div className="flex justify-end items-center pt-4 border-t border-gray-200 mt-6">
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
        </section>
    )
}

export default HeroCard
