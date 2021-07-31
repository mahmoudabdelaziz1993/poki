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

export const fetchregisters = () => {
  const { data, error } = useSWR(
    `/api/register`,
    fetcher
    // ,
    // { refreshInterval: 3000 }
  );
  return { data, error };
};

const getFormData = (object) => {
  const formData = new FormData();
  Object.keys(object).forEach((key) => formData.append(key, object[key]));
  return formData;
};

export const subscribeNew = async (payload) => {
  let dataform = getFormData(payload);
  try {
    let data = await fetcher(`/api/register`, {
      method: "POST",
      headers: {
        Accept: "application/json, application/xml, text/plain, text/html, *.*",
        "Content-Type": "multipart/form-data",
      },
      body: JSON.stringify(payload), // body data type must match "Content-Type" header
    });
    mutate(`/api/register`);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
