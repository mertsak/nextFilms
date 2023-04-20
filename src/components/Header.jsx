import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-linear font-semibold tracking-wide">
      <div className="min-h-[70px] flex justify-between items-center container px-5">
        <Link
          className="flex justify-center items-center gap-2 text-2xl"
          href="/"
        >
          <FaPlayCircle className="text-2xl" /> NEXTFILMS
        </Link>

        <nav>
          <ul className="flex justify-center items-center gap-8 ">
            <li>
              <Link href="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
