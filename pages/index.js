import {useState} from 'react';

import Head from 'next/head';
import styles from '../styles/globals.css';

import Header from '../partials/Header';
import Footer from '../partials/Footer';

import About from '../components/About';
import Content from '../components/Content';


 

export default function Home() {
  const[currentUser, setCurrentUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState('');
  const [password, setPassword] = useState(null);
  const [data, setData] = useState([]);



  const handleAuth = user => {
    console.log("handling authentication...")
    if(user) {
      setCurrentUser(user);
      setIsAuthenticated(true);
      
    } else {
      setCurrentUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem('jwtToken');
    }
  }

  return (
    <div>
      <Head>
        <title>Volume Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div >
        <Header
          setData={setData}
          setPassword={setPassword}
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
          handleAuth={handleAuth}
          setToken={setToken}
        />
        <About />
        <Content
          setData={setData}
          data={data}
          user={currentUser}
          password={password}
          setPassword={setPassword}
          setCurrentUser={setCurrentUser}
          isAuthenticated={isAuthenticated}
          handleAuth={handleAuth}
          token={token}
          setToken={setToken}
        />
        <Footer />
      </div>
    </div>
  )
}
