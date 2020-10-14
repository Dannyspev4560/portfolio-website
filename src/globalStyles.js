import styled,{createGlobalStyle} from 'styled-components'

const GlobalStyle=createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family:'Source Sans pro', sans-serif;
    
}
`


export const Container = styled.div`
z-index:1;
width:100%;
max-width:1300px;
margin-right:auto;
margin-left:auto;
padding-left:80px;
padding-right:80px;
min-width:280px;
@media screen and (max-width:991px){
    padding-left:20px;
    padding-right:20px;
}
`
export const Button=styled.button`
border-radius:4px;
background:${({primary})=> (primary ? '#4b59f7':'#0467fb')};
white-space:nowrap;
padding:${({big})=>(big ? '12px 64px' : '10px 20px')};
color:#fff;
margin:auto;
font-size:20px;/*${({fontBig})=>(fontBig? '20px': '10px')};*/
outline:none;
cursor: pointer;

&:hover{
    transition:all 0.3s ease-out;
    background:#fff;
    background:${({primary})=> (primary ? '#0467fb':'#4b59f7')};

}


@media screen and (max-width:660px){
    width:75%;
}
`

export default GlobalStyle