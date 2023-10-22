import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div className='introContent text-center' id='homeContent'>
      <div className='container__information' style={{ textAlign: 'left' }}>
        <h1>Full-Stack App Developer &#x1F44B;</h1>
        <p className='lead'>Hi, I am Vishal S, a passionate Full-Stack Developer based in Chennai, India. <LocationOnIcon fontSize='large' style={{ color: 'red' }}/></p>
        <a href="https://www.linkedin.com/in/vishal-s-09b208209/" target='_blank'>
          <IconButton>
            <LinkedInIcon fontSize='large' color='primary'/>
          </IconButton>
        </a>
        <a href="https://github.com/Vishal-Saravanan" target='_blank'>
          <IconButton>
            <GitHubIcon fontSize='large' style={{ color: 'black' }}/>
          </IconButton>
        </a>
        <div className='techStack'>
          <h5>Tech Stack</h5>
          <div className='icons'>
            <img src="./images/html-5.png" alt="" style={{ margin: '5px' }}/>
            <img src="./images/css-3.png" alt="" style={{ margin: '5px' }}/>
            <img src="./images/js.png" alt="" style={{ margin: '5px' }}/>
            <img src="./images/python.png" alt="" style={{ margin: '5px' }}/>
            <img src="./images/physics.png" alt="" style={{ margin: '5px' }}/>
          </div>
        </div>
      </div>
      <div className='container__img'>
        <img src="./images/Portrait Image.jpg" alt=""/>
      </div>
    </div>
  );
}

export default Intro;
