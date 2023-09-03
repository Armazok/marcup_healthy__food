import { FC, memo } from 'react';
import './HeaderSection.scss';

interface IHeaderSection {
    title: string
    bgTitle: string
}

export const HeaderSection: FC<IHeaderSection> = memo(({
                                                           title,
                                                           bgTitle
                                                       }) => {
    return (
        <div className="header__about__title">
            <p>
                {title}<span>{bgTitle}</span>
            </p>
        </div>
    );
});
