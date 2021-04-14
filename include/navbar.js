import React , { useState , useEffect } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {

    let [ display_status , setDisplay_status ] = useState(false);
    
    const sidebarStatusHandler = () =>{
        setDisplay_status(!display_status);
    }
    
    return(
      <div className="NavbarMain">
        <div className="NavContainer row">
            <div className="col-md-4 navHead">
            </div>
            <div className="col-md-8">
                <div className="NavList">
                    <ul className="NavListMenu">
                        <li><Link href="/" ><a>HOME</a></Link></li>
                        <li><Link href="/about" ><a>ABOUT</a></Link></li>
                    </ul>
                </div>
                <div className="navHeadMenu">
                    <BiMenuAltLeft onClick={ sidebarStatusHandler }  size="40px" color="#fff" style={{margin:"10px"}}/>
                </div>
            </div>
        </div>
        <div className={ (display_status) ? 'mobileNav mobOn' : 'mobileNav'}>
            <div className="NavListMob">
                <ul className="NavListMenuMob"  onClick={ sidebarStatusHandler } >
                    <li><Link href="/" ><a>HOME</a></Link></li>
                    <li><Link href="/about" ><a>ABOUT</a></Link></li>
                </ul>
            </div>
        </div>
      </div>
      )
}

export default Navbar;