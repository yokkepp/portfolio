import { useState } from 'react';

function App() {
  const [ count, setCount ] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <h1>Hello Word</h1>
      <p>{count}</p>
      <button onClick={addCount}>+</button>
    </div>
  );
}

export default App;
