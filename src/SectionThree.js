import { FaCar, FaShoppingBag, FaChrome, FaExpandArrowsAlt } from 'react-icons/fa';
import img1 from './myImage/diningtable.png';


const SectionThree = () => {
  return (
    <article className='SectionThree'>
        <section>
            <div className="why">
                <h3>Why Choose us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates dolores pariatur rerum explicabo voluptas eum</p>
            </div>
        <ul>
            <li>
            <FaCar className='icons' />
            <h5>Fast & Free shopping</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium alias doloremque, enim quo cumque inventore id libero quas nihil ipsa.</p>
            </li>
            <li>
            <FaShoppingBag className='icons' />
            <h5>Fast & Free shopping</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium alias doloremque, enim quo cumque inventore id libero quas nihil ipsa.</p>
            </li>
            <li>
            <FaChrome className='icons' /> 
            <h5>24/7 Support</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium alias doloremque, enim quo cumque inventore id libero quas nihil ipsa.</p>
            </li>
            <li>
            <FaExpandArrowsAlt className='icons' />
            <h5>Hassle Free Returns</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium alias doloremque, enim quo cumque inventore id libero quas nihil ipsa.</p>
            </li>
        </ul> 
        </section>
        <div>
          <img src={img1} alt="" /> 
        </div>
        
    </article>
   
  )
}

export default SectionThree
