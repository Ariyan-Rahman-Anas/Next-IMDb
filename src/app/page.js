import FetchedResult from "@/components/FetchedResult";
import HomeNavbar from "../components/HomeNavbar";
import SearchBox from "@/components/SearchBox";
const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams?.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const results = data?.results;

  return (
    <div>
      <SearchBox />
      <div className="flex items-center justify-start gap-4 mt-6 px-2 ">
        <HomeNavbar param={"fetchTrending"} title="Trending" />
        <HomeNavbar param={"fetchTopRated"} title="Top Rated" />
      </div>
      <FetchedResult results={results} />
    </div>
  );
}