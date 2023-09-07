
import CustomersBanner from "../components/Fragments/CustomersBanner";
import Navbar from "../components/Fragments/Navbar";
import ContactLayouts from "../components/Layouts/ContactLayouts";
import FooterLayouts from "../components/Layouts/FooterLayouts";
import HeroLayouts from "../components/Layouts/HeroLayouts";
import { useEffect } from "react";
import ServiceLayouts from "../components/Layouts/ServiceLayouts";

const HomePage = () => {
  
  useEffect(() => {
    document.title = 'Home Page';
  }, []);
  
  return (
    
    <div
      className="p-6 text-gray-900 bg-gray-100 font-body"
      id="body"
    >
      
      
      <Navbar></Navbar>
      
      <HeroLayouts />
      <CustomersBanner />
      <ServiceLayouts />
      
    
      
      <ContactLayouts />
      <FooterLayouts />
 
    </div>
    
  );
};

export default HomePage;
