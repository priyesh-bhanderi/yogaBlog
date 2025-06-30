import { FaPaperPlane } from "react-icons/fa";
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import instra from '../assets/instra.png';
import linkedin from '../assets/linkedin.png';
import facebook from '../assets/facebook.png';
import x from '../assets/x.png';

const Footer = () => {
    const headerList = [
        { name: "About Us", link: "" },
        { name: "Health & Safety", link: "" },
        { name: "Advertisement", link: "" }
    ];

    return (
        <footer className="bg-[#071C35] text-white px-4 py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                {/* Logo & Description */}
                <div className="space-y-5">
                    <img src={logo} alt="logo" className='h-12' />
                    <p className="text-sm leading-relaxed">
                        Unveiling stories that intrigue and inspire, our magazine company offers a curated blend of captivating content. Immerse yourself in a world of knowledge and creativity with every page turn.
                    </p>
                    <p className="text-xs text-gray-300">© 2022-2026 GUTENMATE THEME. ALL RIGHTS RESERVED.</p>
                </div>

                {/* About Links */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">About</h4>
                    <div className="flex flex-col gap-2 text-sm">
                        {headerList.map((list, index) => (
                            <Link to={list.link} key={index} className="hover:underline">
                                {list.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Newsletter */}
                <div className="bg-[#0b1d36] text-white p-6 rounded-xl">
                    <h4 className="text-2xl font-semibold mb-4">Newsletter</h4>

                    <div className="flex items-center bg-[#d9d9d9] rounded-full px-4 py-2 mb-4">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="bg-transparent outline-none flex-grow text-black placeholder:text-gray-600 text-sm"
                        />
                        <button>
                            <FaPaperPlane className="text-black text-lg" />
                        </button>
                    </div>

                    <label className="flex items-start gap-2 text-xs">
                        <input
                            type="checkbox"
                            className="mt-1 accent-white"
                        />
                        <span>
                            I consent to receive newsletter via email. For further information, please review our{" "}
                            <a href="#" className="underline">
                                Privacy Policy
                            </a>.
                        </span>
                    </label>
                </div>
            </div>

            <div className="mt-10 flex flex-col items-center text-center gap-4">
                <h4 className="text-xl font-semibold">Follow Us</h4>
                <div className="flex gap-6">
                    <img src={instra} alt="Instagram" className="w-6 h-6" />
                    <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
                    <img src={facebook} alt="Facebook" className="w-6 h-6" />
                    <img src={x} alt="Twitter/X" className="w-6 h-6" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
