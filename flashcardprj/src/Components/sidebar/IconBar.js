import { RiHome4Line } from "react-icons/ri";
import { HiMiniUserCircle } from "react-icons/hi2";
import { SlPlus } from "react-icons/sl";
import { TfiAlarmClock } from "react-icons/tfi";

export default function IconBar({ setQuizMode, setAddQuestionsView }) {
  return (

    
    <div className="sidebar-icon-bar">
   
       <RiHome4Line className="sidebar-icon" onclick={() => {
         setQuizMode(false);
          setAddQuestionsView(false);
      }} />

      <SlPlus className="sidebar-icon" onClick={() => {
          setQuizMode(false);
          setAddQuestionsView(false);
      }} />
  
      <TfiAlarmClock className="sidebar-icon" />
      <HiMiniUserCircle className="sidebar-icon" />
      
      
    </div>
  );
}
