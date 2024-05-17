import { useState } from "react";
import Alert from "../components/Alert";
import Button from "../components/Button";
import axios from "axios";

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
  const [ip, setIp] = useState("");
  const [ipVisible, setIpVisibility] = useState(false);

  const fetchIp = async () => {
    if (ipVisible) {
      setIpVisibility(false);
    } else {
      try {
        setIpVisibility(true);
        const response = await axios.get("https://api.ipify.org/?format=json");
        setIp(response.data.ip); //data.ip is because are are getting a json back
      } catch (error) {
        console.error("error");
      }
    }
  };

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My button</Button>
      <Button onClick={fetchIp}>IP button</Button>
      {ipVisible && ip && <div>ip is: {ip}</div>}
    </div>
  );
};

export default MainPage;
