import Image from "next/image";
import Link from "next/link";

const MoviePage = ({ title, poster_path, release_date, id }) => {
  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <div>
      <h1>{title}</h1>
      <h1>{release_date}</h1>
      <Link href={`/${id}`}>
        <Image
          src={`${imagePath}/${poster_path}`}
          alt="image"
          width={800}
          height={800}
        />
      </Link>
    </div>
  );
};

export default MoviePage;
