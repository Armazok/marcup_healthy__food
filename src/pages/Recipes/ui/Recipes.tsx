import { FC, memo } from 'react';
import './Recipes.scss';

interface IRecipes {

}

export const Recipes: FC<IRecipes> = memo(({}) => {
    return (
        <section className="recipes">
            <div className="recipes__container">
                <div className="recipes__content content__recipes">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at delectus dolor doloribus fuga
                    illum, impedit libero modi molestiae perferendis, quibusdam quidem quo repellendus rerum temporibus
                    velit vero voluptatem voluptates.
                </div>
            </div>
        </section>
    );
});
