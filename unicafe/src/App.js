import { useState } from 'react'

const Title = ({title}) => <h1>{title}</h1>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button> 

const Stat = ({text, count}) => <p>{text} {count}</p>

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
      <Title title="statistics" />
      <Stat text="good" count={good} />
      <Stat text="neutral" count={neutral} />
      <Stat text="bad" count={bad} />
      <Stat text="all" count={bad+good+neutral} />
      <Stat text="average" count={calcAvg(good,neutral,bad)} />
      <Stat text="positive" count={calcPos(good,neutral,bad)} />
    </div>
  )
}

export default App