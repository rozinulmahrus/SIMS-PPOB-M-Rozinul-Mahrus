import PropTypes from 'prop-types';

import Button from "../../elements/Button/Button"
import Textfield from "../../elements/Textfield/Textfield"
import IconMoney from "../../icons/IconMoney"

const FormTransaction = ({ value, handleSubmit }) => {
  return(
    <div className="flex gap-5 flex-col sm:flex-row">
      <div className="flex flex-col w-full">
        <form onSubmit={handleSubmit}>
          <Textfield
            type="text"
            name="transaction"
            icon={<IconMoney/>}
            className="p-1 md:p-2 md:pl-10 text-sm md:text-lg"
            readOnly={true}
            value={value}
          />
          
          <Button 
            type="submit" 
            className="h-8 md:h-10 mt-5 font-semibold bg-red-500 text-white w-full text-xs"
          >
            Bayar
          </Button>

        </form>
      </div>
    </div>
  )
}

export default FormTransaction

FormTransaction.propTypes = {
  value: PropTypes.number,
  handleSubmit: PropTypes.func
}