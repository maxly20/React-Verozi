import { useState } from 'react';
import Container from '../../GlobalComponents/Container';
import Menu from './Menu';
import './Nav.scss';

const Nav = () => {
  const [hiddenMenu, setHiddenMenu] = useState(true);

  return (
    <nav className='navBar'>
      <Container>
        <h2>VEROZI</h2>
        <i
          onClick={() => setHiddenMenu(!hiddenMenu)}
          id='burgerMenu'
          className={hiddenMenu ? 'fas fa-braille fa-lg' : 'fas fa-times fa-lg'}
        ></i>
        <Menu hiddenMenu={hiddenMenu} setHiddenMenu={setHiddenMenu} />
      </Container>
    </nav>
  );
};

export default Nav;
