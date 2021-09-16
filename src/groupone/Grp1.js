 import React, {useState} from "react";
import "./Grp1.css"

const Grp1 = () => {
    const [statement] = useState
    ([ "I am great",       
                                                  "i am wonderful",       
                                                 "The world is sphere",
                                                  "Summer is nice"]);

    const [pages, setPages] = useState (1)

    const handleUpClick = () => {
        setPages(pages + 1)
    }
    const handleDownClick = () => {
        if(pages < 1) {
        setPages(statement.length);
        
        }else {
        setPages (pages -1)
    }
 };

    return (
        <div className ="body">
           <div className = "container"> 
            <div className = "buttons">
                <div className = "buttons button"></div>
            <div>{statement[pages % statement.length]}</div>
            <button onClick = {handleUpClick}>Next</button>
            <button onClick = {handleDownClick}>Prev</button>
        </div>
        </div>
        </div>
    
    )
};

export default Grp1;