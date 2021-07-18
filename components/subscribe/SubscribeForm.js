import { useForm } from "react-hook-form";
import { subscribeNew } from "../../helpers/subscriberCalls";

function SubscribehtmlForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (payload) => {
    console.log("payload", payload);
    subscribeNew(payload);
  };

  return (
    <div className=" flex justify-center">
      {" "}
      <form className="w-full max-w-sm px-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3 flex ">
            <label
              className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 "
              htmlFor="inline-first-name"
            >
              First Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-700"
              id="inline-first-name"
              type="text"
              placeholder="Jane"
              {...register("FirstName")}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3 flex ">
            <label
              className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 "
              htmlFor="inline-last-name"
            >
              last Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-700"
              id="inline-last-name"
              type="text"
              placeholder="Doe"
              {...register("LastName")}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3 flex ">
            <label
              className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 "
              htmlFor="inline-full-name"
            >
              Full Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-700"
              id="inline-full-name"
              type="text"
              placeholder="JaneDoe789"
              {...register("SubscriberName")}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3 flex ">
            <label
              className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 "
              htmlFor="inline-email"
            >
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-700"
              id="inline-eamil"
              type="email"
              placeholder="JaneDoe789@example.com"
              {...register("Email")}
            />
          </div>
        </div>

        <div className="md:flex ">
          <div className="md:w-1/3 ">
            <button
              className="shadow bg-black hover:bg-gray-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SubscribehtmlForm;
