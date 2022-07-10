import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    background: #251e48;  
    display: flex;
`

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    width: 40%;

    div {
        margin: 10px 10px 0 auto;
        
        /* margin: 10px; */
    }

    aside {
        /* background: #fff; */
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 0 auto;
        width: 80%;
        color: #fff;
    }

    h2 {
        font-size: 60px;
    }

    p {
        margin: 20px 0;
        font-size: 30px;
    }

    button {
        width: fit-content;
        color: #fff;
        font-size: 20px;
        background: #251e48;
        padding: 15px 50px;
        border-radius: 5px;
        border: 1px solid #fff;
    }
`

export const Main = styled.main`
    
    background: #fff;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        color: #251e48;
        font-size: 50px;
        margin-bottom: 30px;
    }

    div {
        width: 60%;
        display: flex;
    }

    svg {
        position: relative;
        z-index: 999;
        left: 35px;
        top: 10px;
        font-size: 30px;
        color: #999;
    }

    input {
        width: 100%;
        z-index: 1;
        padding: 10px 40px;
        margin-bottom: 15px;
        font-size: 25px;
        background: #ddd;
        border: none;
    }

    button {
        color: #fff;
        font-size: 20px;
        background: #251e48;
        padding: 15px 50px;
        border-radius: 5px;
        border: none;
    }

`