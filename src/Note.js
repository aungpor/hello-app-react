import React, { Component } from 'react'

const style = {
  color: 'blue',
  fontStyle: 'italic'
}

const str = <h1 style={style}>Learn JSX</h1>
const loggedIn = false;
const error = true;
const items = [
  'Bread',
  'milk',
  'Eggs'
]

const numbers = [1, 2, 3, 4, 5];

const element = <Welcome name="Sara" />;

const tick = (
  <div>
    <h1>Hello, world!</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>
);

function getGreeting(name) {
  return `Hello, ${name}`
}

function FunctionComponent() {
  return <h1>This is function component.</h1>
}

function handleEvent(e) {
  alert('Button clicked')
  console.log(e)
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

class ClassComponent extends Component {
  render() {
    return <h1>This is a class component.</h1>
  }
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

function Note() {
  return (
    <div className="App">
      {str}
      {/* {getGreeting('aungpor')} */}

      {(loggedIn) ?' Welcome back':' Nice to meet you' }

      {/* <label>Name: <input /></label>
      {error ? <div style={{color: 'red'}}>Name invalid</div> : null} */}

      {/* Grocery List:
      <ul>
        {items.map(item => <li>{item}</li>)}
      </ul> */}

      <FunctionComponent />
      <ClassComponent />
      <button onClick={handleEvent}>Text Click</button>

      {/* {element}
      {tick}

      <Welcome name="aungpor" />
      <Welcome name="ryu" /> */}

      <NumberList numbers={numbers} />

      <textarea>
        Hello there, this is some text in a text area
      </textarea>

      <BoilingVerdict celsius="55"/>

    </div>
  );
}

export default Note;