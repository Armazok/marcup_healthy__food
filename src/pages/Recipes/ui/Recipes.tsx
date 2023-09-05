import { FC, memo } from 'react';
import { HeaderSection } from 'components/HeaderSection';
import { RecipesCardBig } from 'modules/RecipesModule/RecipesCardBig';
import { RecipesCardSmall } from 'modules/RecipesModule/RecipesCardSmall';
import './Recipes.scss';

interface IRecipes {

}

export const Recipes: FC<IRecipes> = memo(({}) => {
    return (
        <section className="recipes">
            <div className="recipes__container">
                <div className="recipes__content content__recipes">

                    <div className="content__recipes-header">
                        <HeaderSection
                            title={'Recipes From Our Chefs'}
                            bgTitle={'RECIPES'}
                        />
                    </div>

                    <div className="content__recipes-cards cards__recipes">

                        <div className="cards__recipes__wrapper-big card__recipes">
                            <RecipesCardBig/>
                        </div>


                        <div className="cards__recipes__wrapper-small card__recipes">
                            <RecipesCardSmall/>
                            <RecipesCardSmall/>
                            <RecipesCardSmall/>
                        </div>

                    </div>


                </div>
            </div>
        </section>
    );
});
