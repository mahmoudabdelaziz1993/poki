import Link from "next/link";
import Layout from "../../components/Layout";

function pokemons({ pokemons, count }) {
  return (
    <Layout>
      <div className="mx-5 py-1 rounded-lg w-max mb-5">
        <h1 className="text-xl capitalize italic text-gray-800 font-bold ">
          Pokemons list
        </h1>
        <p className="font-medium text-gray-400">
          <span className="font-semibold">{count}</span>
          {""} pokemons
        </p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-5 px-5">
        {pokemons.map(({ name, url, image, id }, index) => (
          <Link href={`/pokemon/${id}`} key={index}>
            <div className="group cursor-pointer">
              <h3 className="font-semibold text-xl m text-gray-700 capitalize">
                {name}
              </h3>
              <div className=" transition-all duration-500 ease-in-out hidden group-hover:block w-10 rounded-md h-1 bg-red-500"></div>
              <div>
                <img
                  className="object-fill h-60 w-full"
                  src={image}
                  alt={name}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export default pokemons;
export async function getStaticProps() {
  try {
    let response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
    );
    let { results, count } = await response.json();
    let pokemons = results.map((item, index) => {
      let templateId = ("00" + (index + 1)).slice(-3);
      let image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${templateId}.png`;
      return {
        ...item,
        image,
        id: parseInt(index) + 1,
      };
    });
    return {
      props: { pokemons, count },
    };
  } catch (error) {
    console.error(error);
  }
}
