import Layout from "../../components/Layout";
import { useRouter } from "next/router";
function pokemon({ name, height, weight, abilities, image }) {
  const router = useRouter();
  return (
    <Layout title={name}>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <img className="object-contain h-60 w-full" src={image} alt={name} />
        </div>
        <div className="flex-col px-3">
          <h1 className="font-bold md:text-5xl text-lg  capitalize mb-5 ">
            {name}
          </h1>
          <div className="flex justify-between my-3">
            <div className="font-normal text-gray-400">weight</div>
            <div className="font-normal text-gray-400">{weight}</div>
          </div>
          <div className="flex justify-between my-3">
            <div className="font-normal text-gray-400">height</div>
            <div className="font-normal text-gray-400">{height}</div>
          </div>
          <h3 className="font-bold capitalize mb-3">abilities</h3>
          <div className="grid auto-cols-max grid-flow-col gap-2">
            {abilities.map(({ ability }, index) => (
              <div
                className="text-center bg-gray-600 text-white font-semibold rounded-md capitalize px-2 py-2 font-mono"
                key={index}
              >
                {ability.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex  flex-row-reverse px-3 py-5">
        <a
          className="text-red-500 cursor-pointer"
          onClick={() => router.back()}
        >
          <svg
            className="w-6 h-6"
            fill="red"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
        </a>
      </div>
    </Layout>
  );
}

export default pokemon;

export async function getStaticPaths() {
  // let response = await fetch(
  //   "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  // );
  // let { count } = await response.json();
  let dummy = new Array(898).fill(0);

  const paths = dummy.map((item, index) => ({
    params: {
      id: (index + 1).toString(),
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  try {
    let response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${params.id}`
    );
    let { name, height, weight, abilities } = await response.json();
    let templateId = params.id < 100 ? ("00" + params.id).slice(-3) : params.id;
    let image =
      templateId < 899
        ? `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${templateId}.png`
        : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png";

    return {
      props: {
        height,
        weight,
        abilities,
        image,
        name,
      },
    };
  } catch (error) {
    console.error(error);
  }
}
