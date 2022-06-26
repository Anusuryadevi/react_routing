
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Contact from "./Contact";
import About from './About';
import List from "./List";
import NavBar from './NavBar';
import Appfooter from './Appfooter';
import FeedBack from "./FeedBack";
import Item from "./Item";
const appbody = () => {

    return <>
    <Router>
    <NavBar></NavBar>
    <Routes>
    <Route path='/' exact element={<About />} />
    <Route path='/list' exact element={<List />}  />
    <Route path='/list/:id' element={<Item/>} />
    <Route path='/about' element={<About />}  />
    <Route path='/contact' element={<Contact />} />
    <Route path='/feedback' element={<FeedBack />} />
    </Routes>
    <Appfooter></Appfooter>
    </Router>
    </>

}

export default appbody;