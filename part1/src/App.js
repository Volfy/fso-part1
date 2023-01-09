const Hello = (props) => {

  if (props.age){
    return (
      <div>
        <p>Hello {props.name}! You're {props.age} years old!</p>
      </div>
    )
  }
  else {
    return (
      <div>
        <p>Hello {props.name}!</p>
      </div>
    )
  }
}

const App = () => {

  const name = 'Peter'
  const age = 20


  return (
    <>
      <h1>Greetings</h1>
      <Hello name='maya' age={26+10}/>
      <Hello name={name} age={age}/>
      <Hello name="@033"/>
      <Hello />
  </>
  )
}

export default App