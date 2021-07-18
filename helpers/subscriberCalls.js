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
    `/api/subscriber`,
    fetcher
    // ,
    // { refreshInterval: 3000 }
  );
  return { data, error };
};

export const subscribeNew = async (payload) => {
  try {
    let data = await fetcher(`/api/subscriber`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload), // body data type must match "Content-Type" header
    });
    mutate(`/api/subscriber`);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
