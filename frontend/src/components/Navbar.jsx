import '../styles/Navbar.css'
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
    function myFunction() {
        var x = document.getElementById("topNav");
        if (x.className === "nav-bar") {
          x.className += " responsive";
        } else {
          x.className = "topNav";
        }
      }
    return ( <>
    <div>
       
            <div>
                <div className="logo">Elevate Academy</div>
                <nav className="nav-bar" id='topNav'>
                <a className="nav-items active">Home</a>
                    <a className="nav-items">Courses</a>
                    <a className="nav-items">About</a>
                    <a className="nav-items">Contact</a>
                    <button className="nav-items get-started-btn">Get Started</button>
                </nav>
                <a className= "hamburger"><FiMenu  /></a>
                <nav className='menu'>
                <a className="active">Home</a>
                    <a >Courses</a>
                    <a >About</a>
                    <a >Contact</a>
                    <button >Get Started</button>
                </nav>
            </div>
        
    </div>
    </>
    )
}
export default Navbar