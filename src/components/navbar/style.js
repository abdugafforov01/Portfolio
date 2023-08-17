import styled from "styled-components";

export const Content = styled.div `
max-width: 1440px;
height: 70px;
width: 100%;
position: fixed;
top: 0;
z-index: 9999;
background-color: #1A202C;
box-shadow: 0  5px 20px rgba(0,0,0,0.3),0 0 50px rgba(0,0,0,0.1) inset;
`
export const Flex = styled.div` 
display: flex;
align-items: center;
justify-content: space-between;
height: 70px;

`
export const Translate = styled.select` 
outline: none;
border-radius:5px;
font-size: 15px;
width: 60px;
height: 25px;
padding-left: 5px;
cursor: pointer;
@media (max-width:480px){
    width: 50px;
    height: 22px;
    font-size: 12.5px;
    padding-left: 2px;
    option{
        font-size: 10px;
    }
}
`
export const Mode = styled.button` 
width: 38px;
height: 28px;
display: flex;  
background: none;
border: none;
align-items: center;
justify-content: center;
cursor: pointer;
border-radius: 10px;
:hover{
    background-color: rgb(176, 176, 176);
}
:active{
    background: none;
    border: 1px solid rgb(176, 176, 176);
}
@media (max-width:1000px){
    :hover{
        background: none;
    }
    :active{
        background-color: rgb(176, 176, 176);
   
}
}
`
export const Right = styled.div` 
display: flex;
align-items: center;
gap: 20px;
@media (max-width:480px){
    gap: 12px;
}
`