import Image from "next/image";
import Link from "next/link";

const MoviePage = ({ title, poster_path, release_date, id }) => {
  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <div className="mt-5 ">
      <Link href={`/${id}`}>
        <Image
          src={`${imagePath}/${poster_path}`}
          alt="image"
          width={800}
          height={800}
        />
        <h1>{title}</h1>
        <h1>{release_date}</h1>
      </Link>
    </div>
  );
};

export default MoviePage;
