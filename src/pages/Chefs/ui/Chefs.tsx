import { FC, memo } from 'react';
import { HeaderSection } from 'components/HeaderSection';
import { ChefsCard } from 'modules/ChefsModule/ChefsCard';
import { chefsCardsData } from 'modules/ChefsModule/ChefsCadsData';
import './Chefs.scss';

interface IChefs {

}

export const Chefs: FC<IChefs> = memo(({}) => {
    return (
        <section className="chefs">
            <div className="chefs__container">
                <div className="chefs__content content__chefs">

                    <div className="content__chefs-header header__chefs">
                        <div className="header__chefs__text">
                            <HeaderSection
                                title={'This month\'s chefs'}
                                bgTitle={'chefs'}
                            />
                        </div>
                    </div>

                    <div className="content__chefs-cards">
                        {chefsCardsData.map((el) => {
                            return (
                                <ChefsCard cards={el} key={el.id}/>
                            )
                        })}

                    </div>
                </div>
            </div>
        </section>
    );
});











