import Link from 'next/link';

export default function Header(){
  return ( 
    <>
    <header className="relative inset-x-0 top-0 flex justify-between p-2 bg-emerald-500">
      <h1 className="text-4xl font-medium bg-emerald-500 px-6 py-4">Cookie Stand Admin</h1>
      <div className="items-center pb-2 font-medium">
      <Link href="/overview">
        <button className='bg-emerald-50 text-zinc-600 px-4 py-1 font-medium rounded-md mx-2 my-5'>Overview</button>
      </Link>
      </div>
    </header>
    </>
    )
}