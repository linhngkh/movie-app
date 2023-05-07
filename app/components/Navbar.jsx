import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mb-5">
      <h1 className="font-[700] flex text-2xl bg-gradient-to-r from-green-400 to-blue-500  text-transparent bg-clip-text">
        The Movies App
      </h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-search"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
          </svg>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
