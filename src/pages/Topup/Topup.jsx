import { useEffect, useState } from "react";
import FormTopup from "../../components/forms/FormTopup/FormTopup"
import { handleFormatCurrency } from "../../utils/Common"
import { getDataBalance, getDataProfile, TopupAction } from "../../services/action";
import Modal from "../../components/elements/Modal/Modal";
import { IMAGES } from "../../config";
import { Link } from "react-router-dom";


const Topup = () => {
  const [showSaldo, setShowSaldo] = useState(false);
  const [dataProfile, setDataProfile] = useState([]);
  const [dataBalance, setDataBalance] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSuccess, setIsOpenSuccess] = useState(false);
  const [dataPayload, setDataPayload] = useState([]);
  const [dataResponse, setDataResponse] = useState([])
  const token = localStorage.getItem("token");

  useEffect(() => {
    if(!token){
      window.location.href = "/login";
    }
  }, [])
  
  const handleSubmitTopup = (e) => {
    e.preventDefault()
    setIsOpen(true)
    setDataPayload({top_up_amount: e.target.topup.value})
  }

  const handleConfirm = () => {
    console.log(dataPayload)
    TopupAction(dataPayload, (response) => {
      setIsOpen(false)
      setIsOpenSuccess(true)
      setDataResponse(response)
    })
  }
  console.log(dataResponse);

  const RenderModal = () => {
    return(
      <Modal isOpen={isOpen} width="w-80">
        <div className="flex flex-col items-center justify-center p-8">
          <img src={IMAGES.LOGO} className="w-12 h-12 mb-2"/>
          <span>Beli listrik prabayar senilai</span>
          <span className="font-bold">{handleFormatCurrency("Rp " + handleFormatCurrency(dataPayload.top_up_amount))}</span>
          <a onClick={() => handleConfirm()} className="font-semibold text-red-500 mt-4">Ya, Lanjutkan Bayar</a>
          <a onClick={() => setIsOpen(false)} className="cursor-pointer font-semibold text-slate-400 mt-3">Batalkan</a>
        </div>
      </Modal>
    )
  }

  const RenderModalSuccess = () => {
    return(
      <Modal isOpen={true} width="w-80">
        <div className="flex flex-col items-center justify-center p-8">
          <img src={IMAGES.ICON_CHECK} className="w-12 h-12 mb-2"/>
          <span>Top Up sebesar</span>
          <span className="font-bold">{handleFormatCurrency("Rp " + handleFormatCurrency(dataPayload.top_up_amount))}</span>
          <span>Berhasil</span>
          <Link to="/" className="cursor-pointer font-semibold text-red-500 mt-3 text-sm">Kembali ke Beranda</Link>
        </div>
      </Modal>
    )
  }

  useEffect(() => {
    getDataProfile((data) => {
      setDataProfile(data);
    });
    getDataBalance((data) => {
      setDataBalance(data);
    });
  }, [])


  return(    
    <>
      {isOpen && <RenderModal/>}
      {isOpenSuccess && <RenderModalSuccess/>}
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
              className="text-[8px] md:text-xs cursor-pointer w-fit"
              onClick={() => setShowSaldo(!showSaldo)}
            >
              lihat saldo
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full mt-10"> 
        <p className="text-sm">Silahkan masukkan</p>
        <h1 className="font-bold text-xl mb-10">Nominal Top Up</h1>
        <FormTopup
          handleSubmitTopup={handleSubmitTopup}
        />
      </div>
    </>
  )
}

export default Topup