import FetchedResult from "@/components/FetchedResult";
import HomeNavbar from "../components/HomeNavbar";
const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams?.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 60 } } // Revalidate the cache every 60 seconds
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const results = data?.results;

  return (
    <div>
      <div className="flex items-center justify-start gap-4 my-6">
        <HomeNavbar param={"fetchTrending"} title="Trending" />
        <HomeNavbar param={"fetchTopRated"} title="Top Rated" />
      </div>
      <FetchedResult results={results} />
    </div>
  );
}