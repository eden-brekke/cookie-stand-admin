export default function Footer(props) {
  if (props.resources) {
    if (props.resources.length < 2) {
      return (
        <footer className="sticky px-8 py-4 bg-emerald-500 bott-0">
          <p className="text-s text-center text-gray-900 font-semibold">
            {props.resources.length} LOCATION WORLD WIDE
          </p>
        </footer>
      );
    } else {
      return (
        <footer className="sticky px-8 py-4 bg-emerald-500 bott-0">
          <p className="text-s text-center text-gray-900 font-semibold">
            {props.resources.length} LOCATIONS WORLD WIDE
          </p>
        </footer>
      );
    }
  }
}
