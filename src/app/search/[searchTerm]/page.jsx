import FetchedResult from "@/components/FetchedResult";

export default async function searchPage({ params }) {
  const searchTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
    );
    const data = await res.json()
    const results = data.results
    

    return (
      <div>
        {results ? (
          <FetchedResult results={results} />
        ) : (
          <div>
            <h1>Oops!</h1>
            <h1>No results found!</h1>
          </div>
        )}
      </div>
    );
}