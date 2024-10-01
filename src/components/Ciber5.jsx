import ciber5 from '../assets/img/ciber5.jpg';
import PropTypes from 'prop-types';

export const Ciber5 = ( { className } ) => {
  return (
    <img src={ciber5} alt="DElorean" className={className} />
  )
}

Ciber5.propTypes = {
  className: PropTypes.string
}