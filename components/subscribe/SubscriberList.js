import { fetchSubscribers } from "../../helpers/subscriberCalls";
import Image from "next/image";
function SubscriberList() {
  let { data, error } = fetchSubscribers();
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  // render data

  console.table(data.list);
  return (
    //    <div>hello {data.data.length}!</div>
    <div className="flex justify-center flex-col gap-4  py-4 items-center">
      {data.list.map(({ SubscriberName, FirstName, _id, avatar }, index) => (
        <div className="flex w-80 h-28 items-center" key={_id} id={_id}>
          <Image
            className="m-3 rounded-full object-fill"
            width="100"
            height="100"
            src={avatar}
          />

          <div className="flex flex-col justify-center pl-4">
            <h6 className="truncat text-xl font-bold">{FirstName}</h6>
            <h6 className="truncate font-bold text-gray-500">
              &#64; {SubscriberName}
            </h6>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SubscriberList;
