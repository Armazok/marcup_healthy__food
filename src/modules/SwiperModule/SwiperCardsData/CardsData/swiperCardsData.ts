import Item_1 from 'assets/About/item_1.png';
import Item_2 from 'assets/About/item_2.png';
import Item_3 from 'assets/Dishes/item_1.svg'
import Item_4 from 'assets/Dishes/item_2.svg'
import Item_5 from 'assets/Dishes/item_3.svg'
import Item_6 from 'assets/Dishes/item_4.svg'
import Item_7 from 'assets/Dishes/item_5.svg'
import Item_8 from 'assets/Dishes/item_6.svg'

export type SwiperDataItem = {
    id: number;
    src: string;
};

export const swiperData: SwiperDataItem[] = [
    {id: 1, src: Item_1},
    {id: 2, src: Item_2},
    {id: 3, src: Item_3},
    {id: 4, src: Item_4},
    {id: 5, src: Item_5},
    {id: 6, src: Item_6},
    {id: 7, src: Item_7},
    {id: 8, src: Item_8},
];


