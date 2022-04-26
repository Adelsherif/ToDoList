import './tasks.css';
import React,{Component} from 'react';
import { FaCaretRight, FaTimes } from 'react-icons/fa';



class Tasks extends Component{
  
 render(){
    const tasks=this.props.mainstate;
    var x=0;
    const length=tasks.length;
    const Mapper = length !== 0 ? ( tasks.map(task => {
        x++;
           return(
                   <div className='task' key={task.id}>
                       <div className='content' >
                           <div className='inner'>
                            <FaCaretRight className='icon1' />
                            <div className='innertext'>{task.task}</div>
                            </div>
                            <FaTimes className='icon2' onClick={() => this.props.deletfunction(task.id)}/>
                            </div>
                   </div>
                )
    })) :(
    <p className='noitem'>No Item Here</p>
    )
    
    return(
        <div>
            <div className='text'>
                <div>
                    <p>{x} Item left</p>
                    <h2>DO</h2>
                    <p onClick={this.props.deletallfunction}>Clear All</p>
                </div>
            </div>
            {Mapper}
            </div>


            
      )
  }
}
export default Tasks;