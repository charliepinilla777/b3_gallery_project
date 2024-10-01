import ciber3 from '../assets/img/ciber3.jpg';
import PropTypes from 'prop-types';

export const Ciber3 = ( { className } ) => {
  return (
    <img src={ciber3} alt="auto espectacular" className={className} />
  )
}

Ciber3.propTypes = {
  className: PropTypes.string
}