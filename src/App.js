// import logo from './logo.svg';
import './App.css';
import Counter from './Counter/Counter.js'
import CounterDisplay from './CounterDisplay/CounterDisplay.js'
import TodoList from './Todo/TodoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Todo List</p>
        {/* <Counter />
        <CounterDisplay /> */}
        <TodoList />
      </header>
    </div>
  );
}

export default App;
