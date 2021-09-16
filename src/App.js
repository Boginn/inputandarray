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

  const setFormData = (obj) => {
    const { string, number } = obj;
    setState({
      ...state,
      amount: parseInt(number),
      name: string,
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
      setState(
        {
          ...state,
          id: updateId(),
          name,
          amount,
          array: newArray,
          sum: amount + sum,
        },
        /*
        Warning: State updates from the useState() and useReducer() Hooks don't support
        the second callback argument.
        To execute a side effect after rendering,
        declare it in the component body with useEffect().
        */
        () => {
          setFormData({
            string: null,
            number: null,
          });
        }
      );
      console.log(state);
    }
  };

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
