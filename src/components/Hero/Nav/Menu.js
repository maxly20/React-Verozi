import './Nav.scss';

const Menu = ({ hiddenMenu, setHiddenMenu }) => {
  const links = [
    {
      text: 'Home',
      href: '#home',
    },
    {
      text: 'Shop',
      icon: 'fas fa-caret-down',
      href: '#shop',
    },
    {
      text: 'About',
      href: '#about',
    },
    {
      text: 'Blog',
      href: '#blog',
    },
    {
      text: 'Contact',
      href: '#contact',
    },
    {
      icon: 'fas fa-shopping-cart',
    },
  ];

  return (
    <div className={(hiddenMenu ? '' : 'showMenu') + ' menu'}>
      {links.map((link, index) => (
        <a key={index} onClick={() => setHiddenMenu(true)} href={link.href}>
          {link.text}
          {link.icon && <i className={link.icon}></i>}
        </a>
      ))}
    </div>
  );
};

export default Menu;
