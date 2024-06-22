export default function FetchedResult({results}) {
  return (
    <div>
      <h1>{results?.length}</h1>
      {results?.map((result) => (
        <div key={result.id}>
          <h1>{result.original_title}</h1>
        </div>
      ))}
    </div>
  );
}
