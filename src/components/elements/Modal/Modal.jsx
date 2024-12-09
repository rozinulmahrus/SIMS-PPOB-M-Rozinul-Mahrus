import PropTypes from 'prop-types'

const Modal = ({ isOpen, children, width }) => {
  return (
    <>
      {isOpen ? (
        <>
          <div className="backdrop-blur-sm bg-opacity-25 fixed inset-0 z-40 bg-black"></div>
          <div className="flex justify-center items-center fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div
              className={`relative ${width ?? "w-full"} max-w-2xl max-h-full`}
            >
              <div className="relative bg-white rounded-lg shadow">
                {children}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Modal;

Modal.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node,
  width: PropTypes.string
}
