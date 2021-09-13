function User(props) {
  const { onHandleChangeName, onHandleChangeAmount, onHandleSubmit } = props;

  return (
    <div className="card">
      <p>string</p>
      <input type="text" onChange={(event) => onHandleChangeName(event)} />
      <p>number</p>
      <input type="number" onChange={(event) => onHandleChangeAmount(event)} />
      <div>
        <button type="button" className="btn" onClick={() => onHandleSubmit()}>
          add
        </button>
      </div>
    </div>
  );
}

export default User;
