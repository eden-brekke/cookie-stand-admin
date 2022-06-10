import Head from "next/head";
import CookieStandAdmin from "../components/CookieStandAdmin"
import LoginForm from "../components/LoginForm"
import { useAuth } from '../contexts/auth'
import { useState } from 'react';

export default function Home() {
  const { user, login, logout } = useAuth();
  const [userName, setUserName] = useState(false);
  async function handleLogin(username, password){
    setUserName(username)
    login(username, password)
  }

  function handleLogout(){
    logout()
    setUserName(false)
  }
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      {userName ? <CookieStandAdmin user={userName} logout={handleLogout} /> : <LoginForm onLogin={handleLogin}/> }
      
    </>
  )
}

