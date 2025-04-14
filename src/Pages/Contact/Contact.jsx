import { useState } from 'react';
import Class from './Contact.module.css'
import Swal from 'sweetalert2'
export default function Contact(){
  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [message , setMessage] = useState('');
  console.log("Name: " + name);
  console.log("email: " + email);
  console.log("message: " + message);
    const onSubmit = async (event) => {
      if(name == '' || email == '' || message == ''){
        return;
      }
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
                   <p style={{fontWeight:'300'}}><strong style={{fontWeight:'900'}}>Email:</strong> hakimwael001@hotmail.com</p>
                   <p style={{fontWeight:'300'}}><strong style={{fontWeight:'900'}}>Phone:</strong> +961 81969483</p>
                   <form  className={`${Class.inputsDiv}`} onSubmit={onSubmit}>
                        <input placeholder='Name' type='text' name='name' value={name} onChange={(event)=>{setName(event.target.value)}}/>
                        <input placeholder='Email' type='email' name='email' value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
                        <textarea placeholder='Message' name='message' value={message} onChange={(event)=>{setMessage(event.target.value)}}/>
                        <button style={{marginTop:'2rem', padding:'1rem', paddingRight:'2rem', paddingLeft:'2rem', cursor:'pointer' , width:'fit-content'}} type='submit'>Send Message</button>
                   </form>
                  
               </div>
    )
}