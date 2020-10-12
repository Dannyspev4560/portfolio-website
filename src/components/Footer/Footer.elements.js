import styled from 'styled-components'



export const FooterContainer=styled.div`
    background-color:#101522;
    padding:4rem 0 4rem 0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

export const FooterSubscription= styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    /*margin-bottom:14px;
    padding:14px;*/
    color:#fff;
`

export const FooterSubHeading=styled.p`
    font-family:'Trebuchet MS','Lucida Sans Unicode','Lucida Grande',sans-serif,Arial;
    margin-bottom:24px;
    font-size:24px;
`

export const FooterSubText=styled.p`
    margin-bottom:24px;
    font-size:20px;
`

export const Form= styled.form`
    display:flex;
    justify-content:center;
    align-items:center;

    @media screen and (max-width:820px){
        flex-direction:column;
        width:80%;
    }
`

export const FormInput=styled.input`
    padding:10px 20px;
    border-radius:2px;
    margin-right:10px;
    outline:none;
    font-size:16px;
    border:none;
    border:1px solid #fff;

    &::placeholder{
        color:#242424;
    }
    @media screen and (max-width:820px){

      width:100%;
      margin:0 0 16px 0;
    }

`

export const FooterLinkContainer=styled.div`
    width:100%;
    max-width:1000px;
    display:flex;
    justify-content:center;
    @media screen and (max-width:820px){
        padding-top:12px;
    }
`

export const FooterLinkWrapper=styled.div`
    display:flex;
    @media screen and (max-width:160px){
        flex-direction:column;
    }
`
export const FooterLinkItems=styled.div`
    display:flex;
    align-items:flex-start;
    margin:1px;
    width:160px;
    box-sizing:border-box;
    color:#fff;

    @media screen and (max-width:820px){
        margin:0;
        padding:10px;
        width:100%;
        flex-direction:column;
    }
`

export const FooterLinkTitle = styled.p`
margin-bottom:16px;
color:#fff
`

export const FooterLink = styled.a`
    text-decoration:none;
    color:#fff;
    margin-bottom:0.2rem;
    padding: 1rem;
    font-size:28px;
    &:hover{
        color:#0467fb;
        transition:0.3s ease-out;
    }
`
export const FooterEnding=styled.div`
    width:100%;
    max-width:800px;
    display:flex;
    justify-content:center;
    text-align:center;
    align-items:center;
`

export const FooterEndingText=styled.p`
    color:gray;
    font-size:12px;
`
