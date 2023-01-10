import { useState } from 'react'

const Title = ({title}) => <h1>{title}</h1>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button> 

const StatisticLine = ({text, value}) => <p>{text} {value}</p>

const Statistics = ({good, neutral, bad}) => {
  const title = <Title title="statistics" />

  if (good || neutral || bad){
    return (
      <>
        {title}
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={bad+good+neutral} />
        <StatisticLine text="average" value={calcAvg(good,neutral,bad)} />
        <StatisticLine text="positive" value={calcPos(good,neutral,bad)} />
      </>
    )
  }
  return (
    <>
      {title}
      <p>No Feedback given</p>
    </>
  )
}

const calcAvg = (good, neutral, bad) => (good-bad)/(good+bad+neutral)
const calcPos = (good, neutral, bad) => (good*100)/(good+bad+neutral)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // total number feedback, avg, % pos
  return (
    <div>
      <Title title="give feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App