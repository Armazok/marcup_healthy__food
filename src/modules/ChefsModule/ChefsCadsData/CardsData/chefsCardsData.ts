import Avatar_1 from 'assets/Chefs/Cards_1/Avatar_1.svg';
import Food_1_1 from 'assets/Chefs/Cards_1/Food_1.svg';
import Food_2_1 from 'assets/Chefs/Cards_1/Food_2.svg';
import Food_3_1 from 'assets/Chefs/Cards_1/Food_3.svg';

import Avatar_2 from 'assets/Chefs/Cards_2/Avatar_2.svg';
import Food_1_2 from 'assets/Chefs/Cards_2/Food_1.svg';
import Food_2_2 from 'assets/Chefs/Cards_2/Food_2.svg';
import Food_3_2 from 'assets/Chefs/Cards_2/Food_3.svg';

import Avatar_3 from 'assets/Chefs/Cards_3/Avatar_3.svg'
import Food_1_3 from 'assets/Chefs/Cards_3/Food_1.svg'
import Food_2_3 from 'assets/Chefs/Cards_3/Food_2.svg'
import Food_3_3 from 'assets/Chefs/Cards_3/Food_3.svg'

export type chefsCardsDataType = {
    id: number
    avatarChefs: string
    nameChefs: string
    categoryChefs: string
    srcFood_1: string
    srcFood_2: string
    srcFood_3: string
}
export const chefsCardsData: chefsCardsDataType[] = [
    {
        id: 1,
        avatarChefs: Avatar_1,
        nameChefs: 'Gregory Flores',
        categoryChefs: 'Chef of the cold',
        srcFood_1: Food_1_1,
        srcFood_2: Food_2_1,
        srcFood_3: Food_3_1
    },
    {
        id: 2,
        avatarChefs: Avatar_2,
        nameChefs: 'Annette Cooper',
        categoryChefs: 'Chef of the hot',
        srcFood_1: Food_1_2,
        srcFood_2: Food_2_2,
        srcFood_3: Food_3_2
    },
    {
        id: 3,
        avatarChefs: Avatar_3,
        nameChefs: 'Greg Fox',
        categoryChefs: 'Сhef macro kitchen',
        srcFood_1: Food_1_3,
        srcFood_2: Food_2_3,
        srcFood_3: Food_3_3
    }
]
