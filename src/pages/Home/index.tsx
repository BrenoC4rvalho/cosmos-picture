import * as C from './styles';
import { GiJupiter } from 'react-icons/gi'
import { Logo } from '../../components/Logo';

import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <C.Container>
            
            <C.Header>
                
                <Logo />

                <nav>
                    <Link to="/signin">
                        Sign in
                    </Link>
                    <Link to="/signup">
                        Sign up
                    </Link>
                </nav>

            </C.Header>

            <C.Main>
                <div>
                    <h2>Where the world is seen differently</h2>
                    <p>
                        Millions of people browse, post and enjoy photos about
                        the world, universe, stars. <br/> You know that clever photo 
                        of the moon, you can find it here.
                    </p>
                </div>
                <img src="./public/img/breno.png" alt="aaaaaa" />                
            </C.Main>

            
        </C.Container>
    )
}