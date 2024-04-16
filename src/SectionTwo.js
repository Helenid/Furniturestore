import img7 from './myImage/img7.png';
import img8 from './myImage/img8.png';
import img9 from './myImage/img9.png';

const SectionTwo = () => {
  return (
    <section className='SectionTwo'>
        <div className='two'>
            <h3>Crafted with excellent material.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quia sapiente corporis perferendis illum sequi culpa eveniet magni aspernatur reiciendis!</p>
            <button>Explore</button>
        </div>
        <img src={img7} alt=''  />
        <img src={img8} alt=''  />
        <img src={img9} alt=''  />
    </section>
  )
}

export default SectionTwo
