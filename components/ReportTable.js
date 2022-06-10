import { hours } from "../data";

export default function ReportTable(props) {
  // props.storeData

  if (props.resources.length > 0) {
    let sales = props.resources.map((hour, i) => {

      return hour.hourly_sales;
    });

    let storeTableData = props.resources.map((store, i) => {
      let salesHourly = sales[i].map((hour, i) => {
        return <td className="border-emerald-500 border-2" key={i}>{hour}</td>;
      });

      console.log(store.id);
      return (
        <tr key={i} className="even:bg-emerald-200 odd:bg-emerald-300 border-2 border-emerald-500">
          <td className="pl-4 pr-2 font-bold text-left border-2 border-emerald-500">
            {store.location}
            <DeleteButton
              deleteResource={props.deleteResource}
              id={store.id}
            />{" "}
          </td>
          {salesHourly}
          <td className="font-normal border-2 border-emerald-500">{store.totalCookies}</td>
        </tr>
      );
    });
    let result = sales.reduce(function (r, a) {
      a.forEach(function (b, i) {
        r[i] = (r[i] || 0) + b;
      });
      return r;
    }, []);
    let totalRow = result.map((hour, i) => {
      return (
        <td className="font-normal border-2 border-emerald-500 text-center" key={i}>
          {hour}
        </td>
      );
    });

    let grandGrandTotal = props.resources.map((total, i) => {
      return total.totalCookies;
    });

    let totalGrandTotal = grandGrandTotal.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );

    return (
      <table className="w-full max-w-screen-xl rounded table-fit bg-emerald-400 border-2 border-emerald-500">
        <thead>
          <td className="font-bold border-2 border-emerald-500">Location</td>
          {hours.map((hour, i) => {
            return (
              <th className="border-emerald-500 border-2" key={i}>
                {hour}
              </th>
            )
          })}
          <td className="font-bold border-2 border-emerald-500">Totals</td>
        </thead>

        <tbody className="border-2 border-emerald-500 text-center">{storeTableData}</tbody>

        <tfoot className="font-bold border-2 border-emerald-500">
          <td className="font-bold border-2 border-emerald-500">Totals</td>
          {totalRow}
          <td className="font-normal border-2 border-emerald-500 text-center">{totalGrandTotal}</td>
        </tfoot>
      </table>
    );
  }

  return <p>No Cookie Stands Available</p>;

  function DeleteButton(props) {
    function clickHandler() {
      props.deleteResource(props.id);
    }

    return (
      <button onClick={clickHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    );
  }
}
