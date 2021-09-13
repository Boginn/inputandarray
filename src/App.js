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
  // const handleChangeName = (event) => {
  //   setState({
  //     ...state,
  //     name: event.target.value,
  //   });
  // };

  // const handleChangeAmount = (event) => {
  //   console.log(event);
  //   setState({
  //     ...state,
  //     amount: parseInt(event.target.value),
  //   });
  // };

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
    }
  };

  return (
    <div className="App">
      <Cards>
        <User
          // onHandleChangeName={handleChangeName}
          // onHandleChangeAmount={handleChangeAmount}
          handleSubmit={handleSubmit}
          setFormData={setFormData}
        />
        <Display sum={sum} array={array} onRemove={handleRemove} />
      </Cards>
      <Footer text={author} />
    </div>
  );
}

export default App;
