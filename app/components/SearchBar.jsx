import Image from "next/image";

const SearchBar = () => {
  return (
    <div className=" overflow-hidden">
      <Image
        src="/banner.jpg"
        alt="banner"
        width={800}
        height={400}
        style={{
          objectFit: "contain",
         
          objectPosition: "center",
        }}
      />
    </div>
  );
};

export default SearchBar;
