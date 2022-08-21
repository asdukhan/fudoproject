import type { NextPage } from 'next'
import MenuWrapper from "../components/menuWrapper";
import Header from '../components/Header';
import FormSection from '../components/FormSection';
import { CartProvider, useCart } from "react-use-cart";


const Home: NextPage = () => {

  return (
    <div>
      <CartProvider>
      <Header />
      <FormSection />
      <MenuWrapper />
      </CartProvider>
    </div>
  )
}

export default Home
