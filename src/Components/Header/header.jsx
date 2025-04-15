
import { NavLink } from "react-router"
import Class from "./header.module.css"
import { IoHomeSharp } from "react-icons/io5";
import { IoMdSettings,IoIosMailOpen } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import {useState , useEffect} from 'react';
import { IoArrowBackCircleOutline } from "react-icons/io5";
export default function Header(props){
    const [width, setWidth] = useState(window.innerWidth);
 
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
      const headerStyle = {

        display:width <= 1200 && props.isVisible ? "none" : "flex",
        transitionDuration:"500ms"
    }
    return(
        <div style={{position:'fixed' , zIndex:10}}>
        <nav className={Class.headerClass} style={headerStyle}>
            <NavLink to="/" ><h1 style={{color:'white',letterSpacing:'0.5rem', fontWeight:'1200',fontSize:'1.8rem'}}>BEIRUT</h1></NavLink>
            <NavLink to="/"><div className={`${Class.navLinkItems}`}><IoHomeSharp color="white"/> Home </div></NavLink>
            <NavLink to="/about"><div className={`${Class.navLinkItems}`}><FaUser color="white"/> About </div></NavLink>
            <NavLink to="/service"><div className={`${Class.navLinkItems}`}><IoMdSettings color="white"/> Service </div></NavLink>
            <NavLink to="/portfolio"><div className={`${Class.navLinkItems}`}><MdBusinessCenter color="white"/> Portfolio </div></NavLink>
            <NavLink to="/contact"><div className={`${Class.navLinkItems}`}><IoIosMailOpen color="white"/> Contact </div></NavLink>
            <p className={Class.settingClass} style={{color:'#bbbbbb' , fontStyle:'italic', fontSize:'0.938rem', fontWeight:'400', marginTop:'3rem'} }>&copy; { new Date().getFullYear()} Beirut <br/>Created by Wael Hakim</p>
            {width <= 1200 &&
            <IoArrowBackCircleOutline size={40} color="white" style={{alignSelf:'end',justifySelf:'end'}} onClick={props.onBtnClick}/>
            }
        </nav>

         </div>
    )
}