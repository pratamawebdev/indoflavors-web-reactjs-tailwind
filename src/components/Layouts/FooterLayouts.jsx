const FooterLayouts = () => {
    return (
      <div className="absolute inset-x-0 py-4 text-sm text-center text-gray-800 bg-gray-300 md:text-md">
        
        <h1 className = "text-lg ">Connect with us:</h1>
        <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-5">
          <div className="cursor-pointer hover:text-red-700"><a href="#"><ion-icon name="logo-linkedin"></ion-icon> LinkedIn</a></div>
          <div className="cursor-pointer hover:text-red-700"><a href="#"><ion-icon name="logo-github"></ion-icon> Github</a></div>
          <div className="cursor-pointer hover:text-red-700"><a href="#"><ion-icon name="logo-twitter"></ion-icon> Twitter</a></div>
          <div className="cursor-pointer hover:text-red-700"><a href="#"><ion-icon name="logo-instagram"></ion-icon> Instagram</a></div>
          <div className="cursor-pointer hover:text-red-700"><a href="#"><ion-icon name="logo-youtube"></ion-icon> YouTube</a></div>
        </div>
        <h2 className = "mt-4">Copyright © 2023 <span className="text-red-700">Pratamawebdev</span></h2>
      </div>
    )
  }
  
  export default FooterLayouts