import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex  items-center justify-between mb-5">
      <Link href="/">
        <h1 className="font-[700] flex text-2xl bg-gradient-to-r from-green-400 to-blue-500  text-transparent bg-clip-text">
          The Movies App
        </h1>
      </Link>

      <ul className="flex justify-between space-x-4">
        <li>
          <Link href="/">TV Shows</Link>
        </li>
        <li>
          <Link href="/">People</Link>
        </li>
        <li>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
