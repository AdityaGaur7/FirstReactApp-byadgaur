
import { useState } from 'react';
import './App.css';

function App() {
  const [num,setNum]=useState(0)

  const plus = ()=>{
    setNum(num+1)
  }
  const minus = ()=>{
    if(num<1){
      alert("Can't Decrease Anymore Don't you you get ");
    return ;
    }
    setNum(num-1)
  }

  return (
    <div className="cont f">
      <div className="box f">

        <div className="main">
          <div className="value">
            <h4>{num}</h4>
          </div>
        <div className='btns'>
          <button onClick={plus}>increment</button>
          <button onClick={minus}>decrement</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
