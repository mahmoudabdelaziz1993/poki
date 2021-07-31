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
        {/* <!-- component --> */}
        <div className="md:flex md:items-center mb-6">
          <div className="flex w-full items-center justify-center bg-grey-lighter">
            <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-gray-600">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="mt-2 text-lg font-semibold">Upload Picture</span>
              <input type="file" className="hidden" {...register("file")} />
            </label>
          </div>
        </div>

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
