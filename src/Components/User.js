import { useRef } from 'react';

function User(props) {
  const inputName = useRef(null);
  const inputNumber = useRef(null);
  const { handleSubmit, setFormData } = props;

  const resetForm = () => {
    inputName.current.value = null;
    inputNumber.current.value = null;
  };

  const handleAdd = () => {
    setFormData({
      string: inputName.current.value,
      number: inputNumber.current.value,
    });
    handleSubmit();
    resetForm();
  };

  return (
    <div className="card">
      <p>string</p>
      <input
        type="text"
        ref={inputName}
        // onChange={(event) => onHandleChangeName(event)}
      />
      <p>number</p>
      <input
        type="number"
        ref={inputNumber}
        // onChange={(event) => onHandleChangeAmount(event)}
      />
      <div>
        <button type="button" className="btn" onClick={() => handleAdd()}>
          add
        </button>
      </div>
    </div>
  );
}

export default User;
