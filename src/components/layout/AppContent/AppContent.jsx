import PropTypes from 'prop-types';

const AppContent = ({ children }) => {
  return(
    <main className='w-full px-3 sm:px-20 bg-white transition duration-300 ease-in-out'> 
      {children}
    </main>
  )
}

export default AppContent;

AppContent.propTypes = {
  children: PropTypes.node
}