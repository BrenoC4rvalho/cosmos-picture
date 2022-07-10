import { Logo } from '../../components/Logo';
import * as C from './styles';

import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export const Signin = () => {
    return (
        <C.Container>
            
            <C.Header>
                
                <div>
                    <Logo />
                </div>

                <aside>
                    <h2>You There!</h2>
                    <p>
                        You know that beautiful photo of
                        the moon you have saved, you found
                        the right place to post it.

                    </p>
                    <Link to="/signup">
                        <button>SIGN UP</button>
                    </Link>
                </aside>

            </C.Header>

            <C.Main>
                
                    <h2>Sign in to CosmosPicture</h2>

                    <div>
                        <MdEmail />
                        <input type="text" placeholder='E-mail'/>
                    </div>
                
                    <div>
                        <RiLockPasswordFill />
                        <input type="password" placeholder='Password'/>
                    </div>
                    <button>SIGN IN</button>
                
            </C.Main>

        </C.Container>
    )
}