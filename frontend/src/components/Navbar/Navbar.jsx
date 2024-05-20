import  React, {useState} from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'


const Navbar = () => {

    const [menu,setMenu] = useState("Home");

  return (
    <div className='flex Navbar pt-10 px-10 justify-between align-middle'>
        <img src={assets.logo} alt="logo" className='w-40 h-8'/>
        <ul className="navbar-menu">
            <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active" :""}>Home</li>
            <li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active" :""}>Menu</li>
            <li onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App"?"active" :""}>Mobile-App</li>
            <li onClick={()=>setMenu("Contact us!")} className={menu==="Contact us!"?"active":""}>Contact us!</li>
        </ul>
        <div className='navbar-right'>

            <div className='search-icon'>
                <img src={assets.search_icon}/>
            </div>

            <div className='basket-icon'>
                <img src={assets.basket_icon}/>
            </div>

            <button>Sign in</button>
        
        </div>
        
        
    </div>
  )
}

export default Navbar