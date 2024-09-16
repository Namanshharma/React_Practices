import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [Length, SetLength] = useState(8);
  const [Number, SetNumber] = useState(false);
  const [Character, SetCharacter] = useState(false);
  const [InputField, SetInputField] = useState("");

  // this useCallback hook is used to memorize as it saves some of the values in the cache. Ultimately to optimize the method call
  const passwordGenerator = useCallback(() => {
    let pass = ""; let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (Number) str += "0123456789";
    if (Character) str += "[]\/~`!@#$%^&*()_-=*-+,.{}|";

    for (let i = 0; i <= Length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    SetInputField(pass);
  }, [Length, Number, Character, SetInputField]);

  const refVarible = useRef(null);    // by using this hook we can generally use the value of HTML becoz through this we can easily interact with that HTML value

  // const copyToClipboard = () => {
  //   refVarible.current.select();                                  // used to highlight the select      
  //   refVarible.current.setSelectionRange(0, InputField.length);   // used to highlight the selected range which we mentioned in the range 2nd parameter
  //   window.navigator.clipboard.writeText(InputField);             // definitely copy the value into clipboard
  // }

  const copyToClipboard = useCallback(() => {                       // little bit optimized version as we have used the memoization technique in this by using UseCallback hook
    refVarible.current.select();
    refVarible.current.setSelectionRange(0, InputField.length);
    window.navigator.clipboard.writeText(InputField);
  }, [InputField]);

  // mainly used when our page loads then firstly it will call automatically also if any of the dependencies will change then it will also run again.
  useEffect(() => { passwordGenerator() }, [Length, Number, Character, SetInputField]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md-rounded-lg px-4 my-8 text-orange-500 bg-grey-800'>
        <h1 className='text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' value={InputField} className='outline-none w-full py-1 px-3' placeholder='password' ref={refVarible} readOnly></input>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyToClipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range' min={6} max={30} value={Length} className='cursor-pointer' onChange={(e) => { SetLength(e.target.value) }}>
            </input>
            <label>Length : {Length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={Number} className='cursor-pointer' onChange={() => { SetNumber((previousState) => !previousState) }}>
            </input>
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={Character} className='cursor-pointer' onChange={() => { SetCharacter((previousState) => !previousState) }}>
            </input>
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}
export default App