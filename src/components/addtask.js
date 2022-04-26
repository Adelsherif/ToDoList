import './addtask.css';
import React , {Component} from 'react';
import { FaRegClipboard } from "react-icons/fa";


class Addtask extends Component{
    state={
        task:''
    }
     inputtext = (e)=>{
        this.setState({
            id:Date.now(),
            task:e.target.value
        })
     }
     submit = (e) =>{
         e.preventDefault();
         // eslint-disable-next-line no-unused-expressions
         e.target.text.value !== '' ? this.props.sender(this.state) : false ;
          this.setState({
              task:""
          })
     }
    
  render(){
    return(
      <div>
          <div className='inputs'>
          <div>
              <form onSubmit={this.submit}>
                  <FaRegClipboard  className='icon1'/>
                  <input type="text" placeholder='Create Your Task...' onChange={this.inputtext} id="text" value={this.state.task}/>
              </form>
          </div>
          </div>
      </div>
    )
  }
}

export default Addtask;