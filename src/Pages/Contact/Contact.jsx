import Class from './Contact.module.css'
import Swal from 'sweetalert2'
export default function Contact(){
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "54c658ea-989f-46b5-9410-6ea9062edad5");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }

      };
    return(
               <div className={`${Class.contactIndexDiv}`}>
                   <div style={{color:'#999' , backgroundColor:'hsla(0, 0%, 100%, .08)' , width:'5rem',height:'2.375rem',fontSize:'0.7rem', fontWeight:'500',display:'flex', justifyContent:'center', alignItems:'center'}} >CONTACT</div>
                   <h1>Get in Touch</h1>
                   <form  className={`${Class.inputsDiv}`} onSubmit={onSubmit}>
                        <input placeholder='Name' type='text' name='name'/>
                        <input placeholder='Email' type='email' name='email'/>
                        <textarea placeholder='Message' name='message'/>
                        <button style={{marginTop:'2rem', padding:'1rem', paddingRight:'2rem', paddingLeft:'2rem', cursor:'pointer' , width:'fit-content'}} type='submit'>Send Message</button>
                   </form>
                  
               </div>
    )
}