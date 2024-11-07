import React, { useState } from 'react';
import Modal from './Modal';
import NavBar from './NavBar';
//import { NavBar } from 'flowbite-react';

const Products = ({ fetchDatas }) => {
    const [cartCount, setCartCount] = useState(0);
    const [open, setOpen] = React.useState(false);
    const [status, setStatus] = useState(true);
    const [cartProducts, setCartProducts] = useState([]);


    const handleClose = () => {
        setOpen(false);
    }
    const removeCart = (indexPos) => {
        setCartProducts((pval) => pval.filter((item, index) => index !== indexPos))
        setStatus(true);
        setCartCount((val) => val - 1);
    }

    const addCart = (indexof) => {
        setStatus(false);
        setCartCount((val) => val + 1);
        setCartProducts([...cartProducts, indexof]);
        cartProducts.map((item, index) => {
            if (item.id === indexof.id) {
                setCartCount((val) => val - 1);
                setCartProducts(
                    cartProducts.filter((item) => item.id === indexof.id)
                );
                setCartProducts([...cartProducts]);
                alert(`Item already added to the cart`)

            }
        })
    };
    return (
        <>
            <NavBar open={open} setOpen={setOpen} cartCount={cartCount} setCartCount={setCartCount} />
            <div className="grid grid-cols-4 sm:flex-row lg:grid-cols-4 gap-4 auto-rows-auto m-24 hp_c">
                {
                    fetchDatas.map((item, index) => {
                        return (
                            <>
                                {<div key={item.id} className="w-full cs_pad max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
                                    <a href="#" className='w-12'>
                                        <img className="p-8 rounded-t-lg w-32 mx-auto p_img" src={item.image} alt="product image" />
                                    </a>
                                    <div className="py-5 pb-5">
                                        <a href="#">
                                            <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                                            <h4 className="text-xs font-bold text-gray-900 dark:text-white">&#8377; {item.price}</h4>
                                        </a>
                                        <div className="flex items-center justify-between py-5">
                                            <a onClick={() => addCart(item)} id={item.id} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">Add to cart</a>
                                            {/* {ale ?"": alert("already added to cart")} */}
                                        </div>
                                    </div>
                                </div>}
                            </>
                        )
                    })
                }
                <Modal isOpen={open} onClose={handleClose} cartCount={cartCount} setCartCount={setCartCount} cartProducts={cartProducts}  >
                    {
                        cartProducts.map((item_id, index_id) => {
                            if (cartProducts !== "") {
                                return (
                                    <>
                                        {<div key={index_id} className="flex flex-row w-full cs_pad max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-11" >
                                            <a href="#">
                                                <img className="p-10 rounded-t-lg w-10 mx-auto" src={item_id.image} alt="product image" />
                                            </a>
                                            <a href="#">
                                                <div className="px-10 py-5 pb-5 flex-1">
                                                    <span className="px-10 text-sm font-semibold tracking-tight text-gray-900 dark:text-white">{item_id.title}</span>
                                                    <span className="px-10 mx-10 text-xs font-bold text-blue-900 dark:text-white">&#8377; {item_id.price}</span>
                                                </div>
                                            </a>
                                            <div className="flex-1 justify-between py-5 mx-10 relative">
                                                <a onClick={() => removeCart(index_id)} id={item_id.id} className="text-white mx-5 px-4 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 absolute right-0 cursor-pointer">Remove</a>
                                            </div>
                                        </div>}
                                    </>
                                )
                            }
                        })
                    }
                </Modal>
            </div>
        </>
    );
};

export default Products;