import { hours } from "../data";
export default function ReportTable(props) {
  function hourlyTotalCal() {
    let totalAllHours = 0;
    let hourlyTotal = []
    for (let i = 0; i < hours.length; i++) {
      let sumHour = 0;
      props.cookieData.map(element => {
        sumHour += element.hourly_sales[i]
      })
      hourlyTotal[i] = sumHour
    }
    totalAllHours = hourlyTotal.reduce((accumulator, currentValue) => accumulator + currentValue)
    hourlyTotal[hours.length] = totalAllHours;
    return (hourlyTotal)
  }

  function createTable() {
    return (
      <table className='col-span-2 col-start-3 m-2 bg-emerald-500 rounded-lg'>
        <thead>
          <tr className=''>
            <td className=' font-bold px-3 text-center'>
              Location
            </td>
            {hours.map(hour => {
              return (
                <td className=' px-4 font-bold' key={hour}>
                  {hour}
                </td>
              );
            })}
            <td className=' font-bold'>
              Totals
            </td>
          </tr>
        </thead>
        <tbody>
          {props.cookieData.map(stand => {
            return (
              <tr className='border-2 border-gray-500 even:bg-emerald-300 odd:bg-emerald-400' key={stand}>
                <td className='flex justify-between font-medium px-1'>
                  {stand.location}

                  <DeleteButton deleteStand={props.deleteStand} id={stand.id}/>
                </td>
                {
                  stand.hourly_sales.map(hourSale => {
                    return (
                      <td className='font-normal border-2 border-gray-500 rounded-md text-center' key={hourSale}>
                        {hourSale}
                      </td>
                    );
                  })
                }
                <td className="text-center">
                  {
                    stand.hourly_sales.reduce((accumulator, currentValue) => accumulator + currentValue)
                  }
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr className='border-2 border-gray-500'>
            <td className='border-2 border-gray-500 font-bold px-3 text-center'>
              Totals
            </td>
            {hourlyTotalCal().map(totalTotals => {
              return (
                <td className='border-2 border-gray-500 font-bold px-3 text-center' key={totalTotals}>
                  {totalTotals}
                </td>
              )
            })}
          </tr>
        </tfoot>
      </table>
    );
  }
  function resultTable() {
    if (props.cookieData.length == 0) {
      return (
        <p className="text-2xl font-semibold my-5 py-3">No Cookies Stands Available</p>
      );
    }
    else {
      return createTable()
    }
  }
  return (
    resultTable()
  )
}

function DeleteButton(props) {
  function clickHandler() {
    props.deleteStand(props.id);
  }
  return (
    <button onClick={clickHandler}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg></button>
  )
}

