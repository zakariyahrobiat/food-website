import React, { useContext, useState, useRef } from "react";
import { useEffect } from "react";

import { info, SinglePage } from "../assets/data";

const AppContext = React.createContext();

const Context = ({children}) => {
  const [Products, setProducts] = useState([]);
  const [slider, setSlider] = useState([])
  const [count, setCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(SinglePage);
  const [detail, setDetail] = useState(SinglePage);
  const [search, setSearch] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const [show, setShow] = useState(false)
  
  const [error, setError ] = useState("")
  const [data, setData] = useState({ name: "", email: "", password: "", phone:"", cardNumber:"", cardName:"",cvv:"", date:"" });
  const ToggleShow=()=>{
  
    setShow(!show)
  }
  const dropdownRef = useRef(null);

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  useEffect(() => {
    setIsAuthenticated(!!token);
  }, [token]);
  
  const setAuthStatus = (newToken) => {
    if (newToken) {
      localStorage.setItem("token", newToken);
      setToken(newToken);
      setIsAuthenticated(true)
    } else {
      localStorage.removeItem("token")
      setToken(null);
      setIsAuthenticated(false) // This should now properly update
    }
  };
  
  

// const setAuthStatus=(token)=>{
// localStorage.setItem("token", token)
// setToken(token)
// setIsAuthenticated(true)
// }
// useEffect(() => {
 
//   if (token) {
//     setIsAuthenticated(true);
//   } else {
//     setIsAuthenticated(false);
//   }
// }, [token])
useEffect(()=>{
  if (error){
   const timer = setTimeout(()=>{
    setError("");}, 2000)
  
    return ()=> clearTimeout(timer)
  }
},[error, setError])
 
  const handleSubmit = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handlePaymentMethod =(method)=>{
    setPaymentMethod(method)
  }
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
    setSlider(info)
  }, []);

  const getItem = (id) => {
    const product = Products.find((item) => item.id === id);

    return product;
  };
  const handleDetail = (id) => {
    const product = getItem(id);
    console.log(product);

    setDetail( product);
  
  };

  const AddToCart = (id) => {
    let tempproduct = [...Products];
    const index = tempproduct.indexOf(getItem(id));
    const productEl = tempproduct[index];
  
    productEl.deleteCart = true;
    productEl.count = 1;
    productEl.total = productEl.price;
  
    setProducts(tempproduct);
  
    const updatedCart = [...cart, productEl];
    setCart(updatedCart);
  
   
    addTotal(updatedCart);
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
    
    const index = tempCart.indexOf(getItem(id));
    const product = tempCart[index];
  
    product.count += 1;
    product.total = product.count * product.price;
  
    setCart([...tempCart]);
  
    
    addTotal(tempCart);
  };
  
  const decrease = (id) => {
    let tempCart = [...cart];
        const index = tempCart.indexOf(getItem(id));
    const product = tempCart[index];
  
    product.count -= 1;
  
    if (product.count === 0) {
      removeItem(id);
    } else {
      product.total = product.count * product.price;
      setCart([...tempCart]);
      addTotal(tempCart);
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
   
    setCart(tempcart);
    setProducts([...tempproduct]);
    addTotal(tempcart);
  };

  const clearItem = () => {
    setCart([]);

    setProduct();

    addTotal();
  };

  const addTotal = (cartItems) => {
    let amount = 0;
    cartItems.forEach((item) => {
      amount += item.total;
    });
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
        handleDetail, ToggleShow, show, dropdownRef, setShow,
        search, setSearch, filteredItem, slider, data, paymentMethod, handlePaymentMethod, isAuthenticated, setAuthStatus, error, setError
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
