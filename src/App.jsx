import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [text, settext] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [hoh, sethoh] = useState('')

  const handletextChange = (e) => {
    settext(e.target.value);
};
  const handleemailChange = (e) => {
    e.preventDefault();
    setemail(e.target.value);
};
  const handlepasswordChange = (e) => {
    e.preventDefault();
    setpassword(e.target.value);
};
  
const ohh= () => {
  sethoh('Please enter valid credentials');
};


   const check = () => {
    ohh()
    e.preventDefault();
//     if (text==='') { 
//       ohh()
//     } else {
//       sethoh('')
//     }
   };

  return (
    <>
    <div className='inputField'>

      <input type="text" placeholder='name' value={text} onChange={handletextChange} />
      <span>{!text?hoh:''}</span>

      <input type="text" placeholder='email' value={email} onChange={handleemailChange} />
      <span>{!email?hoh:''}</span>

      <input type="text" placeholder='password' value={password} onChange={handlepasswordChange}/>
      <span>{!password?hoh:''}</span>

      <button onClick={check}>Submit</button>
    </div>
    </>
  )
}

export default App