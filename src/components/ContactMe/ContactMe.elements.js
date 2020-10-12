import styled from 'styled-components'

export const FormContainer=styled.div`
    align-items:center;
    justify-content:center;
    background-color:#fff;
    padding: 120px 0px;
    
`



export const FormHeader=styled.h1`
    margin-bottom:24px;
    font-size:48px;
    line-height:1.1;
    text-align:center;
    justify-content:center;
    color:#101522;
    padding-top:22px;
`

export const FormBody=styled.form`
    display:flex;
    align-items:center;
    justify-content:center;
    margin:1px;
    box-sizing:border-box;
    text-align:center;
    flex-direction:column;
    margin: 0px 240px;
    background-color:#101522;
    border-radius:20px;
    padding: 80px 0px;
    @media screen and (max-width:1000px){
        margin: 0px 40px;
    }
    @media screen and (max-width:600px){
        margin: 0px 5px;
    }
`

export const MailFrom=styled.input`
    padding:10px 20px;
    align-self:center;
    margin:10px;
    outline:none;
    font-size:16px;
    background-color:#101522;
    border:none;
    border-bottom:1px solid lightgray;
    width:70%;
    color:#fff;
    

    &::placeholder{
        color:darkgray;
    }
    &:hover{
        &::placeholder{
        color:lightgray;
        transition: all 0.3s ease-out;
    }
    }
    @media screen and (max-width:860px){
        width:90%;
    }

`


export const Title=styled.input`
    padding:10px 20px;
    width:70%;
    margin:10px;
    outline:none;
    font-size:16px;
    border:none;
    border-bottom:1px solid lightgray;
    background-color:#101522;
    color:#fff;
    &::placeholder{
        color:darkgray;
    }

    &:hover{
        &::placeholder{
        color:lightgray;
        transition: all 0.3s ease-out;
    }
    }
    @media screen and (max-width:860px){
        width:90%;
    }
`

export const Message=styled.textarea`
    padding:30px 20px;
    width:70%;
    margin:10px;
    outline:none;
    font-size:16px;
    border:none;
    border-bottom:1px solid lightgray;
    color:#fff;
    background-color:#101522;
    &::placeholder{
        color:darkgray;
    }
    &:hover{
        &::placeholder{
        color:lightgray;
        transition: all 0.3s ease-out;
    }
    }

    @media screen and (max-width:860px){
        width:90%;
    }
`

export const ValidMail=styled.p`
    margin:8px;
    display:${({sent})=>(sent ? '' : 'none')};
    color:${({valid})=>(valid ? '#4bb378' : '#de4831')};
    font-family: 'Montserrat', sans-serif;
    font-size:13px;
`
export const SubmitButton=styled.input`
    border-radius:4px;
    background:#4b59f7;
    white-space:nowrap;
    padding:12px 64px;
    color:#fff;
    margin:auto;
    font-size:20px;
    outline:none;
    cursor: pointer;
    margin-top:20px;

&:hover{
    transition:all 0.3s ease-out;
    background:#fff;
    background:#0467fb;

}


@media screen and (max-width:660px){
    width:75%;
}
`