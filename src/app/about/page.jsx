export default function About() {
  return (
    <div className="w-full md:w-[85vw] mx-auto pt-10 pb-5 px-2 text-sm">
      <h1 className="text-3xl  ">About IMDb-Clone</h1>
      <p className="tracking-wider">
        {`Welcome to our IMDb-Clone, your ultimate source for all things movies,
        TV shows, and entertainment. Our platform is designed to be the go-to
        destination for movie enthusiasts, TV show aficionados, and industry
        professionals alike. Whether you're here to discover new movies, read
        reviews, or track your favorite stars, we've got you covered.`}
      </p>
      <h1 className="text-3xl mt-10 ">What is IMDb?</h1>
      <p className="tracking-wider">
        {`The Internet Movie Database (IMDb) is the world's most popular and
        authoritative source for movie, TV, and celebrity content. Founded in
        1990 by Col Needham, IMDb started as a simple database of movie
        information and has grown into a comprehensive resource that features
        information on millions of movies, TV shows, and entertainment programs.`}
      </p>
      <h1 className="text-3xl mt-10 ">Our Mission</h1>
      <p className="tracking-wider text-base ">
        Our mission is to replicate the rich, engaging experience of IMDb,
        providing a platform where users can:
      </p>
      <ul className="list-disc ml-8 mt-2 space-y-2 ">
        <li>
          <strong>Explore Extensive Databases:</strong> Search and browse
          through detailed information on movies, TV shows, actors, directors,
          writers, and other industry professionals.
        </li>
        <li>
          <strong>Discover New Content:</strong> Stay updated with the latest
          releases, trailers, and upcoming projects in the entertainment
          industry.
        </li>
        <li>
          <strong>Read and Write Reviews:</strong> Share your thoughts on movies
          and TV shows by writing reviews, and read reviews from other users to
          guide your viewing choices.
        </li>
        <li>
          <strong>Track Your Favorites:</strong>
          {`Create lists of your favorite
          movies and TV shows, keep track of what you've watched, and set
          reminders for new releases.`}
        </li>
        <li>
          <strong>Access Multimedia Content: </strong> Watch trailers, view
          photos, and enjoy behind-the-scenes content and interviews with your
          favorite stars.
        </li>
      </ul>
      <h1 className="text-3xl mt-10 ">Features of Our IMDb-Clone</h1>
      <ul className="list-disc ml-8 mt-2 space-y-2 ">
        <li>
          <strong>Comprehensive Movie and TV Show Listings: </strong> Detailed
          information on a vast collection of movies and TV shows, including
          synopses, cast and crew details, user ratings, and critic reviews.
        </li>
        <li>
          <strong>User Reviews and Ratings</strong> Read user-generated reviews
          and ratings to make informed decisions about what to watch next.
        </li>
        <li>
          <strong>Watchlists and Favorites:</strong> Keep track of your favorite
          movies and shows, and create personalized watchlists to organize your
          viewing.
        </li>
        <li>
          <strong>Trending and Popular Content:</strong>{" "}
          {`Discover what's
          currently trending and popular in the world of entertainment.`}
        </li>
        <li>
          <strong>Advanced Search and Filters: </strong>{" "}
          {`Find exactly what
          you're looking for with advanced search options and filters based on
          genre, release year, rating, and more.`}
        </li>
        <li>
          <strong>News and Updates: </strong> Stay up-to-date with the latest
          news, interviews, and updates from the entertainment industry.
        </li>
      </ul>
      <h1 className="text-3xl mt-10 ">Our Community</h1>
      <p className="tracking-wider  ">
        Join a community of like-minded movie lovers and TV show enthusiasts.
        Engage in discussions, participate in polls, and share your insights and
        recommendations with others. Our platform is built to foster a vibrant
        and inclusive community where everyone can contribute and find value
      </p>
      <h1 className="text-3xl mt-10 ">Why Choose Our IMDb-Clone?</h1>
      <ul className="list-disc ml-8 mt-2 space-y-2 ">
        <li>
          <strong>User-Friendly Interface:</strong> Our website is designed with
          a clean, intuitive interface that makes it easy to navigate and find
          the information you need.
        </li>
        <li>
          <strong>Regular Updates:</strong> We continuously update our database
          to ensure you have access to the latest information on new releases,
          trailers, and industry news.
        </li>
        <li>
          <strong>High-Quality Content:</strong> We prioritize accuracy and
          quality in all the information we provide, ensuring you have reliable
          and up-to-date content at your fingertips.
        </li>
      </ul>
      <h1 className="text-3xl mt-10 ">Get Started</h1>
      <p className="tracking-wider">
        {`Dive into the world of movies and TV shows with our IMDb-Clone. Whether
        you're looking for information on a specific film, discovering new
        content to watch, or wanting to share your opinions, our platform offers
        everything you need. Start exploring today and become a part of our
        growing community of entertainment enthusiasts.`}
      </p>
      <p className="tracking-wider mt-8 text-lg  font-semibold">
        Thank you for choosing our IMDb-Clone. We hope you enjoy your
        experience!
      </p>
    </div>
  );
}