import Card from "./Card";

export default function FetchedResult({results}) {
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center gap-5 px-2 my-8 ">
      {results?.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}