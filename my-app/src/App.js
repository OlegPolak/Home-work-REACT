
import './App.css';
import HelloWorld from './Components/HelloWorld';
import MyClass from './Components/MyClass';
import ToDoList from './Components/ToDoList';


function App() {
 


  return (
    <div className="App">
      <header className="App-header">
        {<HelloWorld />}
        {<MyClass />}
         <ToDoList/>
      </header>
    </div>
  );
}

export default App;
