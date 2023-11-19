import { useRef } from "react";

function Form() {
  const input = useRef();
  const handleSubmit = (e) => {
    e.preventDefault;
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Add Items:
        </label>
        <div className="flex gap-1 items-center">
          <input
            ref={input}
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            placeholder="Text"
            required
          />

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex-shrink-0"
          >
            Add Item
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
