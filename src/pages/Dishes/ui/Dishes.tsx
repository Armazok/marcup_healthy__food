import { FC, memo } from 'react';
import { HeaderSection } from 'components/HeaderSection';
import { DishesCard } from 'modules/DishesModule/DishesCard';
import { dishesCardsData } from 'modules/DishesModule/DishesCardsData';
import './Dishes.scss';

interface IDishes {

}

export const Dishes: FC<IDishes> = memo(({}) => {
    return (
        <section className="dishes">
            <div className="dishes__container">
                <div className="dishes__content content__dishes">

                    <div className="content__dishes-header">
                        <HeaderSection
                            title={'Dish Of The Day'}
                            bgTitle={'DISHES'}
                        />
                    </div>

                    <div className="content__dishes-items">
                        {dishesCardsData.map((el) => {
                            return (
                                <DishesCard cards={el} key={el.id}/>
                            )
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
});
