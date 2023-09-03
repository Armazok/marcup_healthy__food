import { FC, memo } from 'react';
import './WorkCard.scss';
import { IWorkDataCards } from 'modules/WorkModule/WorkCardsData';

interface IWorkCard {
    cardsData: IWorkDataCards
}

export const WorkCard: FC<IWorkCard> = memo(({
                                                 cardsData
                                             }) => {
    return (
        <div className="card__item" key={cardsData.id}>
            <div className="card__item__title">
                <p>
                    {cardsData.workTitle}
                </p>
            </div>

            <div className="card__item__subtitle">
                <p>
                    {cardsData.workSubtitle}
                </p>
            </div>
        </div>
    );
});
