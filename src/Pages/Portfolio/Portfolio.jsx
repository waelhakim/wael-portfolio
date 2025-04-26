import Class from './Portfolio.module.css'
import happyFacesImg from "../../assets/happyFacesImg.jpg"
export default function Portfolio(){
    return(
        <div className={`${Class.portfolioIndexDiv}`}>
            <div style={{color:'#999' , backgroundColor:'hsla(0, 0%, 100%, .08)' , width:'5rem',height:'2.375rem',fontSize:'0.7rem', fontWeight:'500',display:'flex', justifyContent:'center', alignItems:'center'}} >PORTFOLIO</div>
            <h1>My Portfolio</h1>
            <div style={{marginTop:'5rem'}}>
                <div className={`${Class.portLink1}`}><a href='https://waelhakim.github.io/VanNomadsLB/'style={{textDecoration:'none'}} target="_blank"><h3>#VanNomads</h3></a></div>
                <div className={`${Class.portLink1}`} style={{ backgroundImage: `url(${happyFacesImg})` }} ><a href='#/portfolio'style={{textDecoration:'none'}} ><h3>Happy Faces :)</h3></a></div>
                
            </div>
        </div>
    )
}