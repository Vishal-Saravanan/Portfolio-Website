

const HeaderNav = () => {
  return (    
    <div className='navBar'>
      <div className='brand'>
        <h1 style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Vishal S</h1>
      </div>
      <div className='links' style={{alignSelf: 'flex-end', display: 'flex'}}>
        <a href="#homeContent" className=''><h5 style={{color: 'blue', pointerEvents: 'none'}}>Home</h5></a>
        <a href="#aboutContent"><h5>About</h5></a>
        <a href="#p"><h5>Projects</h5></a>
        <a href="#c"><h5>Contact</h5></a>
      </div>
    </div>
  )
}

export default HeaderNav
