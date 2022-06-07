import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head> 
      <Header />
      <main>
        <CookieForm/>
      </main>
      <Footer />
    </div>
  )
}

function Header(){
  return <h1>Header</h1>
}

function CookieForm(){
  return <h1>Cookie Form</h1>
}

function Footer(){
  return <h1>Footer</h1>
}

