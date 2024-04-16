 import img3 from './myImage/1111111.jpeg';
 import img4 from './myImage/1212.jpeg';
 import img12 from './myImage/furniture12a.jpg';

const SectionFour = () => {
  return (
    <section className='SectionFour'>
        <div className='IMG'>
             <img src={img3} alt=''  width={350} height={400} /> 
              <img src={img4} alt=''  width={250} height={300} className='secondImage'/> 
             {/* <img src={img12} alt=''  className='firstImage'/>  */}
         </div>
         <div className='NOTE'>
            <h3>We Help You Make Modern Interior Design</h3>
            <p>Lorem ipsum dolor, sit amet consectetur. Iusto praesentium odit sint eum, aut possimus et labore expedita necessitatibus esse deleniti nostrum molestias.</p>
            <ul>
                <li>Lorem, ipsum dolor sit amet consectetur. </li>
                <li>Lorem, ipsum dolor sit amet consectetur. </li>
                <li>Lorem, ipsum dolor sit amet consectetur. </li>
                <li>Lorem, ipsum dolor sit amet consectetur. </li>
            </ul>
            <button>Explore</button>
         </div>
    </section>
    
  )
}

export default SectionFour
