import Child from "./Child";
import { useState } from "react";
// parent
function App() {
  const [dataFromChild, setDataFromChild] = useState(null);
  // because we pass onGetdata = {getdata}
  // so function getData have the same function value as onGetData

  const getData = (data) => {
    console.log(data);
    setDataFromChild(data);

  };
  return (
    <div className="App">

      <Child onGetdata={getData} />
      <div>This is the data from child: {dataFromChild}</div>
    </div>
  );
}

export default App;
