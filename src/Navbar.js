import { useState } from 'react';
import ReorderIcon from '@mui/icons-material/Reorder'
import SearchIcon from '@mui/icons-material/Search'

function Navbar() {
  const [showLinks, setshowLinks] = useState(false);

  const Linkctrl = () => {
    setshowLinks(!showLinks);
  }

    return (
      <div className="Navbar">

      <div className="leftSide">
        <div className="links" id={showLinks ? "show" : ""}>
            <a href="/home">Home</a>
            <a href="/feedback">Feedback</a>
            <a href="/aboutUs">About Us</a>
            <a href="/contact">Contact</a>
        </div>

        <button className="menuButton" onClick={() => Linkctrl()}> < ReorderIcon/> </button>
      </div>

      

      <div className="rightSide">
        <input type="text" placeholder="search..." className="searchbar"/>
        <button className="searchButton"> < SearchIcon/> </button>
      </div>

        
      </div>
    );
  }
  
  export default Navbar;