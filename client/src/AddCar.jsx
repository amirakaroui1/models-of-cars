import React, { useState } from "react";
import axios from 'axios';


const AddCar = () => {
  const[name, setname] = useState('')
const[imageUrl,setimageUrl]=useState('')
const[num_model,setnum_model]=useState('')
const[description,setdesc]=useState('')
const[categorie,setcategorie]=useState('')
const[avg_price,setavg_price]=useState('')
const[avg_horsepower,setavg_horsepower]=useState('')

   const added =()=>{
    axios.post("http://localhost:8080/car/add",{
        name:name,
        imageUrl:imageUrl,
        num_model:num_model,
        description:description,
        categorie:categorie,
       avg_price:avg_price,
       avg_horsepower:avg_horsepower
    })
    .then((ahaya)=>{console.log(ahaya)
    })
    .catch((err)=>{
        console.error(err);
    })
   }


  return (
    <div class="card">
        <div class="card-content">
       <input placeholder="name" onChange={(e)=>setname(e.target.value)} />
       <input placeholder="imageUrl" onChange={(e)=>setimageUrl(e.target.value)} />
       <input placeholder="num_model" onChange={(e)=>setnum_model(e.target.value)}/>
       <input placeholder="description" onChange={(e)=>setdesc(e.target.value)}/>
       <input placeholder="categorie" onChange={(e)=>setcategorie(e.target.value)}/>
      <input placeholder="avg_price" onChange={(e)=>setavg_price(e.target.value)}/>
      <input placeholder="avg_horsepower" onChange={(e)=>setavg_horsepower(e.target.value)}/>
      <button onClick={()=>added()}>Add Car</button>
    </div>
    </div>
  );
}

export default AddCar;