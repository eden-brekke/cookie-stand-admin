

export default function CookieForm({ formHandler }) {

  return (
    <form onSubmit={formHandler} className="w-full max-w-screen-lg bg-emerald-300 rounded-md px-5 py-3 my-10">
      <h1 className="text-center text-2xl font-medium">Create Cookie Stand</h1>
      <div className="flex flex-wrap ">
        <div className="w-full px-3 mb-5">
          <label className="tracking-wide text-gray-700 text-sm font-bold " htmlFor="Location">
            Location
          </label>
          <input className="placeholder-gray-400 w-full bg-gray-50 text-gray-700 rounded py-3 px-4 h-1/2" Id="Location" type="string" placeholder="Location" required='true' />
        </div>
      </div>
      <div className="flex flex-wrap w-full mb-3 ">
        <div className="w-full md:w-1/4 px-3  mb-6 md:mb-0 bg-emerald-200 rounded-md">
          <label className="block text-center tracking-wide text-gray-700 text-sm font-bold mb-2">
            Minimum Customers Per Hour
          </label>
          <input className="placeholder-gray-400 w-full bg-gray-50 text-gray-700 rounded py-3 px-4 h-1/2" Id="MinimumCustomersPerHour" type="text" placeholder="Min Customers" required='true' />
        </div>
        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0 bg-emerald-200 rounded-md">
          <label className="block text-center tracking-wide text-gray-700 text-sm font-bold mb-2">
            Maximum Customers Per Hour
          </label>
          <input className="placeholder-gray-400 w-full bg-gray-50 text-gray-700 rounded py-3 px-4 h-1/2" Id="MaximumCustomersPerHour" type="text" placeholder="Max Customers" required='true' />
        </div>
        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0 bg-emerald-200 rounded-md">
          <label className="block text-center tracking-wide text-gray-700 text-sm font-bold mb-2">
            Average Customers Per Sale
          </label>
          <input className="placeholder-gray-400 w-full bg-gray-50 text-gray-700 rounded py-3 px-4 h-1/2" id="AverageCookiesPerHour" type="float" placeholder="Average Cookies(ex:1.0)" required='true' />
        </div>
        <div className="h-100 w-full md:w-1/4 ">


          <button type="submit" className="h-full block w-full bg-emerald-500 text-gray-700  rounded-md font-bold ">
            Create
          </button>
        </div>
      </div>
    </form>
  )
  }