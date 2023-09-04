import { FC, memo } from 'react';
import { Button } from 'ui/Button';
import { dishesCardsDataType } from 'modules/DishesModule/DishesCardsData';
import './DishesCard.scss';

interface IDishesCard {
    cards: dishesCardsDataType
}

export const DishesCard: FC<IDishesCard> = memo(({
                                                     cards
                                                 }) => {
    return (
        <div className="item__dishes" key={cards.id}>

            <div className="item__dishes__img">
                <img className="-ibg" src={cards.srcBg} alt=""/>
            </div>

            <div className="item__dishes__content">
                <div className="item__dishes__title">
                    <h1>{cards.title}</h1>
                </div>
                <div className="item__dishes__subtitle">
                    <p>{cards.subTitle}</p>
                </div>
                <div className="item__dishes__description">
                    <p>
                        {cards.description}
                    </p>
                </div>

                <div className="item__dishes__footer">
                    <div className="item__dishes__footer__grade">
                        <img src={cards.srcGrade} alt=""/> <span>12</span>
                    </div>

                    <div className="item__dishes__footer__btn">
                        <Button label={'ORDER'}/>
                    </div>
                </div>
            </div>

        </div>
    );
});
