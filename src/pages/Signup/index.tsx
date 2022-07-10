import { Logo } from '../../components/Logo';
import * as C from './styles';

import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaUserAstronaut } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Signup = () => {
    return (
        <C.Container>
            

            <C.Main>
                
                    <h2>Create Account</h2>

                    <div>
                        <FaUserAstronaut />
                        <input type="text" placeholder='Name'/>
                    </div>

                    <div>
                        <MdEmail />
                        <input type="text" placeholder='E-mail'/>
                    </div>
                
                    <div>
                        <RiLockPasswordFill />
                        <input type="password" placeholder='Password'/>
                    </div>
                    <button>SIGN UP</button>
                
            </C.Main>

            <C.Header>
                
                <div>
                    <Logo />
                </div>

                <aside>
                    <h2>Welcome Back!</h2>
                    <p>
                        Speak up lover of the universe,
                        great to have you back! Come with us.
                    </p>
                    <Link to="/signin">
                        <button>SIGN IN</button>
                    </Link>
                </aside>

            </C.Header>

        </C.Container>
    )
}