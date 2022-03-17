import {
  GitHub,
  LinkedIn,
  SearchOutlined,
  Menu,
  ChevronLeftOutlined,
} from '@mui/icons-material';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../logo/Logo';
import Search from '../searchInput/Search';
import { useDispatch } from 'react-redux';
import { open } from '../../redux/displayAnimation';

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);
  const dispatch = useDispatch();
  // Display recent posts
  const handleDisplayRecentposts = () => {
    dispatch(open(true));
  };

  // Open/close search bar
  const handlerShowSearch = () => {
    showSearchBar ? setShowSearchBar(false) : setShowSearchBar(true);
  };

  // Close search bar
  const handleHideSearch = () => {
    setShowSearchBar(false);
  };

  // Show responsive menu
  const handleResponsiveMenu = () => {
    showResponsiveMenu
      ? setShowResponsiveMenu(false)
      : setShowResponsiveMenu(true);
  };

  const handleExpand = (e) => {
    e.preventDefault();
    const submenu = document.querySelector('.navbar__submenu');
    const item = document.querySelector('.navbar__item:nth-child(3)');

    submenu.classList.toggle('expand');
    item.classList.toggle('expand');
  };

  return (
    <>
      <header className='header'>
        <div className='header__logo'>
          <Logo />
        </div>

        <div className='wrapper'>
          <nav className='navbar'>
            {/* Hamburger */}
            <div
              className={
                showResponsiveMenu
                  ? 'navbar__hamburger expand'
                  : 'navbar__hamburger'
              }
              onClick={handleResponsiveMenu}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>

            {/* menu wrapper */}
            <div
              className={
                showResponsiveMenu ? 'navbar__wrapper show' : 'navbar__wrapper'
              }
            >
              {/* Social icons */}
              <ul className='navbar__socials'>
                <li className='navbar__social-item'>
                  <a
                    href='https://www.github.com/helio023'
                    target='_blank'
                    rel='noreferrer'
                    className='navbar__social-icon link'
                  >
                    <GitHub fontSize='large' />
                  </a>
                </li>

                <li className='navbar__social-item'>
                  <a
                    href='https://www.linkedin.com/in/hélio-engrácia-mapupo-8875561b9'
                    target='_blank'
                    rel='noreferrer'
                    className='navbar__social-icon link'
                  >
                    <LinkedIn fontSize='large' />
                  </a>
                </li>
              </ul>

              {/* Menu links */}
              <ul className='navbar__menu'>
                <li className='navbar__item'>
                  <NavLink
                    to='/'
                    className={({ isActive }) =>
                      isActive
                        ? 'navbar__link link active'
                        : 'navbar__link link'
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className='navbar__item'>
                  <NavLink
                    to='/categories'
                    className={({ isActive }) =>
                      isActive
                        ? 'navbar__link link active'
                        : 'navbar__link link'
                    }
                    onClick={handleExpand}
                  >
                    Categorias
                    <span className='navbar__link-icon'>
                      <ChevronLeftOutlined fontSize='large' />
                    </span>
                  </NavLink>

                  <div className='navbar__submenu shadow'>
                    <Link
                      to='/categorias/moda'
                      className='navbar__submenu-link'
                    >
                      Moda
                    </Link>
                    <Link
                      to='/categorias/desporto'
                      className='navbar__submenu-link'
                    >
                      Desporto
                    </Link>
                    <Link
                      to='/categorias/viagens'
                      className='navbar__submenu-link'
                    >
                      Viagens
                    </Link>
                    <Link
                      to='/categorias/tecnologia'
                      className='navbar__submenu-link'
                    >
                      Tecnologia
                    </Link>
                  </div>
                </li>
              </ul>
            </div>

            <div className='navbar__btns'>
              <div className='navbar__btns-icon'>
                <SearchOutlined fontSize='large' onClick={handlerShowSearch} />
              </div>
              <div
                className='navbar__btns-icon'
                onClick={handleDisplayRecentposts}
              >
                <Menu fontSize='large' />
              </div>
            </div>
          </nav>
        </div>
        {showSearchBar && <Search close={handleHideSearch} />}
      </header>
    </>
  );
};

export default Navbar;
