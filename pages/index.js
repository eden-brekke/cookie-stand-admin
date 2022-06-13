import { hours } from '../data';
import Head from "next/head";
import { useAuth } from "../contexts/auth";
import useResource from "../hooks/useResource";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";


export default function Home() {
  const { user, login } = useAuth();
  const { resources, deleteResource } = useResource();
  const { createResource } = useResource();
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      {user ? (
        <>
          <Header user={user} />

          <Main
            resources={resources || []}
            deleteResource={deleteResource}
            formHandler={formHandler}
          />
          <Footer resources={resources} />
        </>
      ) : (
        <LoginForm login={login} />
      )}
    </>
  );

  function formHandler(event) {
    event.preventDefault();
    let newStore = {
      location: event.target.location.value,
      hourly_sales: CalcCookies(event),
      minimum_customers_per_hour: event.target.minimum_customers_per_hour.value,
      maximum_customers_per_hour: event.target.maximum_customers_per_hour.value,
      average_cookies_per_sale: event.target.AverageCookiesPerHour.value,
      owner: user.id,
      hours: hours,
      customersPerHour: CalcCustomers(event),
      totalCookies: salesTotals(),
    };


    function CalcCookies(event) {
      let salesNums = [];

      for (let i = 0; i < hours.length; i++) {
        salesNums.push(
          Math.ceil(CalcCustomers(event)[i] * event.target.AverageCookiesPerHour.value)
        );
      }
      return salesNums;
    }

    function salesTotals() {
      let totalCookies = 0;
      for (let i = 0; i < hours.length; i++) {
        totalCookies += CalcCookies(event)[i];
      }
      return totalCookies;
    }

    function randomCustNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function CalcCustomers(event) {
      let customersPerHour = [];
      for (let i = 0; i < hours.length; i++) {
        customersPerHour.push(
          randomCustNumber(
            event.target.minimum_customers_per_hour.value,
            event.target.maximum_customers_per_hour.value
          )
        );
      }
      return customersPerHour;
    }

    createResource(newStore);
  }

  function LoginForm({ login }) {
    async function handleSubmit(event) {
      event.preventDefault();
      login(event.target.username.value, event.target.password.value);
    }

    return (
      <form
        onSubmit={handleSubmit}
        className="relative justify-center w-full h-full max-w-screen-xl px-5 py-3 ml-auto mr-auto text-center border-4 border-solid rounded-lg top-56 bg-emerald-200 border-emerald-500"
      >
        <fieldset autoComplete="off" className="flex flex-col p-4">
          <label htmlFor="username" className="py-4 font-bold text-2xl">
            USER NAME
          </label>
          <input className="border border-2 border-emerald-200 placeholder-gray-300" id="username" placeholder="User Name" />
          <label htmlFor="password" className="py-4 font-bold text-2xl">
            PASSWORD
          </label>
          <input
            className="border border-2 border-emerald-200 placeholder-gray-300"
            placeholder="password"
            type="password"
            id="password"
          />
          <button className="py-4 mt-4 rounded p bg-emerald-500 font-bold">SIGN IN</button>
        </fieldset>
      </form>
    );
  }
}
