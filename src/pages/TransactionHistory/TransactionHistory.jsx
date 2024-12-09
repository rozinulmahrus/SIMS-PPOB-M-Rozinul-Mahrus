import { useEffect, useState } from "react";
import { handleFormatCurrency } from "../../utils/Common";
import { getDataBalance, getDataProfile, getDataHistoryTransaction } from "../../services/action";
import dayjs from "dayjs";

const TransactionHistory = () => {
  const [showSaldo, setShowSaldo] = useState(false);
  const [dataProfile, setDataProfile] = useState([]);
  const [dataBalance, setDataBalance] = useState([]);
  const [dataHistory, setDataHistory] = useState([]);
  const [pageOffset, setPageOffset] = useState(0);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if(!token){
      window.location.href = "/login";
    }
  }, [])


  const handlePageOffset = () => {
    const limit = 5;
    setPageOffset(pageOffset + limit);
  }

  useEffect(() => {
    getDataHistoryTransaction(pageOffset, setDataHistory)
  }, [pageOffset])

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
        <p className="text-md font-semibold mb-5">Semua Transaksi</p>
        {dataHistory.records !== undefined && dataHistory.records.map((val, idx)=> {
          const transactionType = val.transaction_type;
          return(
            <div key={idx} className="flex w-full justify-between border py-2 px-5 mb-3 rounded-sm">
              <section className="flex flex-col">
                <span 
                  className={`${transactionType === 'PAYMENT' ? 'text-red-500' : 'text-green-600'} font-semibold`}
                >
                  {transactionType === 'PAYMENT' ? '-' : '+'} {handleFormatCurrency(val.total_amount)}
                </span>
                <span className="text-[10px] text-slate-300">{dayjs(val.created_on).format("DD MMMM YYYY HH SS")+" WIB"}</span>
              </section>
              <span className="text-[10px]">{val.description}</span>
            </div>
          )
        })}
        <a 
          className="flex w-full justify-center text-xs font-semibold text-red-500 cursor-pointer"
          onClick={() => handlePageOffset()}
        >
          Show more
        </a>
      </div>

    </>
  
  )
}

export default TransactionHistory