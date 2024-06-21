import HomeNavbar from "../components/HomeNavbar";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-start gap-4 mt-6 ">
        <HomeNavbar param={"fetchTrending"} title="Trending" />
      <HomeNavbar param={"fetchTopRated"} title="Top Rated" />
      </div>
    </div>
  )
}