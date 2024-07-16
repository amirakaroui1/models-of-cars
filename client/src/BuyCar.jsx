import React, { useState } from 'react';
import axios from 'axios';


const BuyCar = () => {
 const[name, setname] = useState('')
 const[email,setemail]=useState('')
const[adress,setadress]=useState('')
const[nameofcar,setnameofcar]=useState('')
 
    
 
const buyingcar =()=>{
    axios.post("http://localhost:8080/ad/buy", {
        name: name,
        email: email,
        adress: adress,
        nameofcar: nameofcar
    })
    .then((response) => {
        console.log(response);
    })
    .catch((err)=>{
        console.error(err);
    })
}
  

  

  return (
    <div>
      <h1>Buy Car</h1>
      <input placeholder="name" onChange={(e)=>setname(e.target.value)} />
      <input placeholder="email" onChange={(e)=>setemail(e.target.value)} />
      <input placeholder="adress" onChange={(e)=>setadress(e.target.value)} />
      <input placeholder="nameofcar" onChange={(e)=>setnameofcar(e.target.value)} />
      <button onClick={()=>buyingcar()}>buy car</button>

    </div>
  );
}

export default BuyCar;