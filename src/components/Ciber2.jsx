import ciber2 from '../assets/img/ciber2.jpg';
import PropTypes from 'prop-types';

export const Ciber2 = ( { className } ) => {
  return (
    <img src={ciber2} alt="Auto de lujo" className={className} />
  )
}

Ciber2.propTypes = {
  className: PropTypes.string
}