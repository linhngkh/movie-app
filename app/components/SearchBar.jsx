import Image from "next/image";
import Input from "./Input";
const SearchBar = () => {
  return (
    <div className="relative overflow-hidden h-80 ">
      <Image
        src="/banner.jpg"
        alt="banner"
        fill
        style={{ objectFit: "cover" }}
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start space-y-3">
        <h1 className="font-bold text-3xl">Welcome.</h1>
        <h2 className="font-semibold text-xl">
          Millions of movies, TV shows and people to discover. Explore now.
        </h2>
        <Input />
      </div>
    </div>
  );
};

export default SearchBar;
