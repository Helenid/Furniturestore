import img18 from './myImage/10.png';
import img19 from './myImage/5.png';
import img20 from './myImage/11.png';

 const Sectionfive = () => {
   return (
    
        <ul className='Sectionfive'>
            <li><img src={img18} alt=''/>
              <div className='label'>
                <h4
>Glass Table</h4
>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime dolore fugiat sunt repudiandae sit, </p>
              </div>
            </li>
      
        <li>
            <img src={img19} alt=''/>
            <div className='label'>
              <h4>Comfy Chair</h4>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime dolore fugiat sunt repudiandae sit, </p>
            </div>

        </li>
        <li >
            <img src={img20} alt=''/>
            <div className='label'>
              <h4>Deco Stood</h4>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime dolore fugiat sunt repudiandae sit, </p>
            </div>

        </li>
        </ul>
    
    
  )
 }

 export default Sectionfive
