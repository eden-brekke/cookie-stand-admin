
// export default function CookieForm(props) {

//   return (
//     <form onSubmit={props.formHandler} className="w-full max-w-screen-lg bg-emerald-300 rounded-md px-5 py-3 my-10">
//       <h1 className="text-center text-2xl font-medium">Create Cookie Stand</h1>
//       <div className="flex flex-wrap ">
//         <div className="w-full px-3 mb-5">
//           <label className="tracking-wide text-gray-700 text-sm font-bold " htmlFor="location">
//             Add Location
//           </label>
//           <input className="placeholder-gray-400 w-full bg-gray-50 text-gray-700 rounded py-3 px-4 h-1/2" id="location" type="string" placeholder="location" required={true} />
//         </div>
//       </div>
//       <div className="flex flex-wrap w-full mb-3 ">
//         <div className="w-full md:w-1/4 px-3  mb-6 md:mb-0 bg-emerald-200 rounded-md">
//           <label className="block text-center tracking-wide text-gray-700 text-sm font-bold mb-2">
//             Minimum Customers Per Hour
//           </label>
//           <input className="placeholder-gray-400 w-full bg-gray-50 text-gray-700 rounded py-3 px-4 h-1/2" id="min" type="text" placeholder="Min Customers" required={true} />
//         </div>
//         <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0 bg-emerald-200 rounded-md">
//           <label className="block text-center tracking-wide text-gray-700 text-sm font-bold mb-2">
//             Maximum Customers Per Hour
//           </label>
//           <input className="placeholder-gray-400 w-full bg-gray-50 text-gray-700 rounded py-3 px-4 h-1/2" id="max" type="text" placeholder="Max Customers" required={true} />
//         </div>
//         <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0 bg-emerald-200 rounded-md">
//           <label className="block text-center tracking-wide text-gray-700 text-sm font-bold mb-2">
//             Average Cookies Per Sale
//           </label>
//           <input className="placeholder-gray-400 w-full bg-gray-50 text-gray-700 rounded py-3 px-4 h-1/2" id="avg" type="float" placeholder="Average Cookies(ex:1.0)" required={true} />
//         </div>
//         <div className="h-100 w-full md:w-1/4 ">
//           <button type="submit" className="h-full block w-full bg-emerald-500 text-gray-700  rounded-md font-bold ">
//             Create Stand
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// }

export default function CookieForm(props) {
  return (
    <form
      onSubmit={props.onSubmit}
      className="w-full max-w-screen-xl px-5 py-3 border-4 border-solid rounded-lg bg-emerald-200 border-emerald-300 "
    >

      <div className="flex flex-wrap ">
        <div className="w-3/4 px-3 text-center">
          <label
            className="text-s font-bold tracking-wide text-gray-700 "
            htmlFor="location"
          >
            ADD LOCATION
          </label>
          <input
            className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 placeholder-gray-300 rounded appearance-none bg-white-200 font-bold"
            id="location"
            type="string"
            placeholder="Cookie Stand Location"
            required
          />
        </div>

        <div className="flex items-center justify-center w-full h-100 md:w-1/4">
          <button
            type="submit"
            className="block w-full py-3 text-gray-700 rounded bg-emerald-500 font-bold"
          >
            CREATE STAND
          </button>
        </div>
      </div>

      <div className="flex flex-wrap mb-3 ">
        <div className="w-full px-3 py-3 mb-6 rounded md:w-1/3 md:mb-0 ">
          <label className="block mb-2 text-s font-bold tracking-wide text-center text-gray-700">
            MINIMUM CUSTOMERS PER HOUR
          </label>
          <input
            className="w-full px-4 py-3 leading-tight text-gray-700 placeholder-black rounded appearance-none bg-white-200"
            id="minimum_customers_per_hour"
            type="text"
            placeholder="0"
            required
          />
        </div>

        <div className="w-full px-3 py-3 mb-6 rounded b md:w-1/3 md:mb-0 ">
          <label className="block mb-2 text-s font-bold tracking-wide text-center text-gray-700">
            MAXIMUM CUSTOMERS PER HOUR
          </label>
          <input
            className="w-full px-4 py-3 leading-tight text-gray-700 placeholder-black border border-gray-200 rounded appearance-none bg-white-200"
            id="maximum_customers_per_hour"
            type="text"
            placeholder="0"
            required
          />
        </div>

        <div className="w-full px-3 py-3 mb-6 rounded md:w-1/3 md:mb-0">
          <label className="block mb-2 text-s font-bold tracking-wide text-center text-gray-700">
            AVERAGE COOKIES PER SALE
          </label>
          <input
            className="w-full px-4 py-3 leading-tight text-gray-700 placeholder-black border border-gray-200 rounded appearance-none bg-white-200"
            id="AverageCookiesPerHour"
            type="float"
            placeholder="0"
            required
          />
        </div>
      </div>
    </form>
  );
}