import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {Rating, RatingValueType} from "./Rating";

export default {
    title: 'Rating stories',
    component: Rating,
};

export const EmptyRating= () => <Rating value={0} onChange={x=>x}/>
export const Rating1= () => <Rating value={1} onChange={x=>x}/>
export const Rating2= () => <Rating value={2} onChange={x=>x}/>
export const Rating3= () => <Rating value={3} onChange={x=>x}/>
export const Rating4= () => <Rating value={4} onChange={x=>x}/>
export const Rating5= () => <Rating value={5} onChange={x=>x}/>

export const RatingChangings= () => {
    const [rating, setRating]=useState<RatingValueType>(3)
    return <Rating value={rating} onChange={setRating}/>
}


