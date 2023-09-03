import { FC, memo } from 'react';
import './Main.scss';
import { Header } from 'components/Header';
import { Button } from 'ui';
import { MainCard } from 'modules/MainModule/MainCard';
import { mainCardsData } from 'modules/MainModule/MainCardsData';

interface IMain {

}

export const Main: FC<IMain> = memo(({}) => {
    return (
        <main className="main">
            <Header/>
            <div className="main__container">
                <div className="main__content content__main">


                    <div className="content__main-wrapper wrapper__main">

                        <div className="wrapper__main__title">
                            <p>
                                Your <span>Favourite Food</span>
                                <br/>
                                Delivered <span>Hot & Fresh</span>
                            </p>
                        </div>

                        <div className="wrapper__main__subtitle">
                            <p>
                                HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping & marinating, so you
                                can cook a fresh homemade dinner in just 15 minutes.
                            </p>
                        </div>

                        <div className="wrapper__main__btn">
                            <Button label={'Order Now'}/>
                        </div>

                    </div>

                    <div className="content__main-info info__main">
                        {mainCardsData.map((el) => {
                            return (
                                <MainCard
                                    key={el.id}
                                    cards={el}
                                />
                            )
                        })}
                    </div>

                </div>
            </div>
        </main>
    );
});
