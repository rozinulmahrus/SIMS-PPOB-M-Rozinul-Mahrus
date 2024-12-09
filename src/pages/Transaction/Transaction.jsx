/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { handleFormatCurrency } from "../../utils/Common"
import FormTransaction from "../../components/forms/FormTransaction/FormTransaction";
import { Link, useParams } from "react-router-dom";
import { dataService } from "../../constant/listService";
import { getDataBalance, getDataProfile, TransactionAction } from "../../services/action";
import Modal from "../../components/elements/Modal/Modal";
import { IMAGES } from "../../config";

const Transaction = () => {
  const params = useParams();
  const [showSaldo, setShowSaldo] = useState(false);
  const [dataProfile, setDataProfile] = useState([]);
  const [dataBalance, setDataBalance] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState('');
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
  }, [])

  const handleTransaction = (e) => {
    e.preventDefault()
    const data = {
      service_code: params.id
    }
    TransactionAction(data, (data => {
      const amount = data.data.total_amount;
      // console.log(amount);
      setAmount(amount);
      setIsOpen(true)
      // return(
      //   RenderModal(amount)
      // )
    }))
  }

  const RenderModal = ({amount}) => {
    return(
      <Modal isOpen={true} width="w-80">
        <div className="flex flex-col items-center justify-center p-8">
          <img src={IMAGES.ICON_CHECK} className="w-12 h-12 mb-2"/>
          <span>Pembayaran listrik prabayar sebesar</span>
          <span className="font-bold">{handleFormatCurrency(amount)}</span>
          <span>Berhasil</span>
          <Link to="/" className="cursor-pointer font-semibold text-red-500 mt-3 text-sm">Kembali ke Beranda</Link>
        </div>
      </Modal>
    )
  }
  

  return(    
    <>
      {isOpen && <RenderModal amount={"Rp " + amount}/>}
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
      {
        dataService.filter(function(dataService){
          return dataService.service_code === params.id;
        }).map((val, idx) => {
          return(
            <div className="flex flex-col w-full mt-10 gap-3" key={idx}> 
              <p className="text-md">Pembayaran</p>
              <span className="flex flex-row items-center gap-2 mb-6">
                <img src={val.service_icon} className="w-8 h-8"/>
                <h1 className="font-semibold text-md">{val.service_name}</h1>
              </span>
              <FormTransaction 
                handleSubmit={handleTransaction}
                value={val.service_tariff}
              />
            </div>
          )
        })
      }
    </>
  )
}

export default Transaction