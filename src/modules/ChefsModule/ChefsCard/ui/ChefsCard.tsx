import { FC, memo } from 'react';
import './ChefsCard.scss';
import { chefsCardsDataType } from 'modules/ChefsModule/ChefsCadsData';

interface IChefsCard {
    cards: chefsCardsDataType
}

export const ChefsCard: FC<IChefsCard> = memo(({
                                                   cards
                                               }) => {
    return (
        <div className="card__chefs">

            <div className="card__chefs__wrapper">
                <div className="card__chefs__img">
                    <img src={cards.avatarChefs} alt=""/>
                </div>

                <div className="card__chefs__info">
                    <div className="card__chefs__info__name">
                        <p>
                            {cards.nameChefs}
                        </p>
                    </div>

                    <div className="card__chefs__info__chefs">
                        <p>
                            {cards.categoryChefs}
                        </p>
                    </div>
                </div>
            </div>


            <div className="card__chefs__food">
                <div className="card__chefs__food__img">
                    <img src={cards.srcFood_1} alt=""/>
                    <img src={cards.srcFood_2} alt=""/>
                    <img src={cards.srcFood_3} alt=""/>
                </div>
            </div>

        </div>
    );
});
