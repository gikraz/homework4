import React, { useState } from 'react';
// import './App.css'; 
// import "./Card.css";

function App() {
  // piroba#4
  // const Card = ({ title, image, description }) => {
  //   const [isVisible, setIsVisible] = useState(true); // ქლიქისას ვაჩვენებთ/გავაჩერებთ იმიჯს
  
  //   const toggleVisibility = () => {
  //     setIsVisible(!isVisible); // ქლიქისას იმიჯი უნდა შეიცვალოს
  //   };
  
  // #პირობა#3
  // const [count, setCount] = useState(0); 
  
  // const increment = () => {
  //   setCount(count + 1);
  // };

  
  // const decrement = () => {
  //   setCount(count - 1);
  // };
// piroba#2
  // const [darkMode, setDarkMode] = useState(false); 

  
  // const toggleTheme = () => {
  //   setDarkMode(!darkMode); 
  // };

  // piroba#1
  // const [task, setTask] = useState(''); 
  // const [tasks, setTasks] = useState([]); 

  
  // const addTask = () => {
  //   if (task) {
  //     setTasks([...tasks, task]); 
  //     setTask(''); 
  //   }
  // };

  return (
    // piroba#4
  //   <div className="card">
  //   <h2 className="card-title">{title}</h2>
  //   {isVisible && <img className="card-image" src={image} alt={title} />}
  //   <p className="card-description">{description}</p>
  //   <button className="card-button" onClick={toggleVisibility}>
  //     Toggle Image
  //   </button>
  // </div>
    // #პირობა#3
  //   <div className="counter-container">
  //   <h1 className="count-display">Count: {count}</h1>
  //   <button onClick={increment} className="increment-button">
  //     Increment
  //   </button>
  //   <button onClick={decrement} className="decrement-button">
  //     Decrement
  //   </button>
  // </div>
    // piroba#2
//     <div>
//     <button onClick={toggleTheme}>
//     Switch to {darkMode ? 'Light' : 'Dark'} Mode
//   </button>
  
//   <div>
//     <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
//     <p>This is a simple dark/light mode toggle example.</p>
//   </div>
// </div>
    // piroba#1
    // <div className="app-container">
    //   <input
    //     value={task}
    //     onChange={(e) => setTask(e.target.value)} 
    //     onKeyDown={(e) => e.key === 'Enter' && addTask()} 
    //     placeholder="Add a task"
    //     className="app-input"
    //   />
    //   <button onClick={addTask} className="app-button">Add</button>

    //   <ul className="app-list">
    //     {tasks.map((t, index) => (
    //       <li key={index} className="app-task">{t}</li> 
    //     ))}
    //   </ul>
    // </div>
  );
}

// export default App;
// export default Card;