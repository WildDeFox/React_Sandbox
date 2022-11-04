function Person({ firstName, lastLame, email, img }) {
  return (
    <div className="card">
      <img src={img} alt="photo" />
      <h3>
        {firstName} {lastLame}
      </h3>
      <h4>{email}</h4>
    </div>
  );
}

export default Person;
