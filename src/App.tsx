import React from 'react';
import {Clock} from "./components";
import {useTime} from "./hooks";

function App() {
  const {second, minute, hour} = useTime();

  return (
    <div>
      <Clock second={second} minute={minute} hour={hour} />
    </div>
  );
}

export default App;
