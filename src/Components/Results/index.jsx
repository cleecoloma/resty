function Results({ response, loading }) {
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <pre>{JSON.stringify(response, null, 2)}</pre>
      )}
    </div>
  );
}

export default Results;
