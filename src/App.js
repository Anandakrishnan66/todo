//import logo from './logo.svg';
//import './App.css';
//import {useState} from 'react'
import Navbar from './components-navbar/Navbar'
import './components-navbar/app.css'
import Banner from './Banner/Banner';
import './components-navbar/app.css'

 function App() {
//   const [toDos,setTodos]=useState([])
//   const [toDo,setTodo]=useState('')
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>

    


    //</div>
/* <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...toDos,{id:Date.now(),text:toDo,status:false}])}className="fas fa-plus"></i>
      </div>
      <div className="todos">
       {
         toDos.map((obj)=>{
         return(<div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked)
              console.log(obj)
              setTodos(toDos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.checked
                }
                return obj2
              }))

            }}value={obj.status}type="checkbox" name="" id="" />
            <p>{obj.text}</p>
            
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>)
            })    }
            {toDos.map((obj)=>{
              if(obj.status){
                return(<h1>{obj.text}</h1>)
              }
              return null
            })}
      </div>
    </div> */
<div>
    <Navbar/>
    <Banner/>
</div>






  );
}

export default App;
