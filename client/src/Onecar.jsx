import React, { useState } from 'react';
import axios from 'axios';

const Onecar = ({ el ,refresh,setrefresh }) => {
    const [show,setshow]=useState(true)
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [num_model, setNumModel] = useState("");
    const [description, setDescription] = useState("");
    const [categorie, setCategorie] = useState("");
    const [avg_price, setAvgPrice] = useState("");
    const [avg_horsepower, setAvgHorsepower] = useState("");




    const remove = (id) => {
        axios.delete(`http://localhost:8080/car/delete/${id}`)
            .then((response) => {
                setrefresh(!refresh)
                console.log(response);
            })
            .catch((err) => {
                console.error(err);
            });
    };
    const updateCar = (id) => {
        axios.put(`http://localhost:8080/car/update/${id}`, {
            name: name,
            imageUrl: imageUrl,
            num_model: num_model,
            description: description,
            categorie: categorie,
            avg_price: avg_price,
            avg_horsepower: avg_horsepower
        })
        .then((response) => {
            setrefresh(!refresh)
            console.log(response);

           
        })
        .catch((err) => {
            console.error(err);
        });
    };



    return (
        <div>
            

            <button onClick={() => remove(el.id)}>Delete</button>
            <button onClick={()=>{setshow(!show)}}>update</button>
            {!show && 
            <div>
                <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input placeholder="Image URL"  onChange={(e) => setImageUrl(e.target.value)} />
            <input placeholder="Model Number"  onChange={(e) => setNumModel(e.target.value)} />
            <input placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
            <input placeholder="Category"  onChange={(e) => setCategorie(e.target.value)} />
            <input placeholder="Average Price"  onChange={(e) => setAvgPrice(e.target.value)} />
            <input placeholder="Average Horsepower" onChange={(e) => setAvgHorsepower(e.target.value)} />
            <button onClick={() => { updateCar(el.id); setshow(true); }}>Submit</button>
                </div>}
        </div>
    );
};

export default Onecar;