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
    handleSubmit();
    resetForm();
  };

  const handleChange = () => {
    setFormData({
      string: inputName.current.value,
      number: inputNumber.current.value,
    });
  };

  return (
    <div className="card">
      <p>string</p>
      <input onChange={handleChange} type="text" ref={inputName} />
      <p>number</p>
      <input onChange={handleChange} type="number" ref={inputNumber} />
      <div>
        <button type="button" className="btn" onClick={() => handleAdd()}>
          add
        </button>
      </div>
    </div>
  );
}

export default User;
