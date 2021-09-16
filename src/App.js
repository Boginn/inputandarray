import './CSS/App.css';
import { useState, useEffect } from 'react';
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

  const setFormData = (obj) => {
    const { string, number } = obj;
    setState({
      ...state,
      amount: parseInt(number),
      name: string,
    });
  };

  const resetFormData = () => {
    setState({
      ...state,
      amount: 0,
      name: '',
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
      console.log(state);
    }
  };

  useEffect(() => {
    resetFormData();
  }, [sum]);

  return (
    <div className="App">
      <Cards>
        <User handleSubmit={handleSubmit} setFormData={setFormData} />
        <Display sum={sum} array={array} onRemove={handleRemove} />
      </Cards>
      <Footer text={author} />
    </div>
  );
}

export default App;
