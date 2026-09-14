import React, { use, useState } from 'react';
import type { card } from '../../types/cardType';
import Stack from './Stack';
import FunCard from './FunCard';

interface CardsProps {
    cardsPromise: Promise<card[]>
}



const Cards = ({ cardsPromise,  }: CardsProps) => {

    const [SelectedCards, setSelectedCards] = useState<card[]>([]);



    console.log(cardsPromise);

    const handleSelectedCards = (card: card): void => {
        const newSelectedCards = [...SelectedCards, card];
        setSelectedCards(newSelectedCards);
    }

    const cards = use(cardsPromise);

    console.log(cards, 'cards');
    return (
        <div className='container mx-auto'>
            <div>
                <p className="font-bold text-2xl">Explore the <span className='bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent'>Technologies</span></p>
                <p>Pick one technology per category to build your ideal stack.</p>

            </div>

<Stack cards={cards} handleSelectedCards={handleSelectedCards}></Stack>

            <h2>{SelectedCards.length} Technology Selected</h2>
   

        </div>
    );
};

export default Cards;