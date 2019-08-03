import React from 'react';
import Spinner from "./examples/Spinner";

const App: React.FC = () => {
  return (
    <div className="App">
      <Spinner  color="#9955fe" width={100} height={100}/>
    </div>
  );
};

export default App;
