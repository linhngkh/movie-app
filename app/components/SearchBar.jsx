import Image from "next/image";

const SearchBar = () => {
  return (
    <div className="relative overflow-hidden h-80">
      <Image
        src="/banner.jpg"
        alt="banner"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default SearchBar;
