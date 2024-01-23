import { RiHome4Line } from "react-icons/ri";
import { HiMiniUserCircle } from "react-icons/hi2";
import { SlPlus } from "react-icons/sl";
import { TfiAlarmClock } from "react-icons/tfi";
import { Link } from "react-router-dom";

export default function IconBar({ setQuizMode, setAddQuestionsView }) {
  return (
    <div className="sidebar-icon-bar">
      
  
      <Link to={"/"} style={{ textDecoration:"none", color: "white"}}><RiHome4Line className="sidebar-icon"/></Link>

          <SlPlus className="sidebar-icon" onClick={() => {
                setQuizMode(false);
                setAddQuestionsView(false);
            }} /> 
        
      <Link to={"/timer"} style= {{textDecoration:"none", color: "white"}}><TfiAlarmClock className="sidebar-icon" />  </Link>

      <Link to={"/user"} style= {{textDecoration:"none", color: "white"}}><HiMiniUserCircle className="sidebar-icon" /> </Link>
         
      
     
      
      
      
    </div>
  );
}
