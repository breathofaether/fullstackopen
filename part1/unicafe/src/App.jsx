import { useState } from 'react'

const DisplayHeader = (props) => <h1>{props.text}</h1>

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}



const Statistics = ({ clicks }) => {

  const total = clicks.good + clicks.neutral + clicks.bad
  const average = (clicks.good - clicks.bad * -1) / total
  let avg_rounded = average.toFixed(2)
  const positive = (clicks.good / total) * 100
  let positive_rounded = positive.toFixed(2)

  if (total === 0) {
    return (
      <div>
        No feedback available.
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={clicks.good} />
          <StatisticLine text="neutral" value={clicks.neutral} />
          <StatisticLine text="bad" value={clicks.bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={avg_rounded} />
          <StatisticLine text="positive" value={positive_rounded} />
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = ({ text, value }) => {
  if (text === "positive") {
    return (
      <tr><td>{text} {value} %</td></tr>
    )
  }
  return (
    <tr><td>{text} {value} </td></tr>
  )
}

const App = () => {

  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleClickOnGood = () => {
    const newClicks = {
      ...clicks,
      good: clicks.good + 1,
    }
    setClicks(newClicks)
  }

  const handleClickOnNeutral = () => {
    const newClicks = {
      ...clicks,
      neutral: clicks.neutral + 1,
    }
    setClicks(newClicks)
  }

  const handleClickOnBad = () => {
    const newClicks = {
      ...clicks,
      bad: clicks.bad + 1
    }
    setClicks(newClicks)
  }


  return (
    <div>
      <DisplayHeader text="give feedback" />
      <Button onClick={handleClickOnGood} text="good" />
      <Button onClick={handleClickOnNeutral} text="neutral" />
      <Button onClick={handleClickOnBad} text="bad" />
      <DisplayHeader text="statistics" />
      <Statistics clicks={clicks} />
    </div>
  )
}

export default App