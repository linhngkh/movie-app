import MoviePage from "./Movie.jsx";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  if (!data.ok) throw new Error("Failed to fetch data");
  const movies = await data.json();

  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid">
        {movies.results.map((movie) => (
          <MoviePage
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}
