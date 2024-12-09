import { useState } from "react"
import PropTypes from 'prop-types'
import Button from "../../elements/Button/Button"
import Textfield from "../../elements/Textfield/Textfield"
import IconMoney from "../../icons/IconMoney"

const FormTopup = ({ handleSubmitTopup }) => {
  const [nominal, setNominal] = useState();

  return(
    <div className="flex gap-5 flex-col sm:flex-row">
      <div className="flex flex-col w-full sm:w-3/5">
        <form onSubmit={handleSubmitTopup}>
          <Textfield
            type="text"
            placeholder="Masukkan Nominal Topup"
            name="topup"
            icon={<IconMoney/>}
            className="p-1 md:p-2 md:pl-10 text-sm md:text-lg"
            value={nominal}
            required={true}
            onChange={(e) => {
              setNominal(e.target.value)
            }}
            onlyNumber={true}
          />
          <Button 
            type="submit" 
            className="h-8 md:h-10 mt-5 font-semibold bg-red-500 text-white w-full text-xs"
          >
            Topup
          </Button>
        </form>
      </div>
      <div className="flex flex-col w-full sm:w-2/5 gap-3">
        <div className="flex gap-2">
          <i 
            className="flex w-full h-5 p-3 md:p-4 lg:p-6 font-semibold border border-slate-300 text-black text-xs md:text-sm justify-center items-center rounded-sm cursor-pointer hover:bg-gray-100"
            onClick={() => setNominal(10000)}
          >
            Rp. 10.000
          </i>
          <i 
            className="flex w-full h-5 p-3 md:p-4 lg:p-6 font-semibold border border-slate-300 text-black text-xs md:text-sm justify-center items-center rounded-sm cursor-pointer hover:bg-gray-100"
            onClick={() => setNominal(20000)}
          >            
            Rp. 20.000
          </i>
          <i 
            className="flex w-full h-5 p-3 md:p-4 lg:p-6 font-semibold border border-slate-300 text-black text-xs md:text-sm justify-center items-center rounded-sm cursor-pointer hover:bg-gray-100"
            onClick={() => setNominal(50000)}
          >            
            Rp. 50.000
          </i>
        </div>
        <div className="flex gap-2">
          <i 
            className="flex w-full h-5 p-3 md:p-4 lg:p-6 font-semibold border border-slate-300 text-black text-xs md:text-sm justify-center items-center rounded-sm cursor-pointer hover:bg-gray-100"
            onClick={() => setNominal(100000)}
          >            
            Rp. 100.000
          </i>
          <i 
            className="flex w-full h-5 p-3 md:p-4 lg:p-6 font-semibold border border-slate-300 text-black text-xs md:text-sm justify-center items-center rounded-sm cursor-pointer hover:bg-gray-100"
            onClick={() => setNominal(250000)}
          >            
            Rp. 250.000
          </i>
          <i 
            className="flex w-full h-5 p-3 md:p-4 lg:p-6 font-semibold border border-slate-300 text-black text-xs md:text-sm justify-center items-center rounded-sm cursor-pointer hover:bg-gray-100"
            onClick={() => setNominal(500000)}
          >            
            Rp. 500.000
          </i>
        </div>
      </div>
    </div>
  )
}

export default FormTopup

FormTopup.propTypes = {
  handleSubmitTopup: PropTypes.func
}