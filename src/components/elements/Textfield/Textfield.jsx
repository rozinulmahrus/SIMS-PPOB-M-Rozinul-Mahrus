import { useState } from 'react';
import PropTypes from 'prop-types';
import IconEye from '../../icons/IconEye';
import IconEyeDisabled from '../../icons/IconEyeDisabled';

const Textfield = ({ name, placeholder, icon, type, label, value, readOnly, className, required, onChange, onlyNumber }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleCheckType = () => {
    if(type === 'password' && showPassword){
      return 'text';
    }else{
      return type;
    }
  }

  function numbersOnly(input){
    const reg = new RegExp(/[^0-9]+/g);  
    input.value = input.value.replace(reg, "");
  }

  return(
    <>
      {label && 
      <div className='mb-2'>
        <label>{label}</label>
      </div>
      }
      <div className="relative">
        <div className='absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none '>
          {icon}
        </div>
        <input 
          className={[className, `pl-10 pr-8 text-lg rounded-md border border-gray-300 block w-full text-slate-600 placeholder:text-slate-300 focus: outline-none focus:ring-1 ring-blue-500`].join(' ')} 
          placeholder={placeholder} 
          type={handleCheckType()}
          name={name}
          value={value}
          readOnly={readOnly}
          required={required}
          onChange={onChange}
          onKeyUp={(e) => {onlyNumber ? numbersOnly(e.target) : e.target }}
        />
        {type === 'password' && 
          <div className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer'>
            <span 
              className='font font-semibold'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IconEye/> : <IconEyeDisabled/>}
            </span>
          </div>
        }
      </div>
    </>
  )
}

export default Textfield;

Textfield.propTypes = {
  placeholder: PropTypes.string,
  icon: PropTypes.node,
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.string,
  className: PropTypes.node,
  onChange: PropTypes.func,
  onlyNumber: PropTypes.bool
}