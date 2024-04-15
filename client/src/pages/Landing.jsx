import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/logo-lrj.png';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Ministère <span>Accueil</span> et <span>Sécurité</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            possimus officia molestias minus quidem rem est porro. Dolorum
            excepturi dicta repellat iure nihil. Unde reiciendis consequuntur
            inventore excepturi at necessitatibus ?
          </p>
          {/* <Link to='/register' className='btn register-link'>
            Register
          </Link> */}
          <Link to='/login' className='btn '>
            Login
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
