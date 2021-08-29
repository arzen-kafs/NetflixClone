import React ,{useEffect,useState}from 'react'
import './Navbar.css'
import web from '../src/images/img0.jpg'
import web2 from '../src/images/img1.jpg'

function Navbar() {
    const [show, handleShow] = useState(false);
    //this function is used to fixed the navbar at the top
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);
            }
            else{
                handleShow(false);
            }
        });
        //Remove the useEffect is fired again remove the Listener otherwise there will be many listener
        return ()=>{
            window.removeEventListener("scroll");
        }
    }, [])
    return (
        <div className={`nav ${show ? "nav_black":""}`}>
            <img src={web} alt="NetFlixLogo" className="nav_logo"/>
            <img src={web2} alt="Netflix Logo" className="nav_avatar"/>
            
        </div>
    )
}

export default Navbar
