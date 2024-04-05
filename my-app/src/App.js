
import './App.css';
import HelloWorld from './Components/HelloWorld';
import MyClass from './Components/MyClass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {<HelloWorld />}
        {<MyClass/>}
      </header>
    </div>
  );
}

export default App;
