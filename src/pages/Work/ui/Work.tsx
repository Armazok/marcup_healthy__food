import { FC, memo } from 'react';
import './Work.scss';

interface IWork {

}

export const Work: FC<IWork> = memo(({}) => {
    return (
        <section className="work">
            <div className="work__container">
                <div className="work__content content__work">
                    <p style={{marginTop: '80px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis eos hic id natus non
                        pariatur
                        qui. Aliquam, asperiores, delectus distinctio impedit ipsam minus quidem ratione reiciendis sint
                        temporibus vel?
                    </p>

                </div>
            </div>
        </section>
    );
});
