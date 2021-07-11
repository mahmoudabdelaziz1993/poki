import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex px-3 py-3 ">
      <div className="block">
        <Image width="60" height="60" alt="..." src="/images/logo.png"></Image>
      </div>
      <div className="flex-grow"></div>
      <div className="inline-flex">
        <div className="mx-3 flex items-center">
          <Link href="/">
            <span className="capitalize cursor-pointer  font-semibold text-lg text-gray-500  hover:font-bold hover:text-gray-800 hover:text-2xl">
              home
            </span>
          </Link>
        </div>
        <div className="mx-3 flex items-center">
          <Link href="/pokemons/0">
            <span className="capitalize cursor-pointer  font-semibold text-lg text-gray-500  hover:font-bold hover:text-gray-800 hover:text-2xl">
              pokemons
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
