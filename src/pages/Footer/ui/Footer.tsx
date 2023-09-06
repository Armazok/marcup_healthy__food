import { FC, memo } from 'react';
import { MainCard } from 'modules/MainModule/MainCard';
import { mainCardsData } from 'modules/MainModule/MainCardsData';
import { HeaderLogo } from 'modules/HeaderModule/HeaderLogo';
import './Footer.scss';

interface IFooter {

}

export const Footer: FC<IFooter> = memo(({}) => {
    return (
        <section className="footer">
            <div className="footer__container">
                <div className="footer__content content__footer">

                    <div className="content__footer-cards card__footer">
                        {
                            mainCardsData.map((el) => {
                                return (
                                    <div className="card__footer__content">
                                        <MainCard
                                            key={el.id}
                                            cards={el}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>


                    <div className="content__footer-logo logo__footer">

                        <HeaderLogo/>

                        <div className="logo__footer__text">
                            <p>© Designed by Yellow Snow. All Rights Reserved.</p>
                        </div>

                    </div>

                </div>
            </div>
            <div className="footer-linear"></div>
        </section>
    );
});
