import { useState } from 'react'

const Header = (props) => <h1>{props.header}</h1>

const Button = (props) => {
  return (
    <button onClick={props.action}>
      {props.text}
    </button>
  )
}

const DisplayQuote = (props) => {
  return (
    <div>
      {props.anecdotes[props.selected]} <br/>
      Has {props.points[props.selected]} votes
    </div>
  )
}

const PopularQuote = (props) => {
  if (props.points[props.selected] === 0) {
    return (
      <div>No votes yet.</div>
    )
  }
  return (
    <div>
      {props.anecdotes[props.popular]} <br/>
      Has {props.points[props.popular]} votes 
    </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]


  let initialPoints = [0, 0, 0, 0, 0, 0, 0, 0]
  const [points, setPoints] = useState(initialPoints)

  
  const [selected, setSelected] = useState(0)
  
  const [index, setIndex] = useState(0)

  const clickOnNext = () => {
    const generateNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(generateNumber)
  }


  const clickOnVote = () => {
    const copyPoints = [...points]
    copyPoints[selected] += 1

    let maxIndex = 0


    for (let i = 1; i < copyPoints.length; i++) {
      if (copyPoints[i] > copyPoints[maxIndex]) {
        maxIndex = i
      }
    }

    setPoints(copyPoints)
    setIndex(maxIndex)
  }

  return (
    <div>
      <Header header="Anecdote of the day" />
      <DisplayQuote anecdotes={anecdotes} selected={selected} points={points} />
      <Button action={clickOnNext} text="next anecdote" />
      <Button action={clickOnVote} text="vote" />
      <Header header="Anecdote with most votes" />
      <PopularQuote anecdotes={anecdotes} popular={index} points={points} />

    </div>
  )
}

export default App
