import { FC, memo } from 'react';
import './Main.scss';
import { Header } from 'components/Header';

interface IMain {

}

export const Main: FC<IMain> = memo(({}) => {
    return (
        <section className="main">
            <div className="main__container">
                <div className="main__content content__main">
                    <Header/>
                </div>
            </div>
        </section>
    );
});
