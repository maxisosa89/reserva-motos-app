import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { suma } from "../../actions";
import styles from './Home.css'
import Navbar from "../Navbar/Navbar";

export default function Home(){
    const dispatch = useDispatch();
    const [data, setData] = useState(useSelector((state) => state.data));
    const hours = Object.keys(data).sort()

    useEffect( () => {
        dispatch(suma(data))
        hours?.map(e => {
            if (data[e] === 8) { 
                document.getElementById("lib"+e).disabled = true
                document.getElementById(e).className = "noColor"
            } else {
                document.getElementById("lib"+e).disabled = false
            }
            if (data[e] === 0) { 
                document.getElementById("res"+e).disabled = true
                document.getElementById(e).className = "redColor"
            } else {
                document.getElementById("res"+e).disabled = false
            }
            if (data[e] > 0 && data[e] < 8) {
                document.getElementById(e).className = "greenColor"
            }
        })
    }, [data])

    function handleRes(e) {
        setData({
            ...data,
            [e]: data[e] - 1
        })
    }

    function handleLib(e) {
        
        setData({
            ...data,
            [e]: data[e] + 1
        })
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr className="table-primary">
                                <th>Hora</th>
                                <th>Reservar moto</th>
                                <th>Liberar moto</th>
                                <th>Motos disponibles</th>
                            </tr>
                            {
                                hours?.map((e) => (
                                    <tr id={e} key={e}>
                                        <td>{e[0]+e[1]}:{e[2]+e[3]}</td>
                                        <td><button onClick={() => handleRes(e)} id={"res"+e} className="btn btn-primary">Reservar</button></td>                                
                                        <td><button onClick={() => handleLib(e)} id={"lib"+e} className="btn btn-secondary">Liberar</button></td>
                                        <td>{data[e]}</td>
                                    </tr>
                                    
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}