import React, { useContext, useState } from "react";
import { useEffect } from "react";

import { info, SinglePage } from "../assets/data";

const AppContext = React.createContext();

const Context = ({children}) => {
  const [Products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(SinglePage);
  const [detail, setDetail] = useState(SinglePage);
  const [search, setSearch] = useState("")

  // const [data, setData] = useState({ name: "", email: "", password: "" });
  const handleSubmit = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const setProduct = () => {
    let tempproduct = [];
    info.forEach((item) => {
      const singleItem = { ...item };
      tempproduct = [...tempproduct, singleItem];
    });
    setProducts(tempproduct);
  };
  useEffect(() => {
    setProduct();
  }, []);

  const getItem = (id) => {
    const product = Products.find((item) => item.id === id);

    return product;
  };
  const handleDetail = (id) => {
    const product = getItem(id);
    console.log(product);

    setDetail( product);
    setModalOpen(true);
  };
  const AddToCart = (id) => {
    let tempproduct = [...Products];

    const index = tempproduct.indexOf(getItem(id));
    const productEl = tempproduct[index];

    productEl.deleteCart = true;

    productEl.count = 1;
    const price = productEl.price;
    productEl.total = price;
    setProducts(tempproduct);
    setCart([...cart, productEl]);
    addTotal();
  };
  const openModal = (id) => {
    const product = getItem(id);
    setModalProduct(product);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const increase = (id) => {
    let tempCart = [...cart];
    const selectItem = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectItem);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    setCart([...tempCart]);
    addTotal();
  };
  const decrease = (id) => {
    let tempCart = [...cart];
    const selectItem = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectItem);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      removeItem(id);
    } else {
      product.total = product.count * product.price;
      setCart([...tempCart]);
      addTotal();
    }
  };
  const removeItem = (id) => {
    let tempproduct = [...Products];
    let tempcart = [...cart];
    tempcart = tempcart.filter((item) => item.id !== id);
    const index = tempproduct.indexOf(getItem(id));
    let removeProduct = tempproduct[index];
    removeProduct.deleteCart = false;
    removeProduct.count = 0;
    removeProduct.total = 0;

    setCart([...tempcart]);
    setProducts([...tempproduct]);
    addTotal();
  };
  const clearItem = () => {
    setCart([]);

    setProduct();

    addTotal();
  };
  const addTotal = () => {
    let amount = 0;
    cart.map((item) => (amount += item.total));
    setCartTotal(amount);
  };
 const filteredItem = search ? Products.filter((item)=> item.title.toLowerCase().includes(search.toLowerCase())):Products
  return (
    <AppContext.Provider
      value={{
        count,
        setCount,
        handleSubmit,
        increase,
        decrease,
        removeItem,
        clearItem,
        cart,
        setCart,
        cartTotal,
        openModal,
        closeModal,
        modalOpen,
        modalProduct,
        Products,
        setProducts,
        detail,
        setDetail,
        AddToCart,
        handleDetail,
        search, setSearch, filteredItem
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => {
  return useContext(AppContext);
};

export { Context, AppContext };
