import { useState } from 'react';
import Head from 'next/head';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import About from '../components/About';
import Content from '../components/Content';

export default function Home() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState('');
  const [data, setData] = useState([]);

  const handleAuth = (_user, _token, _data) => {
    if(_user) setCurrentUser(_user);
    if(_data) setData(_data)
    if(_token) setToken(_token)
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setToken('');
    setData([]);
  };

  return (
    <div id='container'>
      <Head>
        <title>Volume Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header
          currentUser={currentUser}
          handleLogout={handleLogout}
        />
        <About />
        <Content
          data={data}
          user={currentUser}
          handleAuth={handleAuth}
          token={token}
          setData={setData}
        />
        <Footer />
      </div>
    </div>
  )
}