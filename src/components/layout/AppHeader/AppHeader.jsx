import { useState } from "react";
import { IMAGES } from "../../../config";
import { Link } from "react-router-dom";

const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <>
      <div className="flex sticky top-0 bg-white flex-wrap py-2 px-3 sm:px-20 items-center justify-between mx-auto mb-8 p-4 border">
        <Link to="/">
          <div className="flex gap-2 items-center font-semibold">
            <img src={IMAGES.LOGO} className="w-5 h-5"/>
            <section>SIMS PPOB</section>
          </div>
        </Link>
        <i 
          className="cursor-pointer border inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          =
        </i>
        <div 
          className={`${isOpen ? "block" : "hidden"} w-[calc(100vw-25px)] sm:w-[calc(100vw-10rem)] absolute mt-[12.6rem] bg-white md:mt-0 md:relative md:block md:w-auto font-semibold rounded-b-lg" id="navbar-default`}
        >
          <ul className="w-full flex flex-col md:flex-row md:h-full md:space-x-10">
            <Link to="/topup"><li className="hover:bg-red-500 hover:text-white transition duration-100 ease-out p-3">Topup</li></Link>
            <Link to="/transaction-history"><li className="hover:bg-red-500 hover:text-white transition duration-100 ease-out p-3">Transaction</li></Link>
            <Link to="/profile"><li className="hover:bg-red-500 hover:text-white transition duration-100 ease-out p-3">Akun</li></Link>
          </ul>          
        </div>
      </div>
    </>
  )
}

export default AppHeader;