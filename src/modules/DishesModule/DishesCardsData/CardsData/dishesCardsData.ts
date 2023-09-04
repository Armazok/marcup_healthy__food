import Item_1 from 'assets/Dishes/item_1.svg';
import Item_2 from 'assets/Dishes/item_2.svg';
import Item_3 from 'assets/Dishes/item_3.svg';
import Item_4 from 'assets/Dishes/item_4.svg';
import Item_5 from 'assets/Dishes/item_5.svg';
import Item_6 from 'assets/Dishes/item_6.svg';
import Stars_3_5 from 'assets/Dishes/stars_3.5-5.svg';
import Stars from 'assets/Dishes/stars.svg';

export type dishesCardsDataType = {
    id: number
    srcBg: string
    title: string
    subTitle: string
    description: string
    srcGrade: string
}

export const dishesCardsData: dishesCardsDataType[] = [
    {
        id: 1,
        srcBg: Item_1,
        title: 'Featured Meal',
        subTitle: 'Served with french fries + drink',
        description: 'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...',
        srcGrade: Stars_3_5
    },
    {
        id: 2,
        srcBg: Item_2,
        title: 'Featured Meal',
        subTitle: 'Served with french fries + drink',
        description: 'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...',
        srcGrade: Stars
    },
    {
        id: 3,
        srcBg: Item_3,
        title: 'Featured Meal',
        subTitle: 'Served with french fries + drink',
        description: 'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...',
        srcGrade: Stars
    },
    {
        id: 4,
        srcBg: Item_4,
        title: 'Featured Meal',
        subTitle: 'Served with french fries + drink',
        description: 'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...',
        srcGrade: Stars
    },
    {
        id: 5,
        srcBg: Item_5,
        title: 'Featured Meal',
        subTitle: 'Served with french fries + drink',
        description: 'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...',
        srcGrade: Stars
    },
    {
        id: 6,
        srcBg: Item_6,
        title: 'Featured Meal',
        subTitle: 'Served with french fries + drink',
        description: 'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...',
        srcGrade: Stars_3_5
    },
]
