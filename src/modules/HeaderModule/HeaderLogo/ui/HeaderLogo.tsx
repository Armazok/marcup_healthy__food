import { FC, memo } from 'react';
import './HeaderLogo.scss';
import Logo from 'assets/Header/Logo.svg';

interface IMainLogo {

}

export const HeaderLogo: FC<IMainLogo> = memo(({}) => {
    return (
        <div className="logo__header__wrapper">
            <div className="logo__header__img">
                <img src={Logo} width={'25'} height={'24'} alt=""/>
            </div>

            <h1 className="logo__header__text">
                HEALTHY SWITCHER
            </h1>
        </div>
    );
});
