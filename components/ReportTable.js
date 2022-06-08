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



