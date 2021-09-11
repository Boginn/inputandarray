function Display(props) {
  const { sum, array } = props;
  return (
    <div className="card">
      <div className="sum-wrapper">
        <p>sum</p>
        <p>{sum}</p>
      </div>
      <div>
        {array.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </div>
    </div>
  );
}

export default Display;
