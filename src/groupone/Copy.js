import React, {useState} from 'react';
import './Grp1.css'

const Grp1 = () => {
    const [statement, setStatement] = useState
         setStatement (statement)
        }
             (["Today is Sunny", 
    " i love Diamonds",
     "what can we do",
    "im having a great day",
    "funny how "])

    const [pages, setPages] = useState (0)
    
    const handleUpClick= () =>{
        console.log("the next");
        setPages (pages + 1)
    }

    const handleDownClick = () =>{
        if(pages < 1) {
        setPages(statement.length);

        }else {
        setPages (pages - 1)
    }
};

body { 
    background:red
}

.myConntainer{
    backgrnound-color:salmon;
    height: 50vh;
    displayb: flex;
    justify-content: center;
    align-items: center;
    

}

    return (
        <div className= "myContainer">
         <div>
             <div>{statement[pages % statement.length]}</div>
            <button onClick = {handleUpClick}>Next</button>
            <button onClick = {handleDownClick}>Prev</button>
            
        </div>
        </div>
    )
}

export default Grp111111111111
