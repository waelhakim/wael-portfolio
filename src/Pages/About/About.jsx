import Class from './About.module.css'
export default function About(){
    return(
        <div className={Class.aobutMainContainer}>
            <div style={{color:'#999' , backgroundColor:'hsla(0, 0%, 100%, .08)' , width:'4rem',height:'2.375rem',fontSize:'0.75rem', fontWeight:'600',display:'flex', justifyContent:'center', alignItems:'center'}}>ABOUT</div>
            <h1 style={{fontSize:'1.875rem',fontWeight:'1000',letterSpacing:'0.1rem'}}>About Me</h1>
            <img/>
            <h3 style={{fontSize:'1.375rem' , marginBottom:'5px'}}>Wael Hakim</h3>
            <p style={{color:'#BBBBBB',fontSize:'0.938rem',marginTop:'5px', marginBottom:'27px'}}>Web Developer</p>
            <hr style={{borderBottom:'0.1px rgba(223, 223, 223, 0.39)', marginBottom:'27px'}}/>
            <p style={{color:'#bbbbbb' ,fontSize:'0.938rem',lineHeight:'2rem', marginBottom:'2rem' ,fontWeight:'400'}}>
            Hi, my name is Wael Hakim and I began using Html , Css and JavaScript when it first began.
             I’ve spent most of my waking hours for the last 3 years designing, programming and operating React sites.<br/>
            One of my specialties is taking an idea from scratch and creating a full-fledged platform. I go beyond to produce sites with a unique, outstanding, contemporary look-and-feel. With extensive knowledge of web mechanics,
             I’m able to optimize complex integrations to require little-to-no maintenance while running on their own for years.
            </p>
            <hr style={{borderBottom:'0.1px #292929'}}/>
            <div className={`${Class.aboutInfoTab}`}>
                <div className={`${Class.aboutInfodiv1}`}>
                    <div className={`${Class.infoTitleContainer}`}>
                    <strong>Age:</strong>
                    <strong>Adress:</strong>
                    <strong>Email:</strong>
                    <strong>Phone:</strong>
                    </div>
                    <div  className={`${Class.infoTitleContainer}`}>
                    <p>23</p>
                    <p>Beirut - Lebanon</p>
                    <p>hakimwael001@hotmail.com</p>
                    <p>+961 81 969 483</p>
                    </div>
                </div>
                <div className={`${Class.aboutInfodiv2}`}>
                    <div className={`${Class.infoTitleContainer}`}>
                    <strong>Study:</strong>
                    <strong>Degree:</strong>
                    <strong>Interest:</strong>
                    <strong>Freelance:</strong>
                    </div>
                    <div  className={`${Class.infoTitleContainer}`}>
                    <p>Computer Science</p>
                    <p>Bachelor </p>
                    <p>Playing Football</p>
                    <p>Available</p>
                    </div>
                </div>
                <div className={`${Class.aboutInfodiv}`}>

                </div>
            </div>
            <hr style={{borderBottom:'0.1px rgba(223, 223, 223, 0.39)'}}/>
            <a href='CV(wael hakim).pdf' download>
            <button style={{marginTop:'2rem', padding:'1rem', paddingRight:'2rem', paddingLeft:'2rem', cursor:'pointer'}}>Download CV</button>
            </a>
            <div className={`${Class.skillsTab}`}>
                <div>
                    <h2>Programing Skills</h2>
                    <div className={`${Class.individualLine}`}>
                        <p>JavaScript</p>
                        <p>95%</p>
                    </div>
                    <div style={{width:'100%', height:'2px', backgroundColor:'#444444', position: 'relative'}}>
                        <div style={{width:'95%', height:'2px', backgroundColor:'#7b7b7b', position: 'absolute',zIndex:'5'}}></div>
                    </div>
                    <div className={`${Class.individualLine}`}>
                        <p>HTML CSS Jquery</p>
                        <p>95%</p>
                    </div>
                    <div style={{width:'100%', height:'2px', backgroundColor:'#444444', position: 'relative'}}>
                        <div style={{width:'95%', height:'2px', backgroundColor:'#7b7b7b', position: 'absolute',zIndex:'5'}}></div>
                    </div>
                    <div className={`${Class.individualLine}`}>
                        <p>Java</p>
                        <p>90%</p>
                    </div>
                    <div style={{width:'100%', height:'2px', backgroundColor:'#444444', position: 'relative'}}>
                        <div style={{width:'85%', height:'2px', backgroundColor:'#7b7b7b', position: 'absolute',zIndex:'5'}}></div>
                    </div>
                    <div className={`${Class.individualLine}`}>
                        <p>C++</p>
                        <p>80%</p>
                    </div>
                    <div style={{width:'100%', height:'2px', backgroundColor:'#444444', position: 'relative'}}>
                        <div style={{width:'80%', height:'2px', backgroundColor:'#7b7b7b', position: 'absolute',zIndex:'5'}}></div>
                    </div>
                </div>
                <div>
                <h2>Language Skills</h2>
                    <div className={`${Class.individualLine}`}>
                        <p>English</p>
                        <p>95%</p>
                    </div>
                    <div style={{width:'100%', height:'2px', backgroundColor:'#444444', position: 'relative'}}>
                        <div style={{width:'95%', height:'2px', backgroundColor:'#7b7b7b', position: 'absolute',zIndex:'5'}}></div>
                    </div>
                    <div className={`${Class.individualLine}`}>
                        <p>Arabic</p>
                        <p>95%</p>
                    </div>
                    <div style={{width:'100%', height:'2px', backgroundColor:'#444444', position: 'relative'}}>
                        <div style={{width:'95%', height:'2px', backgroundColor:'#7b7b7b', position: 'absolute',zIndex:'5'}}></div>
                    </div>
                    <div className={`${Class.individualLine}`}>
                        <p>French</p>
                        <p>40%</p>
                    </div>
                    <div style={{width:'100%', height:'2px', backgroundColor:'#444444', position: 'relative'}}>
                        <div style={{width:'40%', height:'2px', backgroundColor:'#7b7b7b', position: 'absolute',zIndex:'5'}}></div>
                    </div>
                </div>
            </div>
            <div className={`${Class.knowalgeTab}`}>

            </div>
            <div className={`${Class.educationTab}`}>

            </div>

        </div>
    )
}