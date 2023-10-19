import React from 'react'

const About = () => {
  return (
    <div className='about' id='aboutContent'>
        <h1 style={{alignSelf: 'center', textDecoration: 'underline'}}>ABOUT ME</h1>
        <div className='about__imageAndDescription'>
          <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" style={{width: '30vw', height: '45vh', borderRadius: '10px'}}/>
          <h4>I'm <span style={{color: 'blue'}}>Vishal S</span>, a Computer Science and Engineering enthusiast with a strong passion for fullstack development and Python programming. 
          Python, with its simplicity and versatility, 
          has become my language of choice, enabling me to work on a diverse range of projects, 
          from web applications to data analysis and automation. I thrive on the challenges of crafting seamless user experiences and robust back-end solutions. 
          Beyond coding, I'm a tech enthusiast who keeps up with the latest industry trends and enjoys exploring new programming paradigms.          
          </h4>                        
        </div>
        
        <div className='btn btn-outline-primary' style={{alignSelf: 'center', width: '10%', marginTop: '2%', marginLeft: '22%'}}>
            <a href="./Assets/Vishal Resume.pdf" download='Vishal Resume' style={{textDecoration: 'none', color: 'inherit'}}>Download CV</a>
        </div>             
      
    </div>
  )
}

export default About
