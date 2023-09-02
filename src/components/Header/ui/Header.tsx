import { FC, memo } from 'react';
import './Header.scss';
import Logo from 'assets/Header/Logo.svg';

interface IHeader {

}

export const Header: FC<IHeader> = memo(({}) => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__content content__header">

                    <div className="content__header-logo logo__header">
                        <div className="logo__header__img">
                            <img src={Logo} width={'25'} height={'24'} alt=""/>
                        </div>

                        <h1 className="logo__header__text">
                            HEALTHY SWITCHER
                        </h1>
                    </div>

                    <nav className="content__header-nav nav__header">
                        <ul className="nav__header__ul">

                            <li className="nav__header__text">
                                <a href="">Menu</a>
                            </li>

                            <li className="nav__header__text">
                                <a href="">Recipes</a>
                            </li>

                            <li className="nav__header__text">
                                <a href="">Chefs</a>
                            </li>

                            <li className="nav__header__text">
                                <a href="">Contacts</a>
                            </li>

                        </ul>
                    </nav>

                </div>
            </div>
        </header>
    );
});
