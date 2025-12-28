import Navbar from "./Components/Navbar/Navbar"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Shop from "./Pages/Shop"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"
import Footer from "./Components/Footer/Footer"
import men_banner from "./assets/banner.jpg"
import women_banner from "./assets/women_banner.avif"
import kids_banner from "./assets/kids_banner.jpg"
import About from "./Components/About/About"
import Offices from "./Components/Offices/Offices"
import Contact from "./Components/Contact/Contact"
import Company from "./Components/Company/Company"
import Payment from "./Components/Payment/Payment"

function App() {
 
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/> }/>
        <Route path="/womens" element={<ShopCategory banner={women_banner}category="women"/>}/>
        <Route path="/kids" element={<ShopCategory banner={kids_banner}category="kid"/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Offices" element={<Offices/>}/>
        <Route path="/Company" element={<Company/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/payment" element={<Payment/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
     
  )
}

export default App
