import useSWR, { mutate } from "swr";
//get fetcher
const fetcher = (...args) => fetch(...args).then((res) => res.json());

//post fetcher

const postFetcher = (url, payload) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload), // body data type must match "Content-Type" header
  }).then((res) => res.json());

export const fetchSubscribers = () => {
  const { data, error } = useSWR(
    `${process.env.BASE_URL_SUBSCRIBER}`,
    fetcher
    // ,
    // { refreshInterval: 3000 }
  );
  return { data, error };
};

export const subscribeNew = async (payload) => {
  try {
    let data = await fetcher(`${process.env.BASE_URL_SUBSCRIBER}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload), // body data type must match "Content-Type" header
    });
    mutate(`${process.env.BASE_URL_SUBSCRIBER}`);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
