import img14 from './myImage/furniture14.png';

const Description = () => {
  return (
    <article className='Description'>
      <div className='describe'>
      <h2 >Modern Interior Design Studio</h2>
      <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur velit eius minus voluptas fuga dolores nobis ipsum! Quos, sequi quisquam?</p>
      <span>
        <button>Shop Now</button>
        <button>Explore</button>
      </span>
      </div>
      <img className ='rotate-img'src={img14} alt=''  />
        
    </article>
    
  )
}

export default Description
