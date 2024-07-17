import React from 'react';
import axios from 'axios';

const Onecar = ({ el ,refresh,setrefresh }) => {
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

    return (
        <div>
            <button onClick={() => remove(el.id)}>Delete</button>
        </div>
    );
};

export default Onecar;