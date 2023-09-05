import { FC, memo } from 'react';
import Icon_1 from 'assets/Recipes/eye_icon.svg';
import Icon_2 from 'assets/Recipes/message__icon.svg';
import './RecipesCardBig.scss';

interface IRecipesCardBig {

}

export const RecipesCardBig: FC<IRecipesCardBig> = memo(({}) => {
    return (
        <div className="card__recipes__big">
            <div className="card__recipes__big__title">
                <p>breakfast</p>
            </div>

            <div className="card__recipes__big__data">
                <p>05 Jul 2016</p>
            </div>

            <div className="card__recipes__big__description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>

            <div className="card__recipes__big__author">
                <p>Jason Keller</p>
            </div>

            <div className="card__recipes__big__info">
                <div className="card__recipes__big__info__img">
                    <img src={Icon_1} alt=""/>275
                </div>

                <div className="card__recipes__big__info__img">
                    <img src={Icon_2} alt=""/>12
                </div>
            </div>

        </div>
    );
});
