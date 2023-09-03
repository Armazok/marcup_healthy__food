import Item_1 from '../../../../assets/MainCards/item_1.svg';
import Item_2 from '../../../../assets/MainCards/item_2.svg';
import Item_3 from '../../../../assets/MainCards/item_3.svg';

export interface IMainDataCards {
    id: number
    src: string
    textTitle: string
    textSubtitle: string
}

export const mainCardsData: IMainDataCards[] = [
    {id: 1, src: Item_1, textTitle: 'Today 10:00 am - 7:00 pm', textSubtitle: 'Working hours'},
    {id: 2, src: Item_2, textTitle: 'Velyka Vasylkivska 100', textSubtitle: 'Get Directions'},
    {id: 3, src: Item_3, textTitle: '+38 (063)833 24 15', textSubtitle: 'Call Online'},
]
