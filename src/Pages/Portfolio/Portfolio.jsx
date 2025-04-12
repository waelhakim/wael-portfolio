import Class from './Portfolio.module.css'

export default function Portfolio(){
    return(
        <div className={`${Class.portfolioIndexDiv}`}>
            <div style={{color:'#999' , backgroundColor:'hsla(0, 0%, 100%, .08)' , width:'5rem',height:'2.375rem',fontSize:'0.7rem', fontWeight:'500',display:'flex', justifyContent:'center', alignItems:'center'}} >PORTFOLIO</div>
            <h1>My Portfolio</h1>
            <div style={{marginTop:'5rem'}}>
                <div className={`${Class.portLink1}`}><h3>#VanNomads</h3></div>
                <div>HappyFaces {":)"}</div>
            </div>
        </div>
    )
}