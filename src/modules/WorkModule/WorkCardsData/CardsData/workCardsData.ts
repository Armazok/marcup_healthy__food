export interface IWorkDataCards {
    id: number
    workTitle: string
    workSubtitle: string
}

export const workCardsData: IWorkDataCards[] = [
    {
        id: 1,
        workTitle: 'Pick meals',
        workSubtitle: 'Choose your meals from our diverse weekly menu. Find gluten or dairy free, low carb & veggie options.'
    },
    {
        id: 2,
        workTitle: 'Choose how often',
        workSubtitle: 'Our team of chefs do the prep work - no more chopping, measuring, or sink full of dishes!'
    },
    {
        id: 3,
        workTitle: 'fast deliveries',
        workSubtitle: 'Your freshly prepped 15-min dinner kits arrive on your doorstep in a refrigerated box.'
    },
    {
        id: 4,
        workTitle: 'tasty meals',
        workSubtitle: 'Gobble makes cooking fast, so you have more time to unwind and be with family.'
    },
]
