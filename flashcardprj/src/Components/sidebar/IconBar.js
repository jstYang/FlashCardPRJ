import { RiHome4Line } from "react-icons/ri";
import { SlPlus } from "react-icons/sl";
import { TfiAlarmClock } from "react-icons/tfi";
import { Link } from "react-router-dom";

export default function IconBar({ setQuizMode, setAddQuestionsView }) {
  return (
    <div className="sidebar-icon-bar">
      
  
      <Link to={"/"} style={{ textDecoration:"none", color: "white"}}><RiHome4Line className="sidebar-icon"/></Link>

      <Link to={"/main"} style={{ textDecoration: "none", color: "white" }}> <SlPlus className="sidebar-icon" onClick={() => {
                setQuizMode(false);
                setAddQuestionsView(false);
            }} /> </Link>
        
      <Link to={"/timer"} style= {{textDecoration:"none", color: "white"}}><TfiAlarmClock className="sidebar-icon" />  </Link>

         
      
     
      
      
      
    </div>
  );
}
