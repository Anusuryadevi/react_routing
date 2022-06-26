import { Link } from "react-router-dom";
const NavBar = () => {
return <>
<nav className="nav">
            <ul className="nav-link">
                <Link to='/list'>
                    <li>List</li>
                </Link>
                <Link to='/about'>
                    <li>About</li>
                </Link>
                <Link to='/contact'>
                    <li>Contact</li>
                </Link>
                <Link to='/feedback'>
                    <li>FeedBack</li>
                </Link>
                </ul>
        </nav>
</>
}
export default NavBar;