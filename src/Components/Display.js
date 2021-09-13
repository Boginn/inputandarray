function Display(props) {
  const { sum, array, onRemove } = props;

  return (
    <div className="card">
      <div className="class-soup">
        <span className="ml8 ">sum</span>
        <span>{sum}</span>
      </div>
      <div>
        {array.map((item) => (
          <li key={item.id} className="item item-wrapper">
            {item.name}
            <button
              className="remove-button"
              type="button"
              onClick={() => onRemove(item.id)}
            >
              x
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Display;
