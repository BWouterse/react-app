import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  // let list = ["magnum", "lick", "stegel", "loid", "charmander"];

  // const handleSelectItem = (item:string) =>{
  //   console.log(item)
  // }
  //<ListGroup list={list} heading="Things" onSelectItem={handleSelectItem}/>

  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My button</Button>
    </div>
  );
}

export default App;
