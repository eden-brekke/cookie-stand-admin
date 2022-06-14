import Link from 'next/link';
export default function Overview(){
  return (
    <>
    <h1 className="text-center bg-emerald-400 text-4xl">No Overview right now. Stay Tuned, calm down. Do not tell mom.</h1>
    <Link href="/"><a className="flex flex-col items-center justify-center h-screen text-4xl uppercase text-bold" >Return to Main page</a></Link>
    </>
  )
}