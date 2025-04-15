import { Outlet } from "react-router"
import Header from "../Header/header"
import Footer from "../Footer/Footer"
import Class from "./Layout.module.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import {useState} from 'react';


export default function Layout(){
    const [navBarState , setNavBarState] = useState(true);

   function handleBtnClick(){
    setNavBarState(prevState => !prevState);
    }


    return(
        <div className={Class.layoutComponent}> 
            <Header isVisible={navBarState} onBtnClick={handleBtnClick}/>

            <div className={Class.bodyContainer}>
            <Outlet />
            {navBarState ?
            <GiHamburgerMenu cursor='pointer' color="white" size={40} className={`${Class.burgerMenu}`} onClick={()=> setNavBarState(prevState => !prevState)} />:
            <IoClose cursor='pointer' color="white" size={45} className={`${Class.burgerMenu}`} onClick={()=> setNavBarState(prevState => !prevState)} />
            }
            </div>
            
        </div>
    )
} 