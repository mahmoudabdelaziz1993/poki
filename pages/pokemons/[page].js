import Link from "next/link";
import Layout from "../../components/Layout";

function pokemonslist({ pokemons, count, next, previous, page }) {
  return (
    <Layout>
      <div className="mx-5 py-1 rounded-lg w-max mb-5">
        <h1 className="text-xl capitalize italic text-gray-800 font-bold ">
          Pokemons list
        </h1>
        <p className="font-medium text-gray-400 italic capitalize">
          <span className="text-xs font-semibold">+ 1000</span>
          {""} known pokemons
        </p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-5 px-5">
        {pokemons.map(({ name, url, image, id }, index) => (
          <Link href={`/pokemon/${id}`} key={index}>
            <div className="group cursor-pointer bg-gray-700 rounded-md">
              <h3 className="font-semibold text-xl m text-gray-100 pl-3 pt-3 capitalize">
                {name}
              </h3>
              <div className=" my-1 transition-all duration-500 ease-in-out  group-hover:bg-red-500 w-10 rounded-r-md h-1 "></div>
              <div>
                <img
                  className="object-contain h-60 w-full"
                  src={image}
                  alt={name}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex px-3 py-5">
        <Link href={`/pokemons/${parseInt(page) - 1}`}>
          <button className="text-red-500 disabled:text-gray-400" disabled={previous === null} >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </Link>
        <div className="flex-grow"></div>
        <Link href={`/pokemons/${parseInt(page) + 1}`}>
          <button className="text-red-500 disabled:text-gray-400" disabled={next === null}>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
        </Link>
      </div>
    </Layout>
  );
}

export default pokemonslist;

export async function getStaticPaths() {
  let response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  );
  let { count } = await response.json();
  let dummy = new Array(count).fill(0);

  const paths = dummy.map((item, index) => ({
    params: {
      page: index.toString(),
    },
  }));
  console.log("paths ;", paths);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  console.log("params 2;", params);

  try {
    let response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${parseInt(params.page) * 20
      }&limit=20`
    );
    let { results, count, next, previous } = await response.json();
    let pokemons = results.map((item, index) => {
      let offset = parseInt(params.page) * 20;
      let id = parseInt(index) + 1;
      let compination = parseInt(id) + parseInt(offset);
      let templateId = ("00" + compination).slice(-3);
      let image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${templateId}.png`;
      return {
        ...item,
        image,
        id: compination,
      };
    });
    return {
      props: { pokemons, count, next, previous, page: params.page },
    };
  } catch (error) {
    console.error(error);
  }
}
