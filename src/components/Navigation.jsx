import { Link } from 'react-router-dom';
import { Ciber2 } from './Ciber2';
import { Ciber3 } from './Ciber3';
import { Ciber4 } from './Ciber4';
import { Ciber5 } from './Ciber5';



export const Navigation = () => {
  return (
    <div className='container thumbnail-container mt-2'>
      <Link to='/ciber2' className='links'>
        <figure className='thumbnail-image-size'>
          <Ciber2 />
          <figcaption>Ciber2</figcaption>
        </figure>
      </Link>
      <Link to='/ciber3' className='links'>
        <figure className='thumbnail-image-size'>
          <Ciber3 />
          <figcaption>Ciber3</figcaption>
        </figure>
      </Link>
      <Link to='/ciber4' className='links'>
        <figure className='thumbnail-image-size'>
          <Ciber4 />
          <figcaption>Ciber4</figcaption>
        </figure>
      </Link>
      <Link to='/ciber5' className='links'>
        <figure className='thumbnail-image-size'>
          <Ciber5 />
          <figcaption>Ciber5</figcaption>
        </figure>
      </Link>
      
     
    </div>
  )
}
