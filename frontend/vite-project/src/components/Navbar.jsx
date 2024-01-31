import { Link } from 'react-router-dom'
import '../css/navbar.css'
import logo from '../assets/Group 4.svg';
const Navbar = () => {
  return (
    <div className="navbar">
      
        <div className="logo">
           <img src={logo} width={'300px'}></img>
        </div>
        <div className="nav-elements">
          
              <Link to="/"><span style={{color:'black'}}>Home</span></Link>
            
              <Link to="/training"><span style={{color:'black'}}>Training</span></Link>
           
              <Link to="/"><span style={{color:'black'}}>Donate</span></Link>
            
        </div>
    
    </div>
  )
}

export default Navbar