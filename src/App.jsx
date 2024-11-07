import React, { useEffect, useState } from 'react';
import Products from './Components/Products';
import Modal from './Components/Modal';
import NavBar from './Components/NavBar';
import axios from 'axios';

const App = () => {

  const [cartCount, setCartCount] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [fetchDatas, setFetchdatas] = useState([]);
  const handleOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    await axios.get('https://fakestoreapi.com/products')
      .then(res => setFetchdatas(res.data))
      .catch(error => console.log(error))

  }

  return (
    <div>
      <NavBar open={open} setOpen={setOpen} cartCount={cartCount} setCartCount={setCartCount} />
      <div className="mx-36">
        <Products fetchDatas={fetchDatas} setFetchdatas={setFetchdatas} />
        <Modal fetchDatas={fetchDatas} setFetchdatas={setFetchdatas} />
      </div>
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="text-center w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">HKX</a>. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default App;