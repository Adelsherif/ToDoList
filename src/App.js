import './App.css';
import React , {Component} from 'react';
import Header from './components/header';
import Addtask from './components/addtask';
import Tasks from './components/tasks';
import { FaCopyright } from 'react-icons/fa';



class App extends Component{
     state = {
       tasks : []
     }
handel = (task) =>{
    let tasks= this.state.tasks;
    tasks.push(task);
    this.setState({tasks:tasks});
    localStorage.setItem("tasks",JSON.stringify(this.state.tasks));
}
deletitem = (id) =>{
  let tasks=this.state.tasks.filter(task =>{
      return task.id !== id
  })
  this.setState({tasks:tasks})
  localStorage.setItem("tasks",JSON.stringify(tasks))
}
deletallitem = () =>{
  this.setState({
    tasks:[]
  })
}

  render(){
    if(!localStorage.getItem("tasks")){
      localStorage.setItem("tasks",JSON.stringify(this.state.tasks))
    }
    this.state.tasks = JSON.parse(localStorage.getItem("tasks"));
    return(
      <div>
        <Header />
        <div className='welcometext'>
         <h3>WELCOME</h3>
         <p>Success begins with planning</p>
          </div>
        <Addtask sender={this.handel} />
        <Tasks mainstate={this.state.tasks} deletfunction={this.deletitem} deletallfunction={this.deletallitem} />
        <div className='footer'>
          <h4>Copyright <FaCopyright /> <span>Adel Sherif</span> 2022.</h4>
        </div>
      </div>
    )
  }
}

export default App;
