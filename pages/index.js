import Head from "next/head";
import image from "next/image";
import Layout from "../components/Layout";
import Image from "next/image";

export default function Home({ pokemons, count }) {
  console.log("pokemons :", pokemons);
  return (
    <Layout title="Poki">
      <div className="flex px-3 justify-center">
        <div className="container-md bg-black text-white p-5 rounded-lg h-100	 my-3">
          <p className="text-4xl font-extrabold mb-3">
            A collection of Pokemons with Details and abilities
          </p>
          <p className="text-md whitespace-normal md:whitespace-pre">
            All the Pokémon data you'll ever need in one place, easily
            accessible through a modern UI{" "}
          </p>
          <p className="my-3  text-sm text-gray-400">author</p>
          <a
            href="https://mahmoudabdelaziz1993.github.io/Demo/"
            className="cursor-pointer"
          >
            <div className="flex">
              <Image
                src="/images/me.svg"
                width="60"
                height="60"
                className="rounded-full"
              />
              <div className="flex pr-3 flex-col">
                <h6 className="text-lg font-semibold capitalize text-gray-300">
                  Mahmoud Abdelaziz
                </h6>
                <p className="text-xs">
                  Frontend developer at <strong>Onesolution</strong>
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </Layout>
  );
}
