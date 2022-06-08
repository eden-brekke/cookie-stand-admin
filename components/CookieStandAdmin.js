import Header from "../components/Header"
import Footer from "../components/Footer"
import CookieForm from "../components/CookieForm"
import ReportTable from "../components/ReportTable"
import { useState } from "react";


export default function CookieStandAdmin(){
  const [cookieData, setCookieData] = useState([])
  // const [state, setState] = useState({
  //   standData: [],
  // });
  
  const [locations, setLocations] = useState([])
  let hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]



  function formHandler(event) {
    event.preventDefault();
    let newStand = {
      id: cookieData.length +1,
      location: event.target.Location.value,
      minCustomers: event.target.MinimumCustomersPerHour.value,
      maxCustomers: event.target.MaximumCustomersPerHour.value,
      avgCookies: event.target.AverageCookiesPerHour.value,
      hourly_sales:hourly_sales.map(hour=> Math.floor(Math.random() * (event.target.MaximumCustomersPerHour.value - event.target.MinimumCustomersPerHour.value) + event.target.MinimumCustomersPerHour.value))
    };
    console.log(newStand)
    setLocations([...locations,newStand]);
    setCookieData([...cookieData, newStand]);
    event.target.reset();
  }
  return (
    <>
    <Header />
    <Main  />
    <Footer totalLocations={cookieData.length}/>
    </>
  )

  function Main(){
    return (
      <main className="flex flex-col items-center py-4 pt-6 space-y-8 bg-emerald-50">
        <CookieForm formHandler={formHandler}/>
        <ReportTable cookieData={cookieData} />
      </main>
    )
  }
}