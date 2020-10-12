import React,{useState,useEffect} from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
import {IconContext} from "react-icons/lib"
import {Button} from '../../globalStyles'
import {
    Nav,
    NavbarConatainer,
    Avatar,
    NavLogo,
    MenuIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
} from './Navbar.elements'



const Navbar = () => {

    const [click,setClick]=useState(false)
    const [button,setBtn]=useState(true)

    const showBtn=()=>{
        if(window.innerWidth<=960){
            setBtn(false)
        }
        else{
            setBtn(true)
        }
    }

    useEffect(()=>{
        showBtn();
    });

    

    return (
        <div>
            <IconContext.Provider value={{color:'#fff'}}>
            <Nav>
                <NavbarConatainer>
                    <NavLogo to="/" onClick={()=>click? setClick(!click):setClick(click) }>
                       Daniel Spevak
                    </NavLogo>
                    <MenuIcon onClick={()=>setClick(!click)}>
                        {click ? < FaTimes/> : <FaBars/>}
                    </MenuIcon>
                    <NavMenu to='/'onClick={()=>setClick(!click)} click={click} >
                        <NavItem>
                            <NavLinks  to='/'>
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/about-me'>
                                About Me
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/projects'>
                                Projects
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/contact'>
                                Contact
                            </NavLinks>
                            </NavItem>
                            <NavItem btn>
                            
                        </NavItem>
                    </NavMenu>
                </NavbarConatainer>
            </Nav>
            </IconContext.Provider>
        </div>
    )
}

export default Navbar


