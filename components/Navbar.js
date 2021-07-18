import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const isActive = (path) => path === router.pathname;
  return (
    <div className="flex px-3 py-3 ">
      <div className="block">
        <Image width="60" height="60" alt="..." src="/images/logo.png"></Image>
      </div>
      <div className="flex-grow"></div>
      <div className="inline-flex">
        <div className="mx-3 flex items-center">
          <Link href="/">
            <span
              className={
                isActive("/")
                  ? "capitalize cursor-pointer   font-bold  text-2xl  hover:font-semibold hover:scale-50 "
                  : "capitalize cursor-pointer  font-semibold text-lg   hover:font-bold hover:text-2xl "
              }
            >
              {/* home */}
              <svg
                className={isActive("/") ? "w-12 h-12 text-black" : "w-7 h-7"}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </span>
          </Link>
        </div>
        <div className="mx-3 flex items-center">
          <Link href="/pokemons/0">
            <span
              className={
                isActive("/pokemons/[page]")
                  ? "capitalize cursor-pointer   font-bold  text-2xl  hover:font-semibold hover:scale-50 "
                  : "capitalize cursor-pointer  font-semibold text-lg   hover:font-bold hover:text-2xl "
              }
            >
              {/* pokemons */}
              <img
                src="https://img.icons8.com/ios-filled/50/000000/crown-pokemon.png"
                className={isActive("/pokemons/[page]") ? "" : "w-7 h-7"}
              />
            </span>
          </Link>
        </div>
        <div className="mx-3 flex items-center">
          <Link href="/subscribe">
            <span
              className={
                isActive("/subscribe")
                  ? "capitalize cursor-pointer   font-bold  text-2xl  hover:font-semibold hover:scale-50 "
                  : "capitalize cursor-pointer  font-semibold text-lg   hover:font-bold hover:text-2xl "
              }
            >
              subscribe
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
