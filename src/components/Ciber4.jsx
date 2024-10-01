import ciber4 from '../assets/img/ciber4.jpg';
import PropTypes from 'prop-types';

export const Ciber4 = ( { className } ) => {
  return (
    <img src={ciber4} alt="Coche de Elon" className={className} />
  )
}

Ciber4.propTypes = {
  className: PropTypes.string
}