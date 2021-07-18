import { fetchSubscribers } from "../../helpers/subscriberCalls";
function SubscriberList() {
  let { data, error } = fetchSubscribers();
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  // render data
  return (
    //    <div>hello {data.data.length}!</div>
    <div className="flex justify-center flex-col gap-4  py-4 items-center">
      {data.data.map(({ SubscriberName, FirstName, _id }, index) => (
        <div
          className="bg-black text-gray-200 w-52 h-12 flex flex-col px-3 rounded-md "
          key={_id}
          id={_id}
        >
          <h6 className="truncate font-bold">{FirstName}</h6>
          <h6 className="truncate font-bold text-gray-500">
            &#64; {SubscriberName}
          </h6>
        </div>
      ))}
    </div>
  );
}

export default SubscriberList;
