import React from 'react'
import {FaLinkedin,FaGithub,FaFacebook} from "react-icons/fa"
import {FooterContainer,
        FooterSubscription,
        FooterSubHeading,
        FooterSubText,
        FooterLinkContainer,
        FooterLinkItems,
        FooterLink,
        FooterLinkWrapper,
        FooterEnding,
        FooterEndingText
    } from './Footer.elements'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                    <FooterSubHeading>
                   Hope you enjoyed the site
                   </FooterSubHeading>
                    <FooterSubText>
                       Thanks for visiting my page! Here's links to my social media
                    </FooterSubText>
                    
            </FooterSubscription>
            <FooterLinkContainer>
                <FooterLinkWrapper>
                   <FooterLinkItems>
                       <FooterLink target="_blank" href="https://www.facebook.com/danny.spevak/">
                           <FaFacebook/>
                       </FooterLink>
                       <FooterLink target="_blank" href="https://www.linkedin.com/in/daniel-spevak-8ba27b149/">
                           <FaLinkedin/>
                       </FooterLink>
                       <FooterLink target="_blank" href="https://github.com/Dannyspev4560">
                           <FaGithub/>
                       </FooterLink>
                       </FooterLinkItems> 
                </FooterLinkWrapper>
                
            </FooterLinkContainer>
                <FooterEnding>
                    <FooterEndingText>
                    Written and developed by Daniel Spevak ©
                    </FooterEndingText>               
                </FooterEnding>
        </FooterContainer>
    )
}

export default Footer
