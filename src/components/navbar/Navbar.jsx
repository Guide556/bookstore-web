import React, {useState} from "react";
import "./NavbarStyle.css";
import { AiOutlineMenu} from "react-icons/ai"
import { AiOutlineSearch} from "react-icons/ai"
import { AiFillApple } from "react-icons/ai"


function Navbar() {

  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <div className="Navbar">
        <div className="leftSide">
          <div className="links" id={showLinks ? "hidden" : ""}>
            <a href="/"><AiFillApple style={{ color: "white" }}/></a>
            <a href="/home">Home</a>
            <a href="/feedback">Feedback</a>
            <a href="/about_us">About us</a>
            <a href="contract">Contract</a>
          </div>

          <button onClick={() => setShowLinks(!showLinks)}><AiOutlineMenu/></button>
        </div>

        <div className="rightSide">
          <input type="text" placeholder="Search..."/>
          <button><AiOutlineSearch /></button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
