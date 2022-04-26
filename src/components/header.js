import './header.css';
import {  FaStar } from "react-icons/fa";

const Header = () =>{
    return(
      <div>
            <div className='head'>
                <h1>TO<span>DO</span></h1>
                <div className='icons'>
                    <FaStar /> 
                </div>
            </div>
        </div>
    )
  }


export default Header;