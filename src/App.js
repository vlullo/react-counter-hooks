import './App.css';
import { Container, Button } from 'reactstrap';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Container className="p-5">
      <div>
        <h1>Counter</h1>
        <p className="count">{count}</p>
      </div>
      <div>
        <Button outline color="primary" onClick={() => setCount(count - 1)}>-</Button>
        <Button outline color="primary" onClick={() => setCount(count + 1)}>+</Button>
      </div>
    </Container>
  );
}

export default App;
