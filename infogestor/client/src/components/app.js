import React, {useState, useEffect} from 'react';
import {fetchData} from '../services/api';
import 'styles.css';
const app=()=>{
    const [data, setData]=useState([]);
    useEffect(()=>{
        fetchData()
            .then(responseData=>setData(responseData))
            .catch(error=>console.error(error));
    }, []);
    return (
        <div>
            <h1>InfoGestor</h1>
            <ul>
                {data.map(item=>(
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default app;