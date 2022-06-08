export default function Footer({totalLocations}){
  return (
    <footer className="px-8 py-4 bg-emerald-500 text-gray-900 font-medium">
      <p>{totalLocations} Locations World Wide</p>
    </footer>
  )
}