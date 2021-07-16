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
                  ? "capitalize cursor-pointer   font-bold text-gray-800 text-2xl  hover:font-semibold hover:scale-50 hover:text-gray-500"
                  : "capitalize cursor-pointer  font-semibold text-lg text-gray-500  hover:font-bold hover:text-gray-800 hover:text-2xl "
              }
            >
              home
            </span>
          </Link>
        </div>
        <div className="mx-3 flex items-center">
          <Link href="/pokemons/0">
            <span
              className={
                isActive("/pokemons/[page]")
                  ? "capitalize cursor-pointer   font-bold text-gray-800 text-2xl  hover:font-semibold hover:scale-50 hover:text-gray-500"
                  : "capitalize cursor-pointer  font-semibold text-lg text-gray-500  hover:font-bold hover:text-gray-800 hover:text-2xl "
              }
            >
              pokemons
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
