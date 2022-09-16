import Link from "next/link";
import Layout from "../../components/Layout";

function Pokemonslist({ pokemons, count, next, previous, page }) {
  return (
    <Layout>
      <div className="py-1 mx-5 mb-5 rounded-lg w-max">
        <h1 className="text-xl italic font-bold text-gray-800 capitalize ">
          Pokemons list
        </h1>
        <p className="italic font-medium text-gray-400 capitalize">
          <span className="text-xs font-semibold">+ 1000</span>
          {""} known pokemons
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 px-5 md:grid-cols-4">
        {pokemons.map(
          ({ name, url, image, id }, index) =>
            id < 899 && (
              <Link href={`/pokemon/${id}`} key={index}>
                <div className="bg-black rounded-md cursor-pointer group">
                  <h3 className="pt-3 pl-3 text-xl font-semibold text-gray-100 capitalize truncate m">
                    {name}
                  </h3>
                  <div className="w-10 h-1 my-1 transition-all duration-500 ease-in-out  group-hover:bg-red-500 rounded-r-md"></div>
                  <div>
                    <img
                      className="object-contain w-full h-60"
                      src={image}
                      alt={name}
                    />
                  </div>
                </div>
              </Link>
            )
        )}
      </div>
      <div className="flex px-3 py-5">
        <Link href={`/pokemons/${parseInt(page) - 1}`}>
          <button
            className="text-red-500 disabled:text-gray-400"
            disabled={previous === null}
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </Link>
        <div className="flex items-center justify-center flex-grow">
          <span className="px-3 text-4xl italic font-extrabold">
            {parseInt(page) + 1}
          </span>
          <span className="text-sm font-medium text-gray-600 capitalize">
            of {Math.round(parseInt(898) / 20)}
          </span>
        </div>
        <Link href={`/pokemons/${parseInt(page) + 1}`}>
          <button
            className="text-red-500 disabled:text-gray-400"
            disabled={next === null}
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </Layout>
  );
}

export default Pokemonslist;

export async function getStaticPaths() {
  // let response = await fetch(
  //   "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  // );
  // let { count } = await response.json();
  let dummy = new Array(Math.round(parseInt(898) / 20)).fill(0);

  const paths = dummy.map((item, index) => ({
    params: {
      page: index.toString(),
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  try {
    let response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${
        parseInt(params.page) * 20
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
