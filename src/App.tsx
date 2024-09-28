import ListGroup from './components/ListGroup';
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      { <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem} />}
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)} children="This is an alert: 'Hello World" />}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>Whole World</Button>
    </div>
  )
}

export default App;
