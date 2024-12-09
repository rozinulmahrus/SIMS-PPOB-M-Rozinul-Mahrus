import { handleFormatCurrency } from "../../utils/Common";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDataBalance, getDataBanner, getDataProfile, getDataService } from "../../services/action";

const Home = () => {
  const [showSaldo, setShowSaldo] = useState(false);
  const [dataProfile, setDataProfile] = useState([]);
  const [dataBalance, setDataBalance] = useState([]);
  const [dataBanner, setDataBanner] = useState([]);
  const [dataService, setDataService] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if(!token){
      window.location.href = "/login";
    }
  }, [])

  useEffect(() => {
    getDataProfile((data) => {
      setDataProfile(data);
    });
    getDataBalance((data) => {
      setDataBalance(data);
    });
    getDataBanner((data) => {
      setDataBanner(data);
    });
    getDataService((data) => {
      setDataService(data);
    });
  }, [])
  // console.log(dataService.data.length)
  return(
    <>
      <div className="flex w-full mt-5 mb-8">
        <div className="flex w-full flex-col md:flex-row">
          <div className="flex flex-col w-full mb-5 items-center md:items-start md:mb-0">
            <img src={dataProfile.data !== undefined && dataProfile.data.profile_image} className="w-14 h-14 md:w-16 md:h-16 mb-5"/>
            <p className="text-[12px] md:text-sm lg:text-md">Selamat Datang,</p>
            <p className="text-[14px] md:text-xl lg:text-2xl font-semibold">{dataProfile.data !== undefined && dataProfile.data.first_name + " " + dataProfile.data.last_name}</p> 
          </div>
          <div className="flex flex-col p-3 md:p-5 text-white gap-2 justify-center w-full h-20 md:h-full bg-red-500 rounded-lg">
            <p className="text-[10px] md:text-sm">Saldo anda</p>
            <p className="text-md md:text-3xl">{showSaldo ? handleFormatCurrency(dataBalance.data !== undefined && dataBalance.data.balance) : "Rp ●●●●●●●"}</p>
            <a 
              className="text-[8px] md:text-xs cursor-pointer"
              onClick={() => setShowSaldo(!showSaldo)}
            >
              lihat saldo
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full text-center mb-16">
        {
          dataService.data !== undefined && dataService.data.map((val, idx) => {
            return(
              <Link to={`/transaction/${val.service_code}`} className="w-5 sm:w-8 md:w-12 lg:w-16" key={idx}>
                <img src={val.service_icon} className="w-auto h-auto"/>
                <p className="text-[5px] sm:text-[8px] md:text-[10px] lg:text-xs mt-2 text-slate-500">{val.service_name}</p>
              </Link>
            )
          })
        }
        {/* <a href="#" className="w-5 sm:w-8 md:w-12 lg:w-16">
          <img src={IMAGES.ICON_LISTRIK} className="w-auto h-auto"/>
          <p className="text-[5px] sm:text-[8px] md:text-[10px] lg:text-xs mt-2 text-slate-500">Listrik</p>
        </a>
        <a href="#" className="w-5 sm:w-8 md:w-12 lg:w-16">
          <img src={IMAGES.ICON_PULSA} className="w-auto h-auto"/>
          <p className="text-[5px] sm:text-[8px] md:text-[10px] lg:text-xs mt-2 text-slate-500">Pulsa</p>
        </a>
        <a href="#" className="w-5 sm:w-8 md:w-12 lg:w-16">
          <img src={IMAGES.ICON_PDAM} className="w-auto h-auto"/>
          <p className="text-[5px] sm:text-[8px] md:text-[10px] lg:text-xs mt-2 text-slate-500">PDAM</p>
        </a>
        <a href="#" className="w-5 sm:w-8 md:w-12 lg:w-16">
          <img src={IMAGES.ICON_PGN} className="w-auto h-auto"/>
          <p className="text-[5px] sm:text-[8px] md:text-[10px] lg:text-xs mt-2 text-slate-500">PGN</p>
        </a>
        <a href="#" className="w-5 sm:w-8 md:w-12 lg:w-16">
          <img src={IMAGES.ICON_TELEVISI} className="w-auto h-auto"/>
          <p className="text-[5px] sm:text-[8px] md:text-[10px] lg:text-xs mt-2 text-slate-500">TV Langganan</p>
        </a>
        <a href="#" className="w-5 sm:w-8 md:w-12 lg:w-16">
          <img src={IMAGES.ICON_MUSIK} className="w-auto h-auto"/>
          <p className="text-[5px] sm:text-[8px] md:text-[10px] lg:text-xs mt-2 text-slate-500">Musik</p>
        </a>
        <a href="#" className="w-5 sm:w-8 md:w-12 lg:w-16">
          <img src={IMAGES.ICON_GAME} className="w-auto h-auto"/>
          <p className="text-[5px] sm:text-[8px] md:text-[10px] lg:text-xs mt-2 text-slate-500">Voucher Game</p>
        </a>
        <a href="#" className="w-5 sm:w-8 md:w-12 lg:w-16">
          <img src={IMAGES.ICON_VOUCHER_MAKANAN} className="w-auto h-auto"/>
          <p className="text-[5px] sm:text-[8px] md:text-[10px] lg:text-xs mt-2 text-slate-500">Voucher Makanan</p>
        </a>
        <a href="#" className="w-5 sm:w-8 md:w-12 lg:w-16">
          <img src={IMAGES.ICON_KURBAN} className="w-auto h-auto"/>
          <p className="text-[5px] sm:text-[8px] md:text-[10px] lg:text-xs mt-2 text-slate-500">Kurban</p>
        </a>
        <a href="#" className="w-5 sm:w-8 md:w-12 lg:w-16">
          <img src={IMAGES.ICON_ZAKAT} className="w-auto h-auto"/>
          <p className="text-[5px] sm:text-[8px] md:text-[10px] lg:text-xs mt-2 text-slate-500">Zakat</p>
        </a>
        <a href="#" className="w-5 sm:w-8 md:w-12 lg:w-16">
          <img src={IMAGES.ICON_PAKET_DATA} className="w-auto h-auto"/>
          <p className="text-[5px] sm:text-[8px] md:text-[10px] lg:text-xs mt-2 text-slate-500">Paket Data</p>
        </a> */}
      </div>
      <div className="flex flex-col w-full gap-5" > 
        <p className="font-bold text-sm">Temukan Promo Menarik</p>
        <div className="flex w-full gap-6 overflow-x-auto scrollbar-none">
          {
            dataBanner.data !== undefined && dataBanner.data.map((val,idx) => {
              return(
                <a href="#" className="min-w-[12rem] md:min-w-[20rem] lg:min-w-[28rem]" key={idx}>
                  <img src={val.banner_image} alt={val.banner_name} className="w-full"/>
                </a>
              )
            })
          }
          {/* <a href="#" className="min-w-[12rem] md:min-w-[20rem] lg:min-w-[28rem]">
            <img src={Banner1} className="w-full"/>
          </a>
          <a href="#" className="min-w-[12rem] md:min-w-[20rem] lg:min-w-[28rem]">
            <img src={Banner1} className="w-full"/>
          </a>
          <a href="#" className="min-w-[12rem] md:min-w-[20rem] lg:min-w-[28rem]">
            <img src={Banner1} className="w-full"/>
          </a>
          <a href="#" className="min-w-[12rem] md:min-w-[20rem] lg:min-w-[28rem]">
            <img src={Banner1} className="w-full"/>
          </a> */}
        </div>
      </div>
    </>
  )
}

export default Home;