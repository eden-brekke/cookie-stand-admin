import CookieForm from "./CookieForm";
import ReportTable from "./ReportTable";
export default function Main(props) {
  
  
  return (
    <main className="flex flex-col items-center justify-center py-4 pt-6 space-y-8 place-content-center ">
      
      {props.resources  ?
      <>
      <CookieForm onSubmit={props.formHandler} />
      <ReportTable 
      resources={props.resources} 
      deleteResource={props.deleteResource} 
      />
      </>
      :
      <p>We have run out of resources, heck, panic, panikkkkk!</p>}
    
    </main>
  );
}