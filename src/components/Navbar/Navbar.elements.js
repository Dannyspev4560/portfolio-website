import styled from 'styled-components'
import {Container} from '../../globalStyles'
import {GiThreePointedShuriken} from "react-icons/gi"
import {Link} from 'react-router-dom'



export const Nav=styled.nav`
background:#101522;
height:80px;
display:flex;
justify-content:center;
align-items:center;
font-size:1.2rem;
position:sticky;
top:0;
z-index:99;
`
export const NavbarConatainer=styled.div`
display:flex;
justify-content:space-between;
height:80px;
z-index:1;
width:100%;
max-width:1300px;
margin-right:auto;
margin-left:auto;
padding-left:10px;
padding-right:40px;

@media screen and (max-width:991px){
    padding-left:5px;
    padding-right:20px;
}


/* other syle props that we gonna inherit */
/*${Container}*/

`

export const NavLogo=styled(Link)`
color:#fff;
justify-self:flex-start;
cursor: pointer;
text-decoration: none;
font-size:1.5rem;
display:flex;
align-items:center;
font-family: 'Montserrat', sans-serif;
`

export const Avatar=styled(GiThreePointedShuriken)`
margin-right:0.2rem
`


export const MenuIcon=styled.div`
display:none;

@media screen and (max-width:960px){
   display:block;
   position:absolute;
   top:0;
   right:0;
   transform: translate(-100%,60%);
   font-size:2rem;
   cursor:pointer;
}
`


export const NavMenu=styled.ul`
    display:flex;
    align-items:center;
    list-style:none;
    text-align:center;

@media screen and (max-width:960px){
   display:flex;
   flex-direction:column;
   width:100%;
   height:90vh;
   position:absolute;
   top:80px;
   left:${({click})=>(click ? 0: '-100%')};/* when click is true its hidden(-100%)   */
   opacity:1;
   transition:all 0.5s ease;
   background:#101522;
}
`

export const NavItem=styled.li`
    height:80px;
    border-bottom:2px solid transparent;
    
    &:hover{
        border-bottom:2px solid #4b59f7;
        background-color:${({btn})=>(btn ? 'none': '#172b42')} ;
        transition:all 0.6s ease;
        
        opacity:1;
    }

    @media screen and (max-width:960px){
       width:100%;
       &:hover{
        border: none;
        }
    }
`

export const NavLinks = styled(Link)`
    color:#fff;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding: 0.5rem 1rem;
    height:100%;
    @media screen and (max-width:960px){
       text-align:center;
       width:100%;
       display:table;
       padding:2rem;

       &:hover{
           color:#4b59f7;
           transition:all 0.3s ease;
       }
    }
`
export const NavItemBtn=styled.li`
@media screen and (max-width:960px){
    display:flex;
    justify-content:center;
    align-items:center;
    padding:30px 10px;
    width:100%;
    height:120px;
    justify-items:center;
}
`

export const NavBtnLink=styled(Link)`
align-items:center;
display:flex;
justify-content:center;

text-decoration:none;
padding:16px 16px;
height:100%auto;
width:100%;
border:none;
outline:none;
`


