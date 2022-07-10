import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    /* background: #021859;   */
    /* background: #451e47;   */
    background: #251e48;  
    display: flex;
    flex-direction: column;
`

export const Header = styled.header`
   
    margin: 0 auto;
    padding-top: 5px;
    width: 80%;

    display: flex;
    justify-content: space-between;
    align-items: baseline;

    
    nav {
        display: flex;
        align-items: center;
        gap: 15px;

        a {
            font-size: 20px;
            text-decoration: none;
            color: #fff;

            &:last-child {
                padding: 5px 10px;
                border: 1px solid #fff;
                border-radius: 5px;
            }
        }
    }
`


export const Main = styled.main`
    width: 80%;
    margin: 50px auto;
    flex: 1;

    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        h2 {
            color: #fff;
            font-size: 70px;
            margin-bottom: 30px;
        }

        p {
            line-height: 40px; 
            color: #05f2c7;
            font-size: 30px;
        }
    }

    img {
        height: 550px;
    }
`