import { useAuth } from "../contexts/auth";
import Link from 'next/link';

export default function Header(props) {
  const { user, logout } = useAuth();
  if (props.user) {
    return (
      <header className="flex py-4 px-10 display bg-emerald-400">
        <h1 className="w-1/2 text-3xl font-bold text-gray-700 ">
          Cookie Stand Admin
        </h1>
        <div className="flex items-center gap-2">
        <Link href="/user" ><a className="px-3 py-1 text-gray-800 bg-emerald-100 rounded-lg">{user.username}</a></Link>
          <button
            className="px-2 py-1 rounded-md h-7 bg-emerald-600 text-gray-100 "
            onClick={logout}
          >
            Sign Out
          </button>
            <Link href="/overview"><a className="px-3 pt-1 bg-white rounded-md opacity-80 h-7">Overview</a></Link>
        </div>
      </header>
    );
  } else {
    return (
      <header className="px-8 py-4 bg-emerald-500">
        <h1 className="text-3xl font-bold text-gray-700 ">
          Cookie Stand Admin
        </h1>
      </header>
    );
  }
}


