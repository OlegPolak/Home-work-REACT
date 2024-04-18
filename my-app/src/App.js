
import { useState } from 'react';
import './App.css';
import HelloWorld from './Components/HelloWorld';
import MyClass from './Components/MyClass';
import ToDoList from './Components/ToDoList';
import styles from './Components/ToDoList.module.css';


function App() {
  const [isShowTimer, setIsShowTimer] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        {<HelloWorld />}
        {isShowTimer ? <MyClass /> :  <ToDoList/> }
        <button className={styles.btn} onClick={() => setIsShowTimer((prev) => !prev)}>Show Timer</button>
      </header>
    </div>
  );
}

export default App;
