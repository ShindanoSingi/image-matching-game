import React, { useState } from 'react'

function App() {
  const [inputAppear, setInputAppear] = useState(false)
  const[input, setInput] = useState(0)

  let num = input;
  let array = []

  function changeInputAppearance(){
    setInputAppear(true)
  }

  function onInputChange(event){
    setInput(event.target.value);
  }

  function onSubmit(event){
    event.preventDefault();
     console.log(input)
  }

  if (num < 2 || num === null || num === undefined || num > 10) {
    alert('Please enter a number between 2 and 5')
  } else {
    num *= num
    for (let i = 0; i < num; i++) {
      array.push(i + 1)
    }
    console.log(array)
  }

  return (
    <div className="container">
      <header className="header">Image Matching Game</header>
      <main className="main" style={{display: 'grid', gridTemplateColumns: `repeat(${input}, 5em)` }}>
        {!inputAppear ? (
          <label>
            Enter the number between 2 and 4:
            <div className="input-and-button">
              <input type='integer' maxLength={2} onChange={onInputChange} />
              <button onClick={(event) => {
              onSubmit(event);
              changeInputAppearance()}}>OK</button>
            </div>
          </label>
        ) : (
          array.map((item, key) => (
            <div className="item" key={key}>
              {item}
            </div>
          ))
        )}
      </main>
    </div>
  )
}

export default App
