import { FC, memo } from 'react';
import { HeaderSection } from 'components/HeaderSection';
import { workCardsData } from 'modules/WorkModule/WorkCardsData';
import { WorkCard } from 'modules/WorkModule/WorkCard';
import './Work.scss';

interface IWork {

}

export const Work: FC<IWork> = memo(({}) => {
    return (
        <section className="work">
            <div className="work__container">
                <div className="work__content content__work">

                    <div className="content__work-header">
                        <HeaderSection
                            title={'how it works'}
                            bgTitle={'work'}
                        />
                    </div>

                    <div className="content__work-cards cards__work">
                        {workCardsData.map((el) => {
                            return (
                                <WorkCard cardsData={el} key={el.id}/>
                            )
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
});
