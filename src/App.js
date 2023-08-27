import Heading from './Components/Heading';
import Total from './Components/Total';
import Input from './Components/Input';
import { useState, React } from 'react';
import MyContext from './Components/MyContext';
import './App.css';

function App() {
  let [val, setVal] = useState(0);

  return (
    <div className="App">
      <MyContext.Provider value = {{val, setVal}}>
        <Heading/>
        <Total/>
        <Input/>
      </MyContext.Provider>
    </div>
  );
}

export default App;
