import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const GamePage = () => {

      const navigate = useNavigate()

      const [inputAppear, setInputAppear] = useState(false)
      const [input, setInput] = useState(0)

      let num = input
      let array = []
      let dragEl = null

      function showGrids() {
        setInputAppear(true)
      }

      function hideGrids() {
        setInputAppear(false)
      }

      function onInputChange(event) {
        setInput(event.target.value)
      }

      function onSubmit(event) {
        event.preventDefault()
        console.log(input)
      }

      if (num > 11) {
        navigate('/error')
      } else {
        num *= num
        for (let i = 0; i < num; i++) {
          array.push(i + 1)
        }
        console.log(array)
      }

      document.querySelectorAll('.item').forEach((v) =>
        v.addEventListener('click', function () {
          console.log(v.innerHTML)
        }),
      )

      function handleDragStart(event) {
        this.style.opacity = '0.4'
        dragEl = this
        event.dataTransfer.effectAllowed = 'move'
      }

      function handleDragOver(event) {
        if (event.preventDefault) {
          event.preventDefault()
        }
        event.dataTransfer.dropEffect = 'move'
        return false
      }

      function handleDragEnter(event) {
        this.classList.add('over')
      }

      function handleDragLeave(event) {
        this.classList.remove('over')
      }

      function handleDrop(event) {
        if (event.stopPropagation) {
          event.stopPropagation()
        }
        if (dragEl !== this) {
          this.replaceWith(this, dragEl)
        }
        return false
      }

      function handleDragEnd(event) {
        this.style.opacity = '1'
        this.style.backgroundColor = 'red'
        items.forEach(function (item) {
          item.classList.remove('over')
        })
      }

      let items = document.querySelectorAll('.main .item')
      items.forEach(function (item) {
        item.addEventListener('dragstart', handleDragStart, false)
        item.addEventListener('dragenter', handleDragEnter, false)
        item.addEventListener('dragover', handleDragOver, false)
        item.addEventListener('dragleave', handleDragLeave, false)
        item.addEventListener('drop', handleDrop, false)
        item.addEventListener('dragend', handleDragEnd, false)
      })

      return (
        <div className="game-container">
          <main
            className="main"
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${input}, 5em)`,
            }}
          >
            {!inputAppear ? (
              <div className="input-container">
              <div className='title'>Enter the number between 1 and 11:</div>

                <div className="input-and-button">
                  <input type="integer" maxLength={2} onChange={onInputChange} />
                  <button
                    className="ok-button"
                    onClick={(event) => {
                      onSubmit(event)
                      showGrids()
                    }}
                  >
                    OK
                  </button>
                </div>
              </div>
            ) : (
              array.map((item, key) => (
                <div draggable="true" className="item" key={key}>
                  {item}
                </div>
              ))
            )}
            {
                  (input < 1 || input === null || input === undefined) ? " " : <button onClick={hideGrids} className="close-button">Close</button>

            }


          </main>
        </div>
      )
}

export default GamePage
