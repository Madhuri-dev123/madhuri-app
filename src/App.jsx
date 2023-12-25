import logo from './logo.svg';
import './App.css';
import Todolist from './Todolist';
import Todos from './Todo';
function App() {
  return (
    <div className="mybox">
      <h1>Welcom to ReactJs</h1>
      <Todolist></Todolist>
      <Todos></Todos>
    
    </div>
  );
}

export default App;
