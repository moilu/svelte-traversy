import { writable, type Writable } from "svelte/store";

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo commodi iste quae aspernatur, omnis cupiditate quod quidem ex atque labore quasi voluptatem accusantium amet nesciunt facere porro animi iure earum.'
    },
    {
        id: 2,
        rating: 8,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo commodi iste quae aspernatur, omnis cupiditate quod quidem ex atque labore quasi voluptatem accusantium amet nesciunt facere porro animi iure earum.'
    },
    {
        id: 3,
        rating: 9,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo commodi iste quae aspernatur, omnis cupiditate quod quidem ex atque labore quasi voluptatem accusantium amet nesciunt facere porro animi iure earum.'
    }
]);