import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Header = () => {

    const headerList = [
        {name: "Home", link: ""},
        {name: "Programmes", link: ""},
        {name: "Services", link: ""},
        {name: "Blog", link: ""},
        {name: "About", link: ""},
        {name: "Contact", link: ""},
        {name: "Login", link: ""},
    ]
    return (
        <header className="bg-white shadow p-4 flex items-center justify-between">
            <img src={logo} alt="logo" className='h-12'/>
            <nav className="space-x-5 text-gray-700 px-5">
                {headerList.map((list, index) => (
                   <Link to={list.link} key={index}>{list.name}</Link> 
                ))}
            </nav>
        </header>
    )

}

export default Header