import img7 from './myImage/furniture7.jpg';
// import img8 from './myImage/furniture8.jpg';
// import img9 from './myImage/furniture9.jpg';

const Section2 = () => {
  return (
    <section className='Section2'>
        <div>
            <h3>Crafted with excellent material.</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed voluptatum iusto quibusdam blanditiis totam natus quis, nihil quos atque labore!</p>
            <button>Explore</button>
        </div>
        <img src={img7} alt=''  />
        {/* <img src={img8} alt=''  />
        <img src={img9} alt=''  /> */}
    </section>
  )
}

export default Section2
