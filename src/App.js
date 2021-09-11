import './CSS/App.css';
import { useState } from 'react';
import initialState from './data';
import { Footer, Display, Cards } from './components';

function App() {
  const [state, setState] = useState(initialState);
  const { id, name, amount, array, sum, author } = state;

  // methods:id
  const getId = () => {
    return id;
  };

  const updateId = () => {
    return id + 1;
  };

  // methods:handlers
  /*
    Using onChange to update the value gave me some problems here,
    if I want to have a default value in there(value="sth") then
    the user would first have to make a change for that value to be
    updated in the state and added. Grabbing the value from the input 
    when it's submitted seems more logical.

    How would I go about resetting the input fields using this
    approach?

    Is a two way value binding possible? (thinking of Vue's v-model)
    */
  const handleChangeName = (event) => {
    setState({
      ...state,
      name: event.target.value,
    });
  };

  const handleChangeAmount = (event) => {
    setState({
      ...state,
      amount: parseInt(event.target.value),
    });
  };

  const handleSubmit = () => {
    let newArray = [];

    if (name.length && amount) {
      newArray = array.concat({ name, id: getId() });
      setState({
        ...state,
        id: updateId(),
        name,
        amount,
        array: newArray,
        sum: amount + sum,
      });
    }
  };

  return (
    <div className="App">
      <Cards>
        <div className="card">
          <p>name</p>
          <input type="text" onChange={handleChangeName} />
          <p>number</p>
          <input type="number" onChange={handleChangeAmount} />
          <div>
            <button type="button" className="btn" onClick={handleSubmit}>
              add
            </button>
          </div>
        </div>
        <Display sum={sum} array={array} />
      </Cards>
      <Footer text={author} />
    </div>
  );
}

export default App;
