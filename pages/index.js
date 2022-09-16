import Head from "next/head";
import image from "next/image";
import Layout from "../components/Layout";
import Image from "next/image";
import { useEffect } from "react";

export default function Home({ pokemons, count }) {
  useEffect(() => {
    Notification.requestPermission().then((premission) => {
      console.log("premission :", premission);
      if (premission !== "granted") {
        alert("You should allow Notifications for this site ");
      }
      new Notification("Hi there !", {
        body: "Hope you enjoy our list of Pokémons ",
        icon: "/images/logo.png",
        vibrate: [200, 100, 200],
      });
    });
  }, []);
  return (
    <Layout title="Poki">
      <div className="flex justify-center px-3">
        <div className="p-5 my-3 text-white bg-black rounded-lg container-md h-100">
          <p className="mb-3 text-4xl font-extrabold">
            A collection of Pokemons with Details and abilities
          </p>
          <p className="whitespace-normal text-md md:whitespace-pre">
            All the Pokémon data you'll ever need in one place, easily
            accessible through a modern UI{" "}
          </p>
          <p className="my-3 text-sm text-gray-400">author</p>
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
              <div className="flex flex-col pr-3">
                <h6 className="text-lg font-semibold text-gray-300 capitalize">
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
