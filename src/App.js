import './App.css';
import EightBall from "./EightBall";


function App() {
  return (
    <div className='App'>
      <h1>Eight Ball</h1>
      <p>Click to get response</p>
      <div className='eightball'>
        <EightBall />
      </div>
    </div>
  );
}

export default App;
