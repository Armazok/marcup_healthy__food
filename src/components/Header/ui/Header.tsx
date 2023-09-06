import { FC, memo } from 'react';
import { HeaderLogo } from 'modules/HeaderModule/HeaderLogo';
import './Header.scss';

interface IHeader {

}

export const Header: FC<IHeader> = memo(({}) => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__content content__header">

                    <div className="content__header-logo logo__header">
                        <HeaderLogo/>
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
