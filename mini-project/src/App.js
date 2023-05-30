import './App.css';
import ChildComponent from './ChildComponent.js'
function App() {
  return (
    <div className="App">
      <ChildComponent num={1} color={"blue"}/>
    </div>
  );
}

export default App;
