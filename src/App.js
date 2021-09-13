import './CSS/App.css';
import { useState } from 'react';
import initialState from './data';
import { Footer, Display, Cards, User } from './components';

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
    (just a note for my future self)
    Using onChange to update the value gave me some problems here,
    if I want to have a default value in there(value="sth") then
    the user would first have to make a change for that value to be
    updated in the state and added. Grabbing the value from the input 
    when it's submitted seems more logical.

    I kept using onChange even if it doesn´t make sense, looking at the event 
    object that gets passed is interesting! 

    Didn't manage to reset the input fields after submitting. Using
    <form> might help.

    v-model in Vue handled this well
    */
  const handleChangeName = (event) => {
    setState({
      ...state,
      name: event.target.value,
    });
  };

  const handleChangeAmount = (event) => {
    console.log(event);
    setState({
      ...state,
      amount: parseInt(event.target.value),
    });
  };

  const handleRemove = (itemId) => {
    const newArray = array.filter((i) => i.id !== itemId);
    setState({
      ...state,
      array: newArray,
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
        <User
          onHandleChangeName={handleChangeName}
          onHandleChangeAmount={handleChangeAmount}
          onHandleSubmit={handleSubmit}
        />
        <Display sum={sum} array={array} onRemove={handleRemove} />
      </Cards>
      <Footer text={author} />
    </div>
  );
}

export default App;
