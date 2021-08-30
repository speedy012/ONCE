import '../styles/Footer.css'

import React, {useState} from 'react'

function Footer() {
  const[newEmail,setNewEmail] = useState("")
  const[newData, setNewData] = useState([])
  
  const getEmail = (e) => {
    setNewEmail(e)
  }

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(newEmail).toLowerCase());
  }



  
  const sendEmail = async (e) => {
    e.preventDefault()
    // const proxyurl = "https://localhost:3000/";
    // const url = ''

   
      fetch('https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge', {
          method: 'POST',
          
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email: newEmail})
        }).then(res => res.json())
        .then(data => console.log(data))
        
  }

  return (
    <div className="footer">

      <h5>Sign up for our Newsletter</h5> 
      <form>
        <div className="form-group">
          <label htmlFor="email" />
          <input 
          type="text" 
          value={newEmail}
          onChange={e => getEmail(e.target.value)}/>
          <span className="placeholder">Email</span>
      </div>
      <button onClick={(e) => sendEmail(e)} type="submit">Submit</button>
      </form>
      <h6> © 2021 --- Sparta Plaesant - 
        <span>Instagram</span>
        <span>Facebook</span>
        <span>Twitter</span>
      </h6>
    </div>
  )
}

export default Footer
 