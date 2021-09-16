import React from 'react'
// import AboutMe from "./Components/AboutMe";
//import TodayClass from './today/TodayClass';
//import "antd/dist/antd.css"
import GameScreen from './Components/SimpleGame/GameScreen.js';
//import Grp1 from './groupone/Grp1';

const App = () => {
  return (
    <div>
      <div>
         <GameScreen/>
       {/*<AboutMe/
        <TodayClass/>        
        <Grp1 />*/ }
      </div>
    </div>
  );
};
export default App;