import type { Dispatch, SetStateAction } from 'react';
import type { card } from '../../types/cardType';
import Cards from './Cards';

import FunCard from './FunCard';

interface StackProps {
    cards: card[];
    handleSelectedCards: (card: card) => void;
  

}
const Stack = ({ cards, handleSelectedCards ,
}: StackProps) => {
    console.log(cards, 'cards from stack')
    return (
        <div className='grid grid-cols-3 gap-4 mt-6'>

         


            {
                cards.map((card: card, ind: number) => {
                    return (
                        <FunCard 
                        key={ind}
                        card={card} 
                        handleSelectedCards={handleSelectedCards}
                       
                        ></FunCard>
                    )
                })
            }

        </div>
    )

};

export default Stack;