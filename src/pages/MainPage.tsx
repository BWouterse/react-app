import { useState } from "react";
import Alert from "../components/Alert";
import Button from "../components/Button";

const MainPage = () => {
  // let list = ["magnum", "lick", "stegel", "loid", "charmander"];

  // const handleSelectItem = (item:string) =>{
  //   console.log(item)
  // }
  //<ListGroup list={list} heading="Things" onSelectItem={handleSelectItem}/>
  const [alertVisible, setAlertVisibility] = useState(false); //this is a place where we are using useState this makes it possible to allow components to manage a state.
  //it works with a value the first element, and a setter the secone element below you can see an example

  //we call the element alertVisible, which on default is false as seen in the useState(false) line
  //then when either onClose or onClick gets called the setter gets called
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My button</Button>
    </div>
  );
};

export default MainPage;
