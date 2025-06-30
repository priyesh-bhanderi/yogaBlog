import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";
import instra from '../assets/instra.png'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
import x from '../assets/x.png'
import { FaPaperPlane } from "react-icons/fa";

const Footer = () => {
    const headerList = [
        { name: "About Us", link: "" },
        { name: "Health & Safety", link: "" },
        { name: "Advertisement", link: "" }
    ]
    return (
        <footer className="bg-[#071C35] text-white py-8 px-4">
            <div className="container mx-auto grid md:grid-cols-3 gap-6">
                <div className="space-y-5 px-6">
                    <img src={logo} alt="logo" className='h-12' />
                    <p className="text-sm">Unveiling stories that intrigue and inspire, our magazine company offers a curated blend of captivating content. Immerse yourself in a world of knowledge and creativity with every page turn.</p>
                    <p className="text-xs">© 2022-2026 GUTENMATE THEME. ALL RIGHTS RESERVED.</p>
                </div>

                <div>
                    <h4 className="text-xl font-semibold mb-4">About</h4>
                    <div className="flex flex-col gap-2 text-sm">
                        {headerList.map((list, index) => (
                            <Link to={list.link} key={index}>{list.name}</Link>
                        ))}
                    </div>
                </div>

                <div className="bg-[#0b1d36] text-white p-6 max-w-md rounded">
                    <h4 className="text-2xl font-semibold mb-4">Newsletter</h4>

                    <div className="flex items-center bg-[#d9d9d9] rounded-full px-4 py-2 mb-4">
                        <input
                            type="email"
                            placeholder="Enter Your Email Adresss Here"
                            className="bg-transparent outline-none flex-grow text-black placeholder:text-gray-600"
                        />
                        <button>
                            <FaPaperPlane className="text-black text-lg" />
                        </button>
                    </div>

                    <label className="flex items-start gap-2 text-sm text-white">
                        <input
                            type="checkbox"
                            className="mt-1 accent-white"
                        />
                        <span>
                            I consent to receive newsletter via email. For further information,
                            please review our{" "}
                            <a href="#" className="underline">
                                Privacy Policy
                            </a>.
                        </span>
                    </label>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mx-auto">
                <h4 className="text-xl font-semibold mb-4">Follow us</h4>
                <div className="flex gap-4 text-xl">
                    <img src={instra} className="w-6 h-6"/>
                    <img src={linkedin} className="w-6 h-6"/>
                    <img src={facebook} className="w-6 h-6"/>
                    <img src={x} className="w-6 h-6"/>
                </div>
            </div>
        </footer>
    )
}

export default Footer