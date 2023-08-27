import React from 'react'
import { useContext } from 'react'
import MyContext from './MyContext'

export default function Input() {
    let { val, setVal } = useContext(MyContext);

    function resInput() {
        const inputValue = document.getElementById("input");
        inputValue.value = 0;
    }
    function add() {
        const inputValue = document.getElementById("input");
        setVal(val + parseFloat(inputValue.value));
    }
    function sub() {
        const inputValue = document.getElementById("input");
        setVal( val - parseFloat(inputValue.value));
    }

    function mul() {
        const inputValue = document.getElementById("input");
        setVal(val * parseFloat(inputValue.value));
    }
    function div() {
        const inputValue = document.getElementById("input");
        setVal(val / parseFloat(inputValue.value));
        resInput();
    }
    function resOutput() {
        setVal(0);
    }

  return (
    <div>
      <input type="number" className='input' id="input"/>
      <div className="btns">
        <button className='btn btn-primary' onClick={add}>Add</button>
        <button className='btn btn-primary all-btns' onClick={sub}>Subtract</button>
        <button className='btn btn-primary all-btns' onClick={mul}>Multiply</button>
        <button className='btn btn-primary all-btns' onClick={div}>Divide</button>
        <button className='btn btn-danger all-btns' onClick={resInput}>Reset input</button>
        <button className='btn btn-danger all-btns' onClick={resOutput}>Reset result</button>
      </div>
    </div>
  )
}
