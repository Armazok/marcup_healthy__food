import Item_1 from 'assets/About/item_1.png';
import Item_2 from 'assets/About/item_2.png';
import Item_3 from 'assets/About/item_2.png';
import Item_4 from 'assets/About/item_2.png';
import Item_5 from 'assets/About/item_2.png';
import Item_6 from 'assets/About/item_2.png';

export type SwiperDataItem = {
    id: number;
    src: string;
};

// Определение массива данных
export const swiperData: SwiperDataItem[] = [
    {id: 1, src: Item_1},
    {id: 2, src: Item_2},
    {id: 3, src: Item_3},
    {id: 4, src: Item_4},
    {id: 5, src: Item_5},
    {id: 6, src: Item_6},
];


