import styled from 'styled-components'


export const ProjectsContainer=styled.div`
    align-items:center;
    justify-content:center;
    background-color:#101522;
    padding: 120px 0px;
    
`
export const ProjectsHeader=styled.h1`
    margin-bottom:24px;
    font-size:48px;
    line-height:1.1;
    text-align:center;
    color:#fff;
    padding-top:22px;
`
export const SubTitle=styled.p`
    text-align:center;
    margin-bottom:35px;
    font-size:18px;
    line-height:24px;
    color:#a9b3c1;
`

export const ProjectsWrapper= styled.div`
    display:flex;
    justify-content:center;
    @media screen and (max-width:860px){
        flex-direction:column;
    }
`

export const ProjectItems= styled.div`
    display:flex;
    align-items:flex-start;
    justify-content:center;
    margin:1px;
    max-width:1000px;
    box-sizing:border-box;
    justify-content:space-evenly;

    @media screen and (max-width:900px){
        flex-wrap: wrap;
    }

    @media screen and (max-width:500px){
        margin:0;
        padding:10px;
        width:100%;
        flex-direction:column;
    }
`


export const ProjectItem=styled.div`
    border-radius:4px;
    border: 1px solid darkblue;
    margin: 20px;
    background-color:#314866;
    border:1px solid lightgray;
    max-width:260px;
    justify-content:center;
    align-items:center;
    text-align: center;

    &:hover{
        background-color:#2d415c;
        transition:all 0.2s ease;
    }
`

export const Title = styled.h2`
  color: #fff;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  padding:0.5rem;
`
export const Image=styled.img`
    max-width:220px;
    padding:4px;
    border-radius:50%;
`

export const Date = styled.div`
  color: #ccc;
  font-size: 10px;
  margin: 6px 0;
  padding:0.2rem;
  
`

export const Description = styled.p`
    color: #ccc;
    border-top:1px solid darkgray;
    padding:0.2rem;
`
export const ButtonsWrapper= styled.div`
    padding:0.8rem;
    display:flex;
    align-items:center;
    justify-content:center;
    border-top:1px solid darkgray;
`
export const Button = styled.button`
    border-radius:4px;
    background:#4b59f7;
    color:lightgray;
    margin:auto;
    font-size:14px;
    cursor: pointer;
    white-space:nowrap;
    padding:0.3rem 2rem;

    &:hover{
    transition:all 0.3s ease-out;
    background:#fff;
    background:#0467fb;
    }

`

export const GitLink=styled.a`
    text-decoration:none;
`
