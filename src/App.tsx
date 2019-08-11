import React from 'react';
import Spinner from "./examples/Spinner";
import Gestures from './examples/Gestures';
import Drag from './examples/Drag';

const buttonVariants = {
  tap: {
    scale: 0.8,
    borderRadius: 8
  },
  hover: {
    scale: 1.2,
    borderRadius: 7
  }
}

const App: React.FC = () => {
  return (
    <div className="App">
      <Spinner color="#9955fe" width={100} height={100}/>
      <Gestures color="#9955fe" variants={buttonVariants}>
        hover / tap
      </Gestures>
      <Drag color="#9955fe"/>
    </div>
  );
};

export default App;
