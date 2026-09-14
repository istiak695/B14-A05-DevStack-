import { use, useState } from 'react';
import type { card } from '../../types/cardType';
import Stack from './Stack';

interface CardsProps {
    cardsPromise: Promise<card[]>
}

const Cards = ({ cardsPromise }: CardsProps) => {

    const [selectedCards, setSelectedCards] = useState<card[]>([]);

    const handleSelectedCards = (card: card): void => {
        const newSelectedCards = [...selectedCards, card];
        setSelectedCards(newSelectedCards);
    }

    const handleRemoveCard = (card: card): void => {
        setSelectedCards(selectedCards.filter(selectedCard => selectedCard.id !== card.id));
    }

    const cards = use(cardsPromise);

    return (
        <div className='container mx-auto'>
            <div>
                <p className="font-bold text-2xl">
                    Explore the{' '}
                    <span className='bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent'>
                        Technologies
                    </span>
                </p>
                <p>Pick one technology per category to build your ideal stack.</p>
            </div>

            <div className=" flex gap-4">
                <Stack
                    cards={cards}
                    handleSelectedCards={handleSelectedCards}
                    handleRemoveCard={handleRemoveCard}
                    selected={selectedCards}
                    setSelected={setSelectedCards}
                />

               
            </div>
        </div>
    );
};

export default Cards;