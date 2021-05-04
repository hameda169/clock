import React from 'react';
import {Clock} from "./components";

function App() {
  const second = 0;
  const minute = 20;
  const hour = 5;

  return (
    <div>
      <Clock second={second} minute={minute} hour={hour} />
    </div>
  );
}

export default App;
