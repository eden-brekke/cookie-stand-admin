import Header from "../components/Header"
import Footer from "../components/Footer"
import CookieForm from "../components/CookieForm"
import ReportTable from "../components/ReportTable"
import { useState } from "react";
import useResource from "../hooks/useResource"
import { hours } from '../data.js';
import { useAuth } from "../contexts/auth";

export default function CookieStandAdmin({ user, logout}){

  const { createResource } = useResource();

  const [cookieData, setCookieData] = useState([])
  // const [state, setState] = useState({
  //   standData: [],
  // });
  
  const [locations, setLocations] = useState([])
  // let hourly_sales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  //48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36

  // const { user } = useAuth();

  function formHandler(event) {
    event.preventDefault();
    let newStand = {
      id: cookieData.length +1,
      location: event.target.location.value,
      minimum_customers_per_hour: parseInt(event.target.min.value),
      maximum_customers_per_hour: parseInt(event.target.max.value),
      average_cookies_per_sale: parseFloat(event.target.avg.value),
      hourly_sales:hours.map(hour=> Math.floor(Math.random() * (event.target.max.value - event.target.min.value) + event.target.min.value)),
      owner: user.id
    };
    console.log(newStand)
    setLocations([...locations,newStand]);
    setCookieData([...cookieData, newStand]);
    createResource(newStand);
    event.target.reset();
  }
  return (
    <>
    <Header user={user} logout={logout} />
    <Main  />
    <Footer totalLocations={cookieData.length}/>
    </>
  )

  function Main(){
    const { resources, deleteResource } = useResource();
    return (
      <main className="flex flex-col items-center py-4 pt-6 space-y-8 bg-emerald-50">
        <CookieForm formHandler={formHandler} />
        <ReportTable cookieData={cookieData} stand={resources || []} deleteStand={deleteResource}/>
      </main>
    )
  }
}
