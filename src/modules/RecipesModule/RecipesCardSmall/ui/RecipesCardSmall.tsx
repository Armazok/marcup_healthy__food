import { FC, memo } from 'react';
import IconWhite_1 from 'assets/Recipes/eye_icon.svg';
import IconWhite_2 from 'assets/Recipes/message__icon.svg';
import IconBlack_1 from 'assets/Recipes/eye_black.svg'
import IconBlack_2 from 'assets/Recipes/message_black.svg'
import './RecipesCardSmall.scss';

interface IRecipesCardSmall {
    bg_small?: boolean
    bg_green?: boolean
    cardTextBack?: boolean
    cardTypeFoodBlack?: boolean
    cardDateBlack?: boolean
    iconBlack_1?: boolean
    iconBlack_2?: boolean

    cardText: string
    foodType: string
    cardDate: string
}

export const RecipesCardSmall: FC<IRecipesCardSmall> = memo(({
                                                                 bg_small = false,
                                                                 bg_green = false,
                                                                 cardTextBack = false,
                                                                 cardTypeFoodBlack = false,
                                                                 cardDateBlack = false,
                                                                 iconBlack_1 = false,
                                                                 iconBlack_2 = false,
                                                                 cardText,
                                                                 foodType,
                                                                 cardDate
                                                             }) => {

    const card__recipes__small = `
    card__recipes__small 
    ${bg_small ? 'bg-small-class' : ''} 
    ${bg_green ? 'bg-green-class' : ''}`;

    return (
        <div className={card__recipes__small}>

            <div className={`card__recipes__small__text ? ${cardTextBack ? 'card-text-black' : ''}`}>
                <p>
                    {cardText}
                </p>
            </div>

            <div className="card__recipes__small__footer">

                <div className="card__recipes__small__footer__info__wrapper">
                    <div className={`card__recipes__small__footer__text ? ${cardTypeFoodBlack ? 'food-type' : ''}`}>
                        <p>{foodType}</p>
                    </div>

                    <div className={`card__recipes__small__footer__data ? ${cardDateBlack ? 'card-data' : ''}`}>
                        <p>{cardDate}</p>
                    </div>
                </div>


                <div className="card__recipes__small__info">
                    <div className="card__recipes__small__info__img">
                        {
                            iconBlack_1
                                ? <><img src={IconBlack_1} alt=""/><span style={{color: '#1A1A1A'}}>275</span></>
                                : <><img src={IconWhite_1} alt=""/><span>275</span></>
                        }
                    </div>

                    <div className="card__recipes__small__info__img">
                        {
                            iconBlack_2
                                ? <><img src={IconBlack_2} alt=""/><span style={{color: '#1A1A1A'}}>12</span></>
                                : <><img src={IconWhite_2} alt=""/><span>12</span></>
                        }
                    </div>
                </div>

            </div>
        </div>
    );
});
