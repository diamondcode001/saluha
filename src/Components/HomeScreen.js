import React, {useState} from 'react';
import {Input} from "antd";
import {BiLeftArrow, BiRightArrow} from "react-icons/bi";
import "./HomeScreen.css"

const HomeScreen = () => {
    const [statement1, setStatement1] = useState([
       "Roses are violet",
       "Pink is black",
       "Grace is sufficient",
       "I am Growth",
        "The world is spherical",
    ]);
    const [page, setPage] = useState(0)

    const nextState = () => {
        setPage(page + 1)
    }

    const prevState = () => {
        if (page < 0) {
            setPage (statement1.length);
        } else {
        setPage(page - 1)
        }
    }

    return (
        <div className = "container">
            <div className= "input">
                <input placeholder='Enter Your Name'/>
                <button className="inputButton" 
                type="primary" danger> 
                Add
                </ button>
            </div>
            <div className = "container_1">
                <div className = "button">
                <BiLeftArrow onClick ={prevState} />
                </div>
            <div>{statement1 [page % statement1.length]
            }</div>
            <div className = "button">
            <BiRightArrow onClick={nextState}/>
            </div>
            </div>
        </div>
    )
};

export default HomeScreen;
 