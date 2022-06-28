import { Link } from "react-router-dom";
const NavBar = () => {
return <>
<nav className="nav">
            <ul >
                <Link to='/list'>
                    <li className="nav-link">List</li>
                </Link>
                <Link to='/about'>
                    <li className="nav-link">About</li>
                </Link>
                <Link to='/contact'>
                    <li className="nav-link">Contact</li>
                </Link>
                <Link to='/feedback'>
                    <li className="nav-link">FeedBack</li>
                </Link>
                </ul>
        </nav>
</>
}
export default NavBar;