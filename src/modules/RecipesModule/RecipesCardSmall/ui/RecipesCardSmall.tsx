import { FC, memo } from 'react';
import Icon_1 from 'assets/Recipes/eye_icon.svg';
import Icon_2 from 'assets/Recipes/message__icon.svg';
import './RecipesCardSmall.scss';

interface IRecipesCardSmall {

}

export const RecipesCardSmall: FC<IRecipesCardSmall> = memo(({}) => {
    return (
        <div className="card__recipes__small">

            <div className="card__recipes__small__text">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                </p>
            </div>

            <div className="card__recipes__small__footer">

                <div className="card__recipes__small__footer__info__wrapper">
                    <div className="card__recipes__small__footer__text">
                        <p>lunch</p>
                    </div>

                    <div className="card__recipes__small__footer__data">
                        <p>07 Jan 2016</p>
                    </div>
                </div>


                <div className="card__recipes__small__info">
                    <div className="card__recipes__small__info__img">
                        <img src={Icon_1} alt=""/>275
                    </div>

                    <div className="card__recipes__small__info__img">
                        <img src={Icon_2} alt=""/>12
                    </div>
                </div>

            </div>
        </div>
    );
});
