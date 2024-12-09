import PropTypes from 'prop-types';

const Button = ({ type, children, disabled, className }) => {
  const disable = disabled ? "bg-slate-300" : "";
  const cusStyle = [className, disable, `rounded-md`].join(' ');

  return (
    <button className={cusStyle} type={type} disabled={disabled}>
        {children}
    </button>
  )
};

export default Button;

Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    className: PropTypes.node
};
