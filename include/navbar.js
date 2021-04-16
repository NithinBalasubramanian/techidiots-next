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
            <div className="navHead col-md-4 ">
                <div className="navHeadLogo">
                    <img src="/techidiots.png"  alt="Techidiots" height="100px" width="250px" className="logoImg" />
                </div>
                <div className="navHeadMenu">
                    <BiMenuAltLeft onClick={ sidebarStatusHandler }  size="40px" color="#fff" style={{margin:"10px"}}/>
                </div>
            </div>
            <div className="col-md-8">
                <div className="NavList">
                    <ul className="NavListMenu">
                        <li><Link href="/" ><a>HOME</a></Link></li>
                        <li><Link href="/Category/techNews" ><a>NEWS</a></Link></li>
                        <li><Link href="/Category/techInfo" ><a>TECH</a></Link></li>
                        <li><Link href="/Category/automobiles" ><a>AUTOMOBILES</a></Link></li>
                        <li><Link href="/Category/finance" ><a>FINANCE</a></Link></li>
                        <li><Link href="/Category/programming" ><a>PROGRAMMING</a></Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={ (display_status) ? 'mobileNav mobOn' : 'mobileNav'}>
            <div className="NavListMob">
                <ul className="NavListMenuMob"  onClick={ sidebarStatusHandler } >
                    <li><Link href="/" ><a>HOME</a></Link></li>
                    <li><Link href="/Category/techNews" ><a>NEWS</a></Link></li>
                    <li><Link href="/Category/techInfo" ><a>TECH</a></Link></li>
                    <li><Link href="/Category/automobiles" ><a>AUTOMOBILES</a></Link></li>
                    <li><Link href="/Category/finance" ><a>FINANCE</a></Link></li>
                    <li><Link href="/Category/programming" ><a>PROGRAMMING</a></Link></li>
                </ul>
            </div>
        </div>
      </div>
      )
}

export default Navbar;