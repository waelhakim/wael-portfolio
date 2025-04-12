import SerInfo from "../../servicesInfo"
import Class from './Services.module.css'
export default function Service(){

    const mappedData = SerInfo.map(serItem =>{
        return(
            <div key={serItem.id}  className={`${Class.serviceContainer}`}>
                <div className={`${Class.serviceId}`}>{serItem.id}</div>
                <div className={`${Class.serviceName}`}>{serItem.name}</div>
                <div className={`${Class.serviceDescription}`}>{serItem.desc}</div>
            </div>
        )
    })
    return(
        <div className={`${Class.serviceIndex}`}>
            <div style={{fontSize:'0.75rem',backgroundColor:'#242424',width:'fit-content',paddingTop:'0.8rem',paddingBottom:'0.8rem',paddingLeft:'0.8rem',paddingRight:'0.8rem',color:'#999999',fontWeight:'600'}}>SERVICES</div>
            <h1>What I Do</h1>
            <div className={Class.mainServiceBodyContainer}>
                {mappedData}
            </div>
        </div>
    )
}