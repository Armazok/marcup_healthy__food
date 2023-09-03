import { IMainDataCards } from 'modules/MainModule/MainCardsData';
import { FC, memo } from 'react';
import './MainCard.scss';

interface Interface {
    cards: IMainDataCards
}

export const MainCard: FC<Interface> = memo(({
                                                 cards
                                             }) => {
    return (
        // <>
        //     {
        //         cards.map((el) => {
        //             return (
        //                 <div className="info__main__item" key={el.id}>
        //                     <div className="info__main__item__img">
        //                         <img src={el.src} alt=""/>
        //                     </div>
        //
        //                     <div className="info__main__item__title">
        //                         <p>{el.textTitle}</p>
        //                     </div>
        //
        //                     <div className="info__main__item__subtitle">
        //                         <p>{el.textSubtitle}</p>
        //                     </div>
        //                 </div>
        //             )
        //         })
        //     }
        // </>

        <div className="info__main__item" key={cards.id}>
            <div className="info__main__item__img">
                <img src={cards.src} alt=""/>
            </div>

            <div className="info__main__item__title">
                <p>{cards.textTitle}</p>
            </div>

            <div className="info__main__item__subtitle">
                <p>{cards.textSubtitle}</p>
            </div>
        </div>
    );
});
