import Class from './Home.module.css'
import image from '../../assets/react.svg';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { FaXTwitter,FaWhatsapp } from "react-icons/fa6";
export default function Home(){

    return(
        <div className={`${Class.indexHomeContainer}`}>
        <div className={`${Class.mainHomeContainer}`}>
            <div className={`${Class.homeImageContainer}`}></div>
            <div className={`${Class.infoHomePage}`}> 
                <div className={`${Class.titleSkillsTab}`}>
            <h1 className={`${Class.nameTitle}`}>wael hakim</h1>
            <TypeAnimation
             sequence={[
                 // Same substring at the start will only be typed out once, 
                    'Freelancing',
                         1000,
                     'Programing',
                     1000,
                        'Web development',
                     1000,
             'Full Stack',
             1000,
             'App development',
                1000,
                'React Native',
             1000,
                'Android',
                 1000
                ]}
                 wrapper="span"
                speed={40}
                style={{ fontSize: '1.3rem', display: 'inline-block',fontWeight:'500'}}
                repeat={Infinity}
                />
            </div>
        <div style={{color:'#bbbbbb' , width:'85%'}}>
            <p style={{marginBottom:'0.6rem'}}>Creative Web Developer based in Beirut and happy to travel all over the world.</p>
        </div>
        <div  className={`${Class.linksContainer}`}>
                <a href='https://github.com/waelhakim' target='_blank' className={`${Class.linkItem1}`}><FaGithub size={23}/></a>
                <a href='https://wa.me/+96181969483'className={`${Class.linkItem2}`}target='_blank'><FaWhatsapp  size={23}/></a>
                <a href='https://linkedin.com/in/wael-hakim-17763b189'className={`${Class.linkItem3}`}target='_blank'><FaLinkedin size={23}/></a>
            </div>
            </div>

        </div>
        <div className={`${Class.homeFooter}`}>

        </div>
        </div>
    )
}