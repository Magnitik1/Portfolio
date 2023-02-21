import './bar.css';
import { Link } from "react-router-dom";
// import React, {useState} from 'react';

function Bar(props) {
  // const [info, setInfo]=useState(1);
  return (
    <div className="Bar">
      <hr className='mybar'/>
      {props.info===1 ?
      <Link to="/Projects" onClick={()=>{props.setInfo(2)}} style={{textDecoration: 'none'}}>
          <div className='projects'>Projects</div>
      </Link>:
      <Link to="/" onClick={()=>{props.setInfo(1)}} style={{textDecoration: 'none'}}>
          <div className='projects'>About Me</div>
      </Link>}

      <div className='contact'>Contact me
      <div className='myinfo'>
        <a href="mailto:sukhomudoleksii@gmail.com" className='sized mynone'>sukhomudoleksii@gmail.com</a><br/><br/>
        <a href="tel:+48578203394" className='mynone'>(+48)578203394</a><br/><br/>
        <span className='mynone'>Telegram: </span><a href="https://telegram.me/oleksiy5" className='mynone'>@oleksiy5</a>
      </div>
      </div>
      
    </div>
  );
}

export default Bar;
