import React from "react";

const Modal = ({ show, setShow, value, handleSubmit, handleVerify }) => {
  return (
    <div>
      <div>
        {show ? (
          <div
            className="py-12 bg-gray-700 bg-opacity-50 dark:bg-gray-900 transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0 grid place-items-center w-full min-h-full"
            id="modal"
          >
            <div
              role="alert"
              className="container mx-auto w-3/5 md:w-1/2 max-w-3xl scale-[1.4]"
            >
              <div className="relative py-8 px-8 md:px-16 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400">
                <div className="w-full flex justify-center text-green-400 mb-4">
                  <img
                    src="https://i.ibb.co/dWSDszJ/tom-cruise.jpg"
                    className="w-1/5 h-1/5 rounded-full"
                  />
                </div>
                <h1 className="text-center text-3xl text-gray-800 dark:text-gray-100 font-bold tracking-normal leading-tight mb-2">
                  Tom Cruse
                </h1>
                {value==="age" ? (
                  <>
                    <form onSubmit={handleSubmit} className='grid place-items-center space-y-4 mt-2'>
                        <input type='date' name="birthdate" className='w-2/5 border border-slate-300 rounded p-2' />
                        <button
                        className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-800 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-lg sm:text-xl"
                        type="submit"
                        // onClick={() => setShow(!show)}
                      >
                        Submit
                      </button>
                    </form>
                  </>
                ) : (
                  <>
                    <p className="mb-5 text-xl text-gray-600 dark:text-gray-400 text-center font-normal">
                      Thank you for registration.
                    </p>
                    <div className="flex items-center justify-center w-full">
                      <button
                        className="focus:outline-none transition duration-150 ease-in-out hover:bg-green-800 bg-green-700 rounded text-white px-4 sm:px-8 py-2 text-lg sm:text-xl"
                        onClick={handleVerify}
                      >
                        Yes
                      </button>
                      <button className="focus:outline-none ml-3 bg-red-600 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-150 text-white dark:text-gray-400 ease-in-out hover:border-gray-400 hover:bg-red-700 border rounded px-8 py-2 text-lg sm:text-xl">
                        No
                      </button>
                    </div>
                  </>
                )}

                <div
                  className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-500 transition duration-150 ease-in-out"
                  onClick={() => setShow(!show)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Close"
                    className="icon icon-tabler icon-tabler-x"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Modal;
