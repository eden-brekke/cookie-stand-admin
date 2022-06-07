import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head> 
      <Header />
      <main className="bg-emerald-50 flex flex-col items-center">
        <CookieForm />
        <ReportTable />
      </main>
      <Footer copyright="2022"/>
    </div>
  )
}

function Header(){
  return <header className="text-4xl font-medium bg-emerald-500 px-6 py-4">Cookie Stand Admin</header>
}

function CookieForm(){
  return (
    <form onSubmit="" className="w-full max-w-screen-lg bg-emerald-300 rounded px-5 py-3 my-10">
    <h1 className="text-center text-2xl font-medium">Create Cookie Stand</h1>
    <div className="flex flex-wrap ">
      <div className="w-full px-3 mb-5">
        <label className="tracking-wide text-gray-700 text-sm font-bold " htmlFor="Location">
          Location
        </label>
        <input className="placeholder-black w-full bg-gray-50 text-gray-700 rounded py-3 px-4 leading-tight h-1/2" Id="Location" type="string" placeholder="Barcelona" required='true'/>
      </div>
    </div>
    <div className="flex flex-wrap w-full mb-3">
      <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
        <label className="block text-center tracking-wide text-gray-700 text-sm font-bold mb-2">
          Minimum Customers Per Hour
        </label>
        <input className="placeholder-black w-full bg-gray-50 text-gray-700 rounded py-3 px-4 leading-tight h-1/2" Id="MinimumCustomersPerHour" type="text" placeholder="2" required='true'/>
      </div>
      <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
        <label className="block text-center tracking-wide text-gray-700 text-sm font-bold mb-2">
          Maximum Customers Per Hour
        </label>
        <input className="placeholder-black w-full bg-gray-50 text-gray-700 rounded py-3 px-4 leading-tight h-1/2" Id="MaximumCustomersPerHour" type="text" placeholder="4" required='true' />
      </div>
      <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
        <label className="block text-center tracking-wide text-gray-700 text-sm font-bold mb-2">
          Average Customers Per Sale
        </label>
        <input className="placeholder-black w-full bg-gray-50 text-gray-700 rounded py-3 px-4 leading-tight h-1/2" id="AverageCookiesPerHour" type="float" placeholder="2.5" required='true'/>
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

function ReportTable(){
  return (
  <div>
    <p className="mx-20 pl-96 pb-2.5">Report Table Coming Soon...</p>
    <p className=""> JSON coming soon :)</p>
  </div>
  )
}

function Footer(props){
  return (
    <footer className="px-8 py-4 bg-emerald-500 text-gray-900 font-medium">
      <p>&copy;{props.copyright}</p>
    </footer>
  )
}

